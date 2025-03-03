<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{

	use HasFactory;

	protected $table = 'products';
    protected $fillable = [
        'name',
        'origin_number',
        'image_path',
        'description',
        'price',
        'quantity',
        'is_published'
    ];

	public function markaAutos()
	{
		return $this->belongsToMany(MarkaAuto::class, 'marka_auto_product', 'product_id', 'marka_auto_id')
			->withTimestamps();
	}

//  public function categories(){
//      // Зв'язок - Продукт може мати одну категорію
//      return $this->belongsTo(Category::class, 'category_id');
//  }

//	public function models(): BelongsToMany
//	{
//		// Зв'язок - Продукт може мати декілька моделей авто'
//		return $this->belongsToMany(Modelauto2::class, 'product_models', 'product_id', 'modelauto_id');
//	}

}
