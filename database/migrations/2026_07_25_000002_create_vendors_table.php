<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('vendors', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->constrained('vendor_categories')->cascadeOnDelete();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->string('city');
            $table->json('cities_served')->nullable();
            $table->unsignedBigInteger('price_min')->default(0);
            $table->unsignedBigInteger('price_max')->default(0);
            $table->unsignedInteger('capacity_min')->nullable();
            $table->unsignedInteger('capacity_max')->nullable();
            $table->json('style_tags')->nullable();
            $table->json('venue_types')->nullable();
            $table->string('cover_image_url')->nullable();
            $table->boolean('is_partner')->default(true);
            $table->boolean('is_active')->default(true);
            $table->text('internal_notes')->nullable();
            $table->decimal('rating_internal', 3, 2)->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->index(['city', 'category_id', 'is_active']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('vendors');
    }
};
