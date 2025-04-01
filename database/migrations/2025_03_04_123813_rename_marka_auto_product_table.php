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
			Schema::rename('marka_auto_product', 'product_relation_marka');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
			Schema::rename('product_relation_marka', 'marka_auto_product');
    }
};
