<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index($id) {
        $category = Category::findOrFail($id);
        $products = $category->products()->paginate(20);

        return Inertia::render('Page/Сategory',[
            'category' => $category,
            'products' => $products
        ]);

    }
}
