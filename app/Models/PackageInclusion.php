<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $package_id
 * @property string $label
 * @property int $sort_order
 */
#[Fillable(['package_id', 'label', 'sort_order'])]
class PackageInclusion extends Model
{
    public function package(): BelongsTo
    {
        return $this->belongsTo(Package::class);
    }
}
