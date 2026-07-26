<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int $id
 * @property string $slug
 * @property string $name
 * @property string|null $tagline
 * @property string|null $description
 * @property string $price_label
 * @property int|null $price_from
 * @property int|null $guest_min
 * @property int|null $guest_max
 * @property string|null $guest_label
 * @property bool $is_featured
 * @property string|null $cover_image_url
 * @property int $sort_order
 * @property int $tier
 * @property bool $is_active
 */
#[Fillable([
    'slug',
    'name',
    'tagline',
    'description',
    'price_label',
    'price_from',
    'guest_min',
    'guest_max',
    'guest_label',
    'is_featured',
    'cover_image_url',
    'sort_order',
    'tier',
    'is_active',
])]
class Package extends Model
{
    use SoftDeletes;

    protected function casts(): array
    {
        return [
            'price_from' => 'integer',
            'guest_min' => 'integer',
            'guest_max' => 'integer',
            'is_featured' => 'boolean',
            'is_active' => 'boolean',
            'sort_order' => 'integer',
            'tier' => 'integer',
        ];
    }

    public function inclusions(): HasMany
    {
        return $this->hasMany(PackageInclusion::class)->orderBy('sort_order');
    }

    public function vendors(): BelongsToMany
    {
        return $this->belongsToMany(Vendor::class, 'package_vendor')
            ->withPivot(['sort_order', 'role_note'])
            ->withTimestamps()
            ->orderByPivot('sort_order');
    }
}
