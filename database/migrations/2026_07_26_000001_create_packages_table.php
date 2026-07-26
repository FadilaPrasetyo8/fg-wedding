<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('packages', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('name');
            $table->string('tagline')->nullable();
            $table->text('description')->nullable();
            $table->string('price_label');
            $table->unsignedBigInteger('price_from')->nullable();
            $table->unsignedInteger('guest_min')->nullable();
            $table->unsignedInteger('guest_max')->nullable();
            $table->string('guest_label')->nullable();
            $table->boolean('is_featured')->default(false);
            $table->string('cover_image_url')->nullable();
            $table->unsignedInteger('sort_order')->default(0);
            $table->unsignedTinyInteger('tier')->default(1); // 1 essential, 2 classic, 3 premium
            $table->boolean('is_active')->default(true);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('packages');
    }
};
