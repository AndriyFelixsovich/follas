<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ModelAuto extends Model
{

	protected $table = 'model_autos';

	protected $fillable = ['categor_id','name'];

	public function markas(){
		// Зв'язок - Модель може мати одну категорію
		return $this->belongsTo(MarkaAuto::class, 'category_id');
	}

	public function products()
	{
		return $this->belongsToMany(Product::class, 'product_model_auto');
	}

	public function modelAutoYears()
	{
		return $this->hasMany(ModelAutoYear::class);
	}
}
