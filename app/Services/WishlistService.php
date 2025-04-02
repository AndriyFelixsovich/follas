<?php

namespace App\Services;

use App\Models\Wishlist;
use Illuminate\Http\Request;

class WishlistService
{
	public function transferWishlistFromSession(Request $request)
	{
		if ($request->session()->has('wishlist')) {
			$sessionWishlist = $request->session()->get('wishlist', []);
			$userId = auth()->id();

			foreach ($sessionWishlist as $product_id) {
				$exists = Wishlist::where('user_id', $userId)->where('product_id', $product_id)->exists();

				if (!$exists) {
					Wishlist::create([
						'product_id' => $product_id,
						'user_id' => $userId,
					]);
				}
			}

			$request->session()->forget('wishlist');
		}
	}
}
