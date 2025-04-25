<?php
namespace App\Http\Controllers;

use App\Http\Resources\ProductsAutoResource;
use App\Models\Product;
use App\Models\ShoppingCart;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class ShoppingCartController extends Controller {
    public function index() {

			$products = collect();

			if (auth()->check()) {

				$cartItems = ShoppingCart::query()->where('user_id', auth()->id())->with('product')->get();
				$products = $cartItems->map(function ($item) {
					$item->product->quantity = $item->quantity;
					return $item->product;
				});

			} else {
				$cartItems = session()->get('cart', []);

				if (!empty($cartItems) && is_array($cartItems)) {
					$productIds = array_column($cartItems, 'product_id');
					$products = Product::where('is_published', '=', 1)
						->whereIn('id', $productIds)
						->get()
						->each(function ($product) use ($cartItems) {
							$cartItem = collect($cartItems)->firstWhere('product_id', $product->id);
							$product->quantity = $cartItem ? $cartItem['quantity'] : 0;
						});
				}
			}

			return Inertia::render('Page/ShoppingCart', [
				'products' => ProductsAutoResource::collection($products)
			]);
    }
}
