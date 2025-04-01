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
		return $this->belongsToMany(MarkaAuto::class, 'product_relation_marka', 'product_id', 'marka_auto_id')
			->withTimestamps();
	}

	public function modelAutos()
	{
		return $this->belongsToMany(ModelAuto::class, 'model_autos');
	}

	public function modelAutoYears()
	{
		return $this->belongsToMany(ModelAutoYear::class, 'model_auto_years');
	}

}
