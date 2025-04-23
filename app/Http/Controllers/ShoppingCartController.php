<?php
namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class ShoppingCartController extends Controller {
    public function index() {

			$products = $productIds = [];

			if (session()->has('cart') && is_object(session('cart')) && !empty((array) session('cart'))) {
				$productIds = session()->get('cart.product_id', []);
				$products = Product::where('status', '=', 1)
					->whereIn('id', $productIds)
					->get();
			}


			return Inertia::render('Page/ShoppingCart', [
				 'product' => $products,
			 ]);
    }
}
