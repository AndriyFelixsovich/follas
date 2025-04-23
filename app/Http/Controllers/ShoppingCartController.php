<?php
namespace App\Http\Controllers;

use App\Http\Resources\ProductsAutoResource;
use App\Models\Product;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class ShoppingCartController extends Controller {
    public function index() {

			$products = [];
			$cartItems = session()->get('cart', []);

			if (!empty($cartItems) && is_array($cartItems)) {
				$productIds = array_column($cartItems, 'product_id');
				$products = Product::where('is_published', '=', 1)
					->whereIn('id', $productIds)
					->get();
			}

			return Inertia::render('Page/ShoppingCart', [
				 'products' => ProductsAutoResource::collection($products)
			 ]);
    }
}
