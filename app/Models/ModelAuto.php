<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ModelAuto extends Model
{
	public function markas(){
		// Зв'язок - Модель може мати одну категорію
		return $this->belongsTo(MarkaAuto::class, 'category_id');
	}
}
