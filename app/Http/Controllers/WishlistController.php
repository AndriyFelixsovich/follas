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

	public function toggleWishlistItem(Request $request)
	{
		$product_id = $request->input('product_id');

		if (!$product_id) {
			return redirect()->back()->with(['error' => 'Продукт не знайдено']);
		}

		if (auth()->check()) {
			dump(5555);
		} else {
			$wishlist = $request->session()->get('wishlist', []);

			if (!in_array($product_id, $wishlist)) {
				$wishlist[] = $product_id;
				$request->session()->put('wishlist', $wishlist);
				return redirect()->back()->with('success', 'Продукт доданий до списку успішно');
			}else{
				if (($key = array_search($product_id, $wishlist)) !== false) {
					unset($wishlist[$key]);
					$request->session()->put('wishlist', $wishlist);
					return redirect()->back()->with('success', 'Продукт видалено успішно');
				}
				return redirect()->back()->with('error', 'Продукт не знайдено в списку бажань');
			}
      return Inertia::render('successSession',['success' => 'Продукт доданий до списку успішно']);
		}
	}
}
