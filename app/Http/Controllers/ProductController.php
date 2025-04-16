<?php

namespace App\Http\Controllers;

use App\Http\Resources\MarkaAutoResource;
use App\Http\Resources\ProductsAutoResource;
use App\Models\MarkaAuto;
use App\Models\Product;
use App\Services\CartService;
use Inertia\Inertia;
use Illuminate\Http\Request;


class ProductController extends Controller
{

	protected CartService $cartService;

	public function __construct()
	{
		$this->cartService = new CartService;
	}
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

	public function addToCart (Request $request)
	{

		try {
			$validated = $request->validate([
				'product_id' => 'required|exists:products,id',
				'quantity'   => 'required|integer|min:1'
			]);

			$this->cartService->add($request);

			return redirect()->back()->with('message', ['cart' => 'Prodcut add to cart']);

		} catch (\Illuminate\Validation\ValidationException $e) {

			return redirect()->back()->withErrors($e->validator)->with('message', ['cart' => 'Prodcut add to cart error']);
		}

	}
}
