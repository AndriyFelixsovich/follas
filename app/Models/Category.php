<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public function products()
    {
        // Зв'язок - Категорія може мати багато продуктів
        return $this->hasMany(Product::class, 'category_id');
    }
}
