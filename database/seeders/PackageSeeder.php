<?php

namespace Database\Seeders;

use App\Models\Package;
use App\Models\Vendor;
use App\Models\VendorCategory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Collection;

/**
 * Seed paket Essential / Classic / Premium + mapping vendor.
 *
 * Aturan:
 * - Setiap paket minimal 3 vendor per kategori (jika stok kategori cukup).
 * - Vendor paket bawah boleh naik ke paket atas (Essential → Classic → Premium).
 * - Vendor paket atas TIDAK boleh turun ke paket bawah.
 *
 * Tiering per kategori (urut price_min ASC = semakin “bawah”):
 * - Tier 1 (Essential pool): 3 vendor termurah → Essential + Classic + Premium
 * - Tier 2 (Classic extra): 3 berikutnya → Classic + Premium saja
 * - Tier 3 (Premium extra): 3 berikutnya → Premium saja
 */
class PackageSeeder extends Seeder
{
    private const PER_TIER = 3;

    public function run(): void
    {
        $packages = $this->seedPackages();
        $this->attachVendorsByHierarchy($packages);
    }

    /**
     * @return array{essential: Package, classic: Package, premium: Package}
     */
    private function seedPackages(): array
    {
        $definitions = [
            'essential' => [
                'name' => 'Essential',
                'tagline' => 'A focused foundation for couples who want professional organizing.',
                'description' => 'A focused foundation for couples who want professional organizing with carefully chosen inclusions.',
                'price_label' => 'Rp 95.000.000',
                'price_from' => 95_000_000,
                'guest_min' => 80,
                'guest_max' => 150,
                'guest_label' => '80–150 guests',
                'is_featured' => false,
                'sort_order' => 1,
                'tier' => 1,
                'cover_image_url' => 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop',
                'inclusions' => [
                    'Wedding Organizer',
                    'Day-of Coordination',
                    'Decoration (Intimate)',
                    'Photography',
                    'Consultation Session',
                ],
            ],
            'classic' => [
                'name' => 'Classic',
                'tagline' => 'A complete and elegant wedding experience.',
                'description' => 'For couples looking for a complete and elegant wedding experience.',
                'price_label' => 'Rp 175.000.000',
                'price_from' => 175_000_000,
                'guest_min' => 200,
                'guest_max' => 400,
                'guest_label' => '200–400 guests',
                'is_featured' => true,
                'sort_order' => 2,
                'tier' => 2,
                'cover_image_url' => 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop',
                'inclusions' => [
                    'Wedding Organizer',
                    'Decoration',
                    'Catering Coordination',
                    'Photography',
                    'MUA',
                    'Entertainment',
                ],
            ],
            'premium' => [
                'name' => 'Premium',
                'tagline' => 'An elevated celebration with fuller styling and guest experience.',
                'description' => 'An elevated celebration with fuller styling, documentation, and guest experience.',
                'price_label' => 'Rp 275.000.000',
                'price_from' => 275_000_000,
                'guest_min' => 250,
                'guest_max' => 500,
                'guest_label' => '250–500 guests',
                'is_featured' => false,
                'sort_order' => 3,
                'tier' => 3,
                'cover_image_url' => 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
                'inclusions' => [
                    'Full Wedding Planning',
                    'Premium Decoration',
                    'Photography & Videography',
                    'MUA & Attire Guidance',
                    'Entertainment',
                    'Guest Concierge Support',
                ],
            ],
        ];

        $result = [];

        foreach ($definitions as $slug => $data) {
            $inclusions = $data['inclusions'];
            unset($data['inclusions']);

            $package = Package::query()->updateOrCreate(
                ['slug' => $slug],
                array_merge($data, ['is_active' => true]),
            );

            $package->inclusions()->delete();

            foreach ($inclusions as $index => $label) {
                $package->inclusions()->create([
                    'label' => $label,
                    'sort_order' => $index + 1,
                ]);
            }

            $package->vendors()->detach();
            $result[$slug] = $package;
        }

        return $result;
    }

    /**
     * @param  array{essential: Package, classic: Package, premium: Package}  $packages
     */
    private function attachVendorsByHierarchy(array $packages): void
    {
        $categories = VendorCategory::query()->orderBy('sort_order')->get();

        $essentialSync = [];
        $classicSync = [];
        $premiumSync = [];
        $sort = 0;

        foreach ($categories as $category) {
            /** @var Collection<int, Vendor> $vendors */
            $vendors = Vendor::query()
                ->where('category_id', $category->id)
                ->where('is_active', true)
                ->orderBy('price_min')
                ->orderBy('id')
                ->get();

            if ($vendors->isEmpty()) {
                continue;
            }

            // Pastikan minimal 3 per kategori jika stok cukup; jika kurang, ambil semua.
            $tier1 = $vendors->take(self::PER_TIER);
            $tier2 = $vendors->slice(self::PER_TIER, self::PER_TIER)->values();
            $tier3 = $vendors->slice(self::PER_TIER * 2, self::PER_TIER)->values();

            // Essential: hanya tier 1 (tidak boleh dapat vendor atas)
            foreach ($tier1 as $vendor) {
                $essentialSync[$vendor->id] = [
                    'sort_order' => ++$sort,
                    'role_note' => $category->name.' · Essential pool',
                ];
            }

            // Classic: Essential naik + Classic extra (tidak boleh Premium-only)
            foreach ($tier1->concat($tier2) as $vendor) {
                $classicSync[$vendor->id] = [
                    'sort_order' => ++$sort,
                    'role_note' => $category->name.(
                        $tier1->contains('id', $vendor->id)
                            ? ' · From Essential (cross-up)'
                            : ' · Classic pool'
                    ),
                ];
            }

            // Premium: semua naik (Essential + Classic + Premium extra)
            foreach ($tier1->concat($tier2)->concat($tier3) as $vendor) {
                $from = match (true) {
                    $tier3->contains('id', $vendor->id) => ' · Premium pool',
                    $tier2->contains('id', $vendor->id) => ' · From Classic (cross-up)',
                    default => ' · From Essential (cross-up)',
                };

                $premiumSync[$vendor->id] = [
                    'sort_order' => ++$sort,
                    'role_note' => $category->name.$from,
                ];
            }
        }

        $packages['essential']->vendors()->sync($essentialSync);
        $packages['classic']->vendors()->sync($classicSync);
        $packages['premium']->vendors()->sync($premiumSync);
    }
}
