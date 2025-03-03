<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MarkaAuto extends Model
{

	use HasFactory;

	protected $table = 'marka_autos';

	public function models()
	{
		// Зв'язок - Категорія може мати багато моделей
		return $this->hasMany(ModelAuto::class, 'category_id');
	}

	public function products()
	{
		return $this->belongsToMany(Product::class, 'marka_auto_product', 'marka_auto_id', 'product_id')
			->withTimestamps();
	}
}
