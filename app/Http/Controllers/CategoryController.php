<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index($id) {

        // Отримуємо категорію по $id
        $category = Category::findOrFail($id);
        // Отримуємо всі продукти з категорії
        $products = $category->products;;


        return Inertia::render('Front/Page/category',[
            'category' => $category,
            'products' => $products
        ]);

    }
}
