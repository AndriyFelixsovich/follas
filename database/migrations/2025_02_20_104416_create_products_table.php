<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->constrained('categories')->cascadeOnDelete()->cascadeOnUpdate();
            $table->string( column: 'name', length: 60);
            $table->string( column: 'origin_number', length: 120);
            $table->string( column: 'image_path');
            $table->text(column: 'description');
            $table->integer (column: 'price')->default(value: 0);
            $table->integer (column: 'quantity')->default(value: 0);
            $table->boolean ( column: 'is_published')->default(value: true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
