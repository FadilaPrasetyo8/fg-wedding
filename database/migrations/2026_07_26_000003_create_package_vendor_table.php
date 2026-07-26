<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('package_vendor', function (Blueprint $table) {
            $table->id();
            $table->foreignId('package_id')->constrained('packages')->cascadeOnDelete();
            $table->foreignId('vendor_id')->constrained('vendors')->cascadeOnDelete();
            $table->unsignedInteger('sort_order')->default(0);
            $table->string('role_note')->nullable();
            $table->timestamps();

            $table->unique(['package_id', 'vendor_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('package_vendor');
    }
};
