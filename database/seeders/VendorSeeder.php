<?php

namespace Database\Seeders;

use App\Models\Vendor;
use App\Models\VendorCategory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class VendorSeeder extends Seeder
{
    /**
     * Seed kategori + banyak vendor partner FG Wedding.
     * Jalankan nanti setelah migrate: php artisan db:seed --class=VendorSeeder
     */
    public function run(): void
    {
        $categories = [
            ['key' => 'venue', 'name' => 'Venue', 'sort_order' => 1],
            ['key' => 'catering', 'name' => 'Katering', 'sort_order' => 2],
            ['key' => 'decoration', 'name' => 'Dekorasi', 'sort_order' => 3],
            ['key' => 'photography', 'name' => 'Fotografi', 'sort_order' => 4],
            ['key' => 'videography', 'name' => 'Videografi', 'sort_order' => 5],
            ['key' => 'entertainment', 'name' => 'Entertainment', 'sort_order' => 6],
            ['key' => 'makeup', 'name' => 'Makeup & Hair', 'sort_order' => 7],
            ['key' => 'attire', 'name' => 'Busana', 'sort_order' => 8],
            ['key' => 'invitation', 'name' => 'Undangan', 'sort_order' => 9],
            ['key' => 'cake', 'name' => 'Kue Pengantin', 'sort_order' => 10],
            ['key' => 'mc', 'name' => 'MC / Host', 'sort_order' => 11],
            ['key' => 'other', 'name' => 'Lainnya', 'sort_order' => 99],
        ];

        $categoryIds = [];

        foreach ($categories as $category) {
            $model = VendorCategory::query()->updateOrCreate(
                ['key' => $category['key']],
                [
                    'name' => $category['name'],
                    'sort_order' => $category['sort_order'],
                ],
            );
            $categoryIds[$category['key']] = $model->id;
        }

        $vendors = $this->vendors();

        foreach ($vendors as $vendor) {
            $categoryKey = $vendor['category'];
            unset($vendor['category']);

            Vendor::query()->updateOrCreate(
                ['slug' => $vendor['slug']],
                array_merge($vendor, [
                    'category_id' => $categoryIds[$categoryKey],
                    'is_partner' => true,
                    'is_active' => true,
                ]),
            );
        }
    }

    /**
     * @return list<array<string, mixed>>
     */
    private function vendors(): array
    {
        $rows = [
            // —— Venue ——
            ['The Glass House Menteng', 'venue', 'Jakarta', ['Jakarta', 'Depok', 'Tangerang'], 60000000, 180000000, 80, 400, ['modern', 'elegant', 'indoor'], ['indoor'], 'Venue indoor bercahaya alami dengan courtyard kecil untuk akad.', 4.80],
            ['Ballroom Emerald Kempinski', 'venue', 'Jakarta', ['Jakarta'], 120000000, 350000000, 200, 800, ['luxury', 'classic'], ['indoor'], 'Ballroom mewah dengan kapasitas besar dan kitchen on-site.', 4.70],
            ['Taman Impian Outdoor BSD', 'venue', 'Tangerang', ['Tangerang', 'Jakarta'], 45000000, 150000000, 100, 500, ['garden', 'romantic'], ['outdoor'], 'Garden venue dengan gazebo dan area resepsi terbuka.', 4.55],
            ['Savanna Chapel Bandung', 'venue', 'Bandung', ['Bandung', 'Cimahi'], 35000000, 120000000, 60, 300, ['rustic', 'garden'], ['outdoor', 'indoor'], 'Chapel outdoor di kaki gunung dengan view sunset.', 4.65],
            ['Gedung Merdeka Heritage', 'venue', 'Bandung', ['Bandung'], 50000000, 160000000, 150, 600, ['heritage', 'classic'], ['indoor'], 'Gedung heritage untuk resepsi formal dan akad tradisional.', 4.50],
            ['The Westin Ballroom Surabaya', 'venue', 'Surabaya', ['Surabaya', 'Sidoarjo'], 90000000, 280000000, 200, 700, ['luxury', 'modern'], ['indoor'], 'Ballroom hotel bintang 5 dengan paket F&B fleksibel.', 4.75],
            ['Villa Ombak Uluwatu', 'venue', 'Bali', ['Bali'], 80000000, 400000000, 40, 200, ['destination', 'ocean', 'luxury'], ['outdoor'], 'Cliff-side villa untuk intimate destination wedding.', 4.90],
            ['Ayana Garden Courtyard', 'venue', 'Bali', ['Bali'], 100000000, 450000000, 100, 400, ['luxury', 'garden'], ['outdoor'], 'Courtyard tropis dengan lighting premium untuk resepsi malam.', 4.85],
            ['Pendopo Agung Yogyakarta', 'venue', 'Yogyakarta', ['Yogyakarta', 'Sleman'], 25000000, 90000000, 80, 350, ['traditional', 'javanese'], ['outdoor', 'indoor'], 'Pendopo joglo untuk akad adat Jawa dan resepsi.', 4.60],
            ['Grand Ballroom Medan Marriott', 'venue', 'Medan', ['Medan'], 70000000, 220000000, 150, 600, ['luxury', 'modern'], ['indoor'], 'Ballroom besar untuk resepsi keluarga besar Medan.', 4.55],
            ['Fort Rotterdam Lawn', 'venue', 'Makassar', ['Makassar'], 30000000, 110000000, 100, 400, ['heritage', 'outdoor'], ['outdoor'], 'Area hijau heritage dengan backdrop benteng historis.', 4.40],
            ['Semarang Riverside Hall', 'venue', 'Semarang', ['Semarang'], 40000000, 130000000, 120, 450, ['modern', 'riverside'], ['indoor', 'outdoor'], 'Hall modern menghadap sungai dengan rooftop cocktail.', 4.45],

            // —— Catering ——
            ['Seruni Catering Jakarta', 'catering', 'Jakarta', ['Jakarta', 'Tangerang', 'Bekasi'], 175000, 350000, null, null, ['indo', 'fusion', 'elegant'], ['indoor', 'outdoor'], 'Katering per-pax dengan menu fusion Indonesia & western.', 4.70],
            ['Dapur Rempah Nusantara', 'catering', 'Jakarta', ['Jakarta', 'Depok'], 150000, 280000, null, null, ['traditional', 'indo'], ['indoor', 'outdoor'], 'Spesialis nasi tumpeng, padang, dan prasmanan keluarga.', 4.50],
            ['Bonvivant Fine Dining Catering', 'catering', 'Jakarta', ['Jakarta'], 280000, 550000, null, null, ['luxury', 'western', 'fusion'], ['indoor'], 'Plated fine dining untuk resepsi premium.', 4.80],
            ['Bandung Sajian Priangan', 'catering', 'Bandung', ['Bandung', 'Cimahi'], 140000, 260000, null, null, ['sundanese', 'traditional'], ['indoor', 'outdoor'], 'Menu Sunda modern untuk resepsi outdoor & indoor.', 4.55],
            ['Surabaya Rasa Kampung', 'catering', 'Surabaya', ['Surabaya', 'Gresik'], 130000, 250000, null, null, ['indo', 'comfort'], ['indoor', 'outdoor'], 'Katering volume tinggi dengan rasa rumahan yang konsisten.', 4.40],
            ['Bali Tropical Feast', 'catering', 'Bali', ['Bali'], 200000, 450000, null, null, ['balinese', 'fusion', 'seafood'], ['outdoor'], 'Feast tropis & seafood untuk destination wedding.', 4.75],
            ['Gudeg Royal Catering', 'catering', 'Yogyakarta', ['Yogyakarta', 'Bantul'], 120000, 220000, null, null, ['javanese', 'traditional'], ['indoor', 'outdoor'], 'Gudeg, sego megono, dan prasmanan adat Jawa.', 4.60],
            ['Medan Selera Kampung', 'catering', 'Medan', ['Medan'], 135000, 270000, null, null, ['batak', 'malay', 'indo'], ['indoor', 'outdoor'], 'Menu Medan lengkap termasuk spesial batak & melayu.', 4.50],
            ['Makassar Laut Catering', 'catering', 'Makassar', ['Makassar'], 145000, 300000, null, null, ['seafood', 'indo'], ['outdoor', 'indoor'], 'Fokus seafood segar dan menu Sulawesi.', 4.45],
            ['Semarang Luna Kitchen', 'catering', 'Semarang', ['Semarang'], 140000, 260000, null, null, ['indo', 'modern'], ['indoor'], 'Kitchen modern dengan opsi live cooking station.', 4.50],

            // —— Decoration ——
            ['Lumina Decoration', 'decoration', 'Jakarta', ['Jakarta', 'Tangerang'], 25000000, 90000000, null, null, ['garden', 'elegant', 'modern'], ['indoor', 'outdoor'], 'Instalasi garden elegant dengan lighting hangat.', 4.85],
            ['Atelier Bunga Menteng', 'decoration', 'Jakarta', ['Jakarta'], 30000000, 120000000, null, null, ['floral', 'luxury', 'romantic'], ['indoor'], 'Floral design mewah untuk pelaminan & aisle.', 4.80],
            ['Rustic Pine Studio', 'decoration', 'Bandung', ['Bandung'], 18000000, 65000000, null, null, ['rustic', 'boho', 'garden'], ['outdoor'], 'Dekor rustic pine & dried flowers untuk outdoor.', 4.60],
            ['Pelaminan Emas Priangan', 'decoration', 'Bandung', ['Bandung', 'Garut'], 20000000, 75000000, null, null, ['traditional', 'sundanese'], ['indoor'], 'Pelaminan adat Sunda dengan detail songket.', 4.55],
            ['Oasis Bloom Surabaya', 'decoration', 'Surabaya', ['Surabaya'], 22000000, 85000000, null, null, ['modern', 'minimalist', 'elegant'], ['indoor', 'outdoor'], 'Dekor minimalis modern dengan aksen metallic.', 4.65],
            ['Frangipani Bali Design', 'decoration', 'Bali', ['Bali'], 35000000, 150000000, null, null, ['tropical', 'boho', 'luxury'], ['outdoor'], 'Tropical floral untuk cliff & beach ceremony.', 4.90],
            ['Jogja Kanigoro Decors', 'decoration', 'Yogyakarta', ['Yogyakarta'], 15000000, 60000000, null, null, ['javanese', 'traditional', 'elegant'], ['indoor', 'outdoor'], 'Gebyok, janur, dan pelaminan Jawa kontemporer.', 4.70],
            ['Medan Bloom Atelier', 'decoration', 'Medan', ['Medan'], 18000000, 70000000, null, null, ['elegant', 'classic'], ['indoor'], 'Dekor klasik untuk ballroom keluarga besar.', 4.50],
            ['Celebes Floral House', 'decoration', 'Makassar', ['Makassar'], 16000000, 65000000, null, null, ['tropical', 'modern'], ['outdoor', 'indoor'], 'Rangkaian tropis untuk venue outdoor Makassar.', 4.40],
            ['Semarang Lumen Decor', 'decoration', 'Semarang', ['Semarang'], 17000000, 70000000, null, null, ['modern', 'romantic'], ['indoor'], 'Lighting-focused decoration untuk resepsi malam.', 4.55],

            // —— Photography ——
            ['Frame & Folio', 'photography', 'Jakarta', ['Jakarta', 'Bandung', 'Bali'], 18000000, 55000000, null, null, ['documentary', 'editorial', 'modern'], ['indoor', 'outdoor'], 'Dokumentasi cinematic dengan gaya editorial.', 4.85],
            ['Cerita Diam Photography', 'photography', 'Jakarta', ['Jakarta', 'Tangerang'], 15000000, 45000000, null, null, ['documentary', 'candid'], ['indoor', 'outdoor'], 'Candid storytelling dari persiapan hingga resepsi.', 4.70],
            ['Lens of Priangan', 'photography', 'Bandung', ['Bandung', 'Jakarta'], 12000000, 38000000, null, null, ['romantic', 'natural'], ['outdoor'], 'Natural light specialist untuk prewedding & wedding day.', 4.60],
            ['Surabaya Lightkeepers', 'photography', 'Surabaya', ['Surabaya', 'Malang'], 13000000, 40000000, null, null, ['modern', 'journalistic'], ['indoor', 'outdoor'], 'Tim dua fotografer untuk coverage penuh.', 4.55],
            ['Island Frame Bali', 'photography', 'Bali', ['Bali'], 20000000, 70000000, null, null, ['destination', 'editorial', 'ocean'], ['outdoor'], 'Spesialis destination wedding di cliff & beach.', 4.90],
            ['Jogja Analog Stories', 'photography', 'Yogyakarta', ['Yogyakarta'], 10000000, 32000000, null, null, ['film', 'documentary', 'artistic'], ['indoor', 'outdoor'], 'Kombinasi digital + film analog untuk look artistik.', 4.75],
            ['Medan Portrait Co.', 'photography', 'Medan', ['Medan'], 11000000, 35000000, null, null, ['classic', 'family'], ['indoor'], 'Fokus family formal & group shots yang rapi.', 4.45],
            ['Makassar Shoreline Photos', 'photography', 'Makassar', ['Makassar'], 10000000, 33000000, null, null, ['outdoor', 'romantic'], ['outdoor'], 'Session outdoor tepi laut dan kota lama.', 4.40],
            ['Semarang Ember Studio', 'photography', 'Semarang', ['Semarang', 'Solo'], 11000000, 36000000, null, null, ['modern', 'warm'], ['indoor', 'outdoor'], 'Warna hangat, cocok untuk venue heritage & modern.', 4.50],
            ['Nusantara Wedding Collective', 'photography', 'Jakarta', ['Jakarta', 'Surabaya', 'Bali', 'Yogyakarta'], 25000000, 80000000, null, null, ['documentary', 'luxury'], ['indoor', 'outdoor'], 'Collective multi-city untuk wedding skala besar.', 4.80],

            // —— Videography ——
            ['Motion Vow Films', 'videography', 'Jakarta', ['Jakarta', 'Bandung'], 20000000, 65000000, null, null, ['cinematic', 'modern'], ['indoor', 'outdoor'], 'Same-day edit + cinematic highlight 5–8 menit.', 4.80],
            ['Biru Senja Pictures', 'videography', 'Bandung', ['Bandung', 'Jakarta'], 15000000, 48000000, null, null, ['cinematic', 'romantic'], ['outdoor'], 'Drone + ground coverage untuk outdoor mountain.', 4.65],
            ['Surabaya Reel House', 'videography', 'Surabaya', ['Surabaya'], 14000000, 45000000, null, null, ['documentary', 'cinematic'], ['indoor'], 'Full day video team dengan teaser 24 jam.', 4.55],
            ['Bali Cliff Cinema', 'videography', 'Bali', ['Bali'], 25000000, 90000000, null, null, ['destination', 'cinematic', 'drone'], ['outdoor'], 'Cinematic destination film dengan aerial premium.', 4.90],
            ['Jogja Wayang Films', 'videography', 'Yogyakarta', ['Yogyakarta'], 12000000, 40000000, null, null, ['artistic', 'cultural'], ['indoor', 'outdoor'], 'Pendekatan artistik untuk akad adat Jawa.', 4.70],
            ['Medan Frame Motion', 'videography', 'Medan', ['Medan'], 13000000, 42000000, null, null, ['modern', 'family'], ['indoor'], 'Coverage keluarga besar dengan multi-cam.', 4.45],

            // —— Entertainment ——
            ['Gema Harmoni Orchestra', 'entertainment', 'Jakarta', ['Jakarta', 'Tangerang'], 15000000, 60000000, null, null, ['orchestra', 'classic', 'luxury'], ['indoor'], 'String quartet hingga chamber orchestra.', 4.75],
            ['Sunset Acoustic Duo', 'entertainment', 'Jakarta', ['Jakarta', 'Bandung'], 5000000, 18000000, null, null, ['acoustic', 'intimate'], ['outdoor', 'indoor'], 'Duo akustik untuk cocktail & intimate dinner.', 4.60],
            ['Bandung Jazz Collective', 'entertainment', 'Bandung', ['Bandung'], 8000000, 30000000, null, null, ['jazz', 'modern'], ['indoor'], 'Live jazz combo untuk resepsi malam.', 4.55],
            ['Bali Gamelan & Fusion Band', 'entertainment', 'Bali', ['Bali'], 10000000, 45000000, null, null, ['traditional', 'fusion'], ['outdoor'], 'Gamelan + fusion band untuk ceremony & party.', 4.70],
            ['Surabaya Party Sound', 'entertainment', 'Surabaya', ['Surabaya'], 7000000, 28000000, null, null, ['dj', 'party'], ['indoor'], 'DJ + sound system untuk after-party resepsi.', 4.40],
            ['Jogja Karawitan Ensemble', 'entertainment', 'Yogyakarta', ['Yogyakarta'], 6000000, 22000000, null, null, ['traditional', 'javanese'], ['indoor', 'outdoor'], 'Karawitan untuk prosesi adat Jawa.', 4.65],

            // —— Makeup ——
            ['Aura Bridal Makeup', 'makeup', 'Jakarta', ['Jakarta', 'Tangerang'], 5000000, 25000000, null, null, ['bridal', 'glam', 'natural'], ['indoor'], 'Makeup pengantin + family package (hingga 6 orang).', 4.80],
            ['Cantika Soft Glam Studio', 'makeup', 'Jakarta', ['Jakarta'], 4500000, 20000000, null, null, ['soft-glam', 'modern'], ['indoor'], 'Soft glam tahan lama untuk akad & resepsi.', 4.70],
            ['Bandung Bloom Beauty', 'makeup', 'Bandung', ['Bandung'], 3500000, 15000000, null, null, ['natural', 'korean'], ['indoor'], 'Look natural-korean untuk prewedding & wedding.', 4.55],
            ['Surabaya Royal Bride MUA', 'makeup', 'Surabaya', ['Surabaya'], 4000000, 18000000, null, null, ['glam', 'traditional'], ['indoor'], 'Spesialis makeup adat + modern switch look.', 4.60],
            ['Bali Bare Skin Bridal', 'makeup', 'Bali', ['Bali'], 6000000, 28000000, null, null, ['natural', 'destination'], ['outdoor'], 'Makeup tahan lembap untuk outdoor Bali.', 4.85],
            ['Jogja Paes & Modern MUA', 'makeup', 'Yogyakarta', ['Yogyakarta'], 3500000, 16000000, null, null, ['traditional', 'paes', 'modern'], ['indoor'], 'Paes Jawa lengkap + retouch modern untuk resepsi.', 4.75],

            // —— Attire ——
            ['Atelier Senja Bridal', 'attire', 'Jakarta', ['Jakarta'], 15000000, 80000000, null, null, ['modern', 'minimalist', 'luxury'], ['indoor'], 'Gaun custom & sewa premium untuk pengantin wanita.', 4.80],
            ['Nusantara Beskap House', 'attire', 'Jakarta', ['Jakarta', 'Yogyakarta'], 8000000, 45000000, null, null, ['traditional', 'javanese'], ['indoor'], 'Beskap, kebaya, dan paket pasangan adat.', 4.70],
            ['Bandung Lace Atelier', 'attire', 'Bandung', ['Bandung'], 10000000, 55000000, null, null, ['romantic', 'lace'], ['indoor'], 'Gaun lace romantic dengan fitting 3 sesi.', 4.65],
            ['Bali Songket & White', 'attire', 'Bali', ['Bali'], 12000000, 70000000, null, null, ['balinese', 'modern'], ['indoor'], 'Kombinasi songket Bali & white gown destination.', 4.75],
            ['Jogja Batik Bridal Wear', 'attire', 'Yogyakarta', ['Yogyakarta'], 7000000, 40000000, null, null, ['batik', 'traditional'], ['indoor'], 'Kebaya batik tulis & jas batik custom.', 4.70],
            ['Surabaya Formal Tailor', 'attire', 'Surabaya', ['Surabaya'], 6000000, 35000000, null, null, ['classic', 'groom'], ['indoor'], 'Jas pengantin pria & family suit package.', 4.50],

            // —— Invitation ——
            ['Kertas Indah Letterpress', 'invitation', 'Jakarta', ['Jakarta'], 15000000, 60000000, null, null, ['letterpress', 'luxury', 'minimalist'], null, 'Undangan letterpress & suite lengkap (RSVP, map, seal).', 4.80],
            ['Digital Vow Studio', 'invitation', 'Jakarta', ['Jakarta', 'Bandung', 'Surabaya'], 3000000, 15000000, null, null, ['digital', 'modern', 'video'], null, 'Undangan digital + video invitation & website RSVP.', 4.60],
            ['Bandung Paper Craft Co.', 'invitation', 'Bandung', ['Bandung'], 8000000, 35000000, null, null, ['handmade', 'rustic'], null, 'Undangan handmade dengan material daur ulang.', 4.55],
            ['Jogja Batik Invitation', 'invitation', 'Yogyakarta', ['Yogyakarta'], 7000000, 30000000, null, null, ['batik', 'traditional'], null, 'Amplop & kartu bermotif batik tulis.', 4.65],
            ['Bali Tropical Invite', 'invitation', 'Bali', ['Bali'], 9000000, 40000000, null, null, ['tropical', 'destination'], null, 'Suite undangan tropis untuk destination guest.', 4.70],

            // —— Cake ——
            ['Maison Sucre Jakarta', 'cake', 'Jakarta', ['Jakarta', 'Tangerang'], 4000000, 25000000, null, null, ['luxury', 'modern', 'floral'], null, 'Wedding cake bertingkat dengan buttercream floral.', 4.85],
            ['Bandung Buttercream Lab', 'cake', 'Bandung', ['Bandung'], 3000000, 18000000, null, null, ['buttercream', 'rustic'], null, 'Cake rustic buttercream & dessert table.', 4.60],
            ['Surabaya Sweet Canon', 'cake', 'Surabaya', ['Surabaya'], 3500000, 20000000, null, null, ['classic', 'fondant'], null, 'Fondant classic dengan opsi cutting cake + sharing.', 4.55],
            ['Bali Cocoa & Bloom', 'cake', 'Bali', ['Bali'], 5000000, 30000000, null, null, ['tropical', 'luxury'], null, 'Cake tropis dengan fresh flowers untuk outdoor.', 4.80],
            ['Jogja Gula Aren Cakes', 'cake', 'Yogyakarta', ['Yogyakarta'], 2500000, 15000000, null, null, ['local', 'traditional'], null, 'Rasa lokal (gula aren, tape) dengan desain modern.', 4.50],

            // —— MC ——
            ['Host & Harmony Jakarta', 'mc', 'Jakarta', ['Jakarta', 'Tangerang', 'Bekasi'], 4000000, 15000000, null, null, ['bilingual', 'elegant'], ['indoor', 'outdoor'], 'MC bilingual ID-EN untuk akad & resepsi formal.', 4.75],
            ['Suara Hangat Bandung', 'mc', 'Bandung', ['Bandung'], 3000000, 10000000, null, null, ['warm', 'intimate'], ['indoor', 'outdoor'], 'MC intimate dengan flow santai namun rapi.', 4.60],
            ['Surabaya Stage Voice', 'mc', 'Surabaya', ['Surabaya'], 3500000, 12000000, null, null, ['energetic', 'family'], ['indoor'], 'MC energi tinggi untuk resepsi keluarga besar.', 4.50],
            ['Bali Ceremony Host', 'mc', 'Bali', ['Bali'], 5000000, 18000000, null, null, ['destination', 'bilingual'], ['outdoor'], 'Host destination wedding multi-national guests.', 4.80],
            ['Jogja Adat Narrator', 'mc', 'Yogyakarta', ['Yogyakarta'], 3000000, 11000000, null, null, ['traditional', 'javanese'], ['indoor', 'outdoor'], 'Narrator prosesi adat Jawa yang fasih.', 4.70],
            ['Medan Family Host', 'mc', 'Medan', ['Medan'], 3000000, 10000000, null, null, ['family', 'bilingual'], ['indoor'], 'MC akrab untuk budaya resepsi Medan.', 4.45],

            // —— Other ——
            ['Lensa Drone Nusantara', 'other', 'Jakarta', ['Jakarta', 'Bandung', 'Bali'], 3000000, 12000000, null, null, ['drone', 'aerial'], ['outdoor'], 'Add-on aerial drone untuk foto & video.', 4.65],
            ['Vow Lighting Rig', 'other', 'Jakarta', ['Jakarta', 'Surabaya'], 8000000, 40000000, null, null, ['lighting', 'stage'], ['indoor'], 'Rig lighting panggung & ambient wedding.', 4.70],
            ['Guest Comfort Concierge', 'other', 'Bali', ['Bali'], 5000000, 25000000, null, null, ['concierge', 'destination'], ['outdoor', 'indoor'], 'Guest logistics untuk destination wedding Bali.', 4.75],
            ['Siger Transport Wedding', 'other', 'Jakarta', ['Jakarta', 'Tangerang', 'Bogor'], 4000000, 20000000, null, null, ['transport', 'classic'], null, 'Mobil pengantin classic & shuttle tamu.', 4.50],
            ['Soundcheck Audio Hire', 'other', 'Bandung', ['Bandung', 'Jakarta'], 5000000, 25000000, null, null, ['audio', 'technical'], ['indoor', 'outdoor'], 'Sewa audio profesional + teknisi on-site.', 4.55],
        ];

        $images = [
            'venue' => 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop',
            'catering' => 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop',
            'decoration' => 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop',
            'photography' => 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1200&auto=format&fit=crop',
            'videography' => 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop',
            'entertainment' => 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1200&auto=format&fit=crop',
            'makeup' => 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1200&auto=format&fit=crop',
            'attire' => 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
            'invitation' => 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1200&auto=format&fit=crop',
            'cake' => 'https://images.unsplash.com/photo-1535254973040-607b474cb63f?q=80&w=1200&auto=format&fit=crop',
            'mc' => 'https://images.unsplash.com/photo-1475724017902-8ab2eafc6279?q=80&w=1200&auto=format&fit=crop',
            'other' => 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop',
        ];

        $result = [];

        foreach ($rows as [$name, $category, $city, $citiesServed, $priceMin, $priceMax, $capMin, $capMax, $styleTags, $venueTypes, $description, $rating]) {
            $result[] = [
                'category' => $category,
                'name' => $name,
                'slug' => Str::slug($name),
                'description' => $description,
                'city' => $city,
                'cities_served' => $citiesServed,
                'price_min' => $priceMin,
                'price_max' => $priceMax,
                'capacity_min' => $capMin,
                'capacity_max' => $capMax,
                'style_tags' => $styleTags,
                'venue_types' => $venueTypes,
                'cover_image_url' => $images[$category],
                'internal_notes' => 'Partner FG Wedding — seeded data.',
                'rating_internal' => $rating,
            ];
        }

        return $result;
    }
}
