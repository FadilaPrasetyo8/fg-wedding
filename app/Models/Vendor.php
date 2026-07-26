<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int $id
 * @property int $category_id
 * @property string $name
 * @property string $slug
 * @property string|null $description
 * @property string $city
 * @property array|null $cities_served
 * @property int $price_min
 * @property int $price_max
 * @property int|null $capacity_min
 * @property int|null $capacity_max
 * @property array|null $style_tags
 * @property array|null $venue_types
 * @property string|null $cover_image_url
 * @property bool $is_partner
 * @property bool $is_active
 * @property string|null $internal_notes
 * @property string|null $rating_internal
 */
#[Fillable([
    'category_id',
    'name',
    'slug',
    'description',
    'city',
    'cities_served',
    'price_min',
    'price_max',
    'capacity_min',
    'capacity_max',
    'style_tags',
    'venue_types',
    'cover_image_url',
    'is_partner',
    'is_active',
    'internal_notes',
    'rating_internal',
])]
class Vendor extends Model
{
    use SoftDeletes;

    protected function casts(): array
    {
        return [
            'cities_served' => 'array',
            'style_tags' => 'array',
            'venue_types' => 'array',
            'is_partner' => 'boolean',
            'is_active' => 'boolean',
            'price_min' => 'integer',
            'price_max' => 'integer',
            'rating_internal' => 'decimal:2',
        ];
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(VendorCategory::class, 'category_id');
    }
}
