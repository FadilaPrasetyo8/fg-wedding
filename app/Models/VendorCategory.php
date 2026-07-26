<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int $id
 * @property string $key
 * @property string $name
 * @property int $sort_order
 */
#[Fillable(['key', 'name', 'sort_order'])]
class VendorCategory extends Model
{
    public function vendors(): HasMany
    {
        return $this->hasMany(Vendor::class, 'category_id');
    }
}
