<?php

namespace App\Services;

use App\Models\Product;
use App\Models\ShoppingCart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class CartService
{

	public function add(Request $request)
	{
		$productId = $request->input('product_id');
		$quantityToAdd = $request->input('quantity');

		$cart = Session::get('cart', []);

		if(empty($cart)){
			session()->push('cart', [
				'product_id' => $productId,
				'quantity' => $quantityToAdd
			]);
		}else {
			foreach($cart as &$car) {
				$car['quantity'] = $quantityToAdd;
			}
			Session::put('cart', $cart);
		}
	}

	public function remove(Request $request): bool
	{
		$productId = $request->input('product_id');

		if (!in_array($productId, array_column($this->getCartItems(), 'product_id'))) {
			return false;
		}

		$items = array_filter($this->getCartItems(), fn($element) => $element['product_id'] != $productId);

		$this->set($items);

		return true;
	}

	public function getCartItems()
	{
		if (auth()->check()) {
			return ShoppingCart::query()->where('user_id', auth()->id())->pluck('product_id','quantity')->toArray();
		} else {
			return Session::get('cart', []);
		}
	}

	private function set(array $items): void
	{
		session(['cart'=>$items]);
	}
}
