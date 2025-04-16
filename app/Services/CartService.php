<?php

namespace App\Services;

use App\Models\ShoppingCart;
use Illuminate\Http\Request;

class CartService
{

	public function add(Request $request)
	{


		if (!session()->has('cart')) {
			session()->put('cart', []);
		}
		session()->push('cart', [
			'product_id' => $request->input('product_id'),
			'quantity' => $request->input('quantity')
		]);

	}

	public function getCartItems(Request $request)
	{
		if (auth()->check()) {
			return ShoppingCart::query()->where('user_id', auth()->id())->pluck('product_id','quantity')->toArray();
		} else {
			return $request->session()->get('cart', []);
		}
	}
//	public function getSessionId(Request $request)
//	{
//			if(!$request->session()->has('cart_id')) {
//				$request->session()->put('cart_id', Str::uuid()->toString());
//			}
//		return $request->session()->get('cart_id');
//	}
}
