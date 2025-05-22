<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MarkaAuto extends Model
{

	use HasFactory;

	protected $table = 'marka_autos';

	protected $fillable = [
		'id',
		'name',
		'slug',
	];

	public function sluggable(): array
	{
		return [
			'slug' => [
				'source' => 'name'
			]
		];
	}

	public function models()
	{
		// Зв'язок - Категорія може мати багато моделей
		return $this->hasMany(ModelAuto::class, 'category_id');
	}

	public function products()
	{
		return $this->belongsToMany(Product::class, 'product_relation_marka', 'marka_auto_id', 'product_id')
			->withTimestamps();
	}
}
