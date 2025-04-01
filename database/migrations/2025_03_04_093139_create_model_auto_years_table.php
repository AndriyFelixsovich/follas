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
					Schema::create('model_auto_years', function (Blueprint $table) {
						$table->id();
						$table->unsignedBigInteger('model_auto_id');
						$table->string('year_range', 20);
						$table->timestamps();

						$table->foreign('model_auto_id')
							->references('id')
							->on('model_autos')
							->onDelete('cascade')
							->onUpdate('cascade');
					});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('model_auto_years');
    }
};
