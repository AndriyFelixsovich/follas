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
        Schema::create('product_relation_model', function (Blueprint $table) {
					$table->id();
					$table->unsignedBigInteger('model_auto_id');
					$table->unsignedBigInteger('product_id');
					$table->timestamps();

					$table->foreign('product_id')
						->references('id')
						->on('products')
						->onDelete('cascade');

					$table->foreign('model_auto_id')
						->references('id')
						->on('model_autos')
						->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_relation_model');
    }
};
