<?php

namespace App\Http\Controllers;

use App\Http\Resources\MarkaAutoResource;
use App\Http\Resources\ProductsAutoResource;
use App\Models\MarkaAuto;
use App\Models\Product;
use App\Services\CartService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;


class ProductController extends Controller
{

	protected CartService $cartService;

	public function __construct()
	{
		$this->cartService = new CartService;
	}

	public function index($slug)
	{
		$category = MarkaAuto::where('slug', $slug)->firstOrFail();
		$products = $category->products();

		if (request("our_part_no")) {
			$products->where("name", "like", "%" . request("our_part_no") . "%");
		}

		if (request("description")) {
			$products->where("description", "like", "%" . request("description") . "%");
		}

		if (request("original_no")) {
			$products->where("origin_number", "like", "%" . request("original_no") . "%");
		}

		$products = $products->paginate(20);

		return Inertia::render('Page/Сategory', [
			'category' => (new MarkaAutoResource($category))->resolve(),
			'products' => ProductsAutoResource::collection($products),
			'queryParams' => (object)request()->query()
		]);
	}

	public function addToCart(Request $request) {

		$validator = Validator::make($request->all(), [
			'product_id' => 'required|exists:products,id',
			'quantity' => 'required|integer|min:1'
		]);

		if ($validator->fails()) {
			return redirect()->back()
				->with('message', (object)[
					'cart' => 'Please add quantity',
					'product_id' => $request->product_id
					]);
		}

		$this->cartService->add($request);

		return redirect()->back()->with('message', (object)[
			'cart' => 'Product added to cart',
			'product_id' => $request->product_id
		]);
	}

	public function removeFromCart(Request $request)
	{

		if ($this->cartService->remove($request)) {
			return back();
		}

		return back()->with('error', 'Failed to remove product from cart');
	}
}
