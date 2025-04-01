<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ModelAutoYear extends Model
{
	use HasFactory;

	protected $table = 'model_auto_years';
	protected $fillable = ['model_auto_id', 'year_range'];

	public function modelAuto()
	{
		return $this->belongsTo(ModelAuto::class, 'model_auto_id');
	}

	public function products()
	{
		return $this->belongsToMany(Product::class, 'product_model_auto_year');
	}
}
