<?php

namespace App\Http\Controllers;

use App\Http\Resources\MarkaAutoResource;
use App\Http\Resources\ProductsAutoResource;
use App\Models\MarkaAuto;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index($id) {
        $category = MarkaAuto::findOrFail($id);
        $products = $category->products()->paginate(20);

        return Inertia::render('Page/Сategory',[
            'category' => (new MarkaAutoResource($category))->resolve(),
						'products' => ProductsAutoResource::collection($products)
        ]);

    }
}
