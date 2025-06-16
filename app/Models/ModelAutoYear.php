<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ModelAutoYear extends Model
{
	use HasFactory;

	protected $table = 'model_auto_years';
	protected $fillable = ['model_auto_id', 'year_range'];
	protected $hidden = ['getYearByModels'];

	public function modelAuto()
	{
		return $this->belongsTo(ModelAuto::class, 'model_auto_id');
	}

	public function products()
	{
		return $this->belongsToMany(Product::class, 'product_model_auto_year');
	}

	/**
	 * Отримати моделі автомобілів, пов'язані з роком.
	 */
	public function getYearByModels()
	{
		return $this->belongsToMany(
			ModelAuto::class,
			'product_relation_model_auto_year',
			'model_auto_year_id',
			'model_auto_id'
		);
	}
}
