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
        Schema::table('product_relation_model_auto_year', function (Blueprint $table) {
					$table->unsignedBigInteger('model_auto_id');
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
        Schema::table('product_relation_model_auto_year', function (Blueprint $table) {
					$table->dropForeign(['model_auto_id']);
					$table->dropColumn('model_auto_id');
        });
    }
};
