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
//        $products = Category::with('products')->findOrFail($id);
//        $products = $category->products;

//        $products = Product::with('categories')->take(100)->get();

        return Inertia::render('Front/Page/category',[
            'category' => $category,
//            'products' => $products
        ]);

    }
}
