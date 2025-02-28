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
        Schema::create('modelautos', function (Blueprint $table) {
					$table->id();
					$table->unsignedBigInteger('category_id')->nullable()->index();
					$table->string('name');
					$table->string('image_path')->nullable();
					$table->boolean('status')->default(1);
					$table->integer('start_year')->nullable();
					$table->integer('end_year')->nullable();
					$table->timestamps();

					$table->foreign('category_id')
						->references('id')
						->on('categories')
						->cascadeOnDelete()
						->cascadeOnUpdate();
					;
				});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('modelautos');
    }
};
