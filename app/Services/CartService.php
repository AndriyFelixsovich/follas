<?php

namespace App\Services;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

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

//	public function getSessionId(Request $request)
//	{
//			if(!$request->session()->has('cart_id')) {
//				$request->session()->put('cart_id', Str::uuid()->toString());
//			}
//		return $request->session()->get('cart_id');
//	}
}
