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
        $products = $category->products();

				if (request("our_part_no")) {
					$products->where("name", "like","%". request("our_part_no") ."%");
				}

			if (request("description")) {
				$products->where("description", "like","%". request("description") ."%");
			}

			if (request("original_no")) {
				$products->where("origin_number", "like","%". request("original_no") ."%");
			}

				$products = $products->paginate(20);

        return Inertia::render('Page/Сategory',[
            'category' => (new MarkaAutoResource($category))->resolve(),
						'products' => ProductsAutoResource::collection($products),
						'queryParams' =>(object) request()->query()
        ]);

    }
}
