<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Wishlist;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WishlistController extends Controller
{
	public function index(Request $request)
	{
		$productsInWishlist = [];
		if (auth()->check()) {
			$userId = auth()->id();
			$wishlistItems = Wishlist::where('user_id', $userId)->pluck('product_id');
			$productsInWishlist = Product::whereIn('id', $wishlistItems)->get();
		} else {
				$productWishlistId = $request->session()->get('wishlist', []);
				$productsInWishlist = Product::whereIn('id', $productWishlistId)->get();
		}

		return Inertia::render('Page/Wishlist', ['productsInWishlist' => $productsInWishlist]);
	}


	public function toggleWishlistItem(Request $request)
	{
		$product_id = $request->input('product_id');

		if (!$product_id) {
			return redirect()->back()->with(['message' => 'Продукт не знайдено']);
		}

		if (auth()->check()) {
			$userId = auth()->id();
			$exists = Wishlist::where('user_id', $userId)->where('product_id', $product_id)->exists();
			if (!$exists) {
				Wishlist::query()->create([
					'product_id' => $product_id,
					'user_id' => $userId]);

				return redirect()->back()->with('message', 'Product added to wishlist');
			} else {
				Wishlist::query()
					->where('user_id', $userId)
					->where('product_id', $product_id)
					->delete();

				return redirect()->back()->with('message', 'Product removed from wishlist');
			}
		} else {
			$wishlist = $request->session()->get('wishlist', []);

			if (!in_array($product_id, $wishlist)) {
				$wishlist[] = $product_id;
				$request->session()->put('wishlist', $wishlist);

				return redirect()->back()->with('message', 'Product added to wishlist');
			} else {
				if (($key = array_search($product_id, $wishlist)) !== false) {
					unset($wishlist[$key]);
					$request->session()->put('wishlist', $wishlist);

					return redirect()->back()->with('message', 'Product removed from wishlist');
				}
				return redirect()->back()->with('message', 'Wishlist product not found');
			}
		}
	}
}
