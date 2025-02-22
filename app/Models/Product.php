<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'category_id',
        'name',
        'origin_number',
        'image_path',
        'description',
        'price',
        'quantity',
        'is_published'
    ];

  public function categories(){
      // Зв'язок - Продукт може мати одну категорію
      return $this->belongsTo(Category::class, 'category_id');
  }
}
