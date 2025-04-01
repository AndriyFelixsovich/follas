<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class WishlistController extends Controller
{
	public function index()
	{
		return Inertia::render('Page/Wishlist');
	}

	public function add(Request $request)
	{
		$product_id = $request->input('product_id');

		if (!$product_id) {
			return response()->json(['error' => 'Продукт не знайдено']);
		}

		if (auth()->check()) {
			dump(5555);
		} else {
			$wishlist = $request->session()->get('wishlist', []);

			if (!in_array($product_id, $wishlist)) {
				$wishlist[] = $product_id;
				$request->session()->put('wishlist', $wishlist);
			}
			return redirect()->back()->with('success', 'Продукт доданий до списку успішно');
		}
	}
}
