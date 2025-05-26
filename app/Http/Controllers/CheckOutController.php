<?php
namespace App\Http\Controllers;

use App\Http\Resources\ProductsAutoResource;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CheckOutController extends Controller {
    public function index(Request $request) {
			$products = $request->session()->get('checkout_products', []);
			$totalPrice = $request->session()->get('checkout_total_price', 0);

			return Inertia::render('Page/CheckOut', [
				'product'    => $products,
				'totalPrice' => $totalPrice
			]);
    }
}
