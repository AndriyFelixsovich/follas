<?php

namespace App\Services;

use App\Models\Product;
use App\Models\ShoppingCart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class CartService
{

	public function add(Request $request)
	{
		$productId = $request->input('product_id');
		$quantityToAdd = $request->input('quantity');

		if (auth()->check()) {

			$userId = auth()->id();
			$sessionId = session()->getId();
			$exists = ShoppingCart::query()->where('user_id', $userId)->where( 'product_id', $productId)->exists();
			if (!$exists) {
				ShoppingCart::query()->create([
					'product_id' => $productId,
					'user_id' => $userId,
					'quantity' => $quantityToAdd,
					'session_id' => $sessionId
				]);
				return redirect()->back()->with('message',(object) ['cart' => 'Product added to wishlist']);
			} else {
				ShoppingCart::query()->where('user_id', $userId)->where( 'product_id', $productId)->update([
					'quantity' => $quantityToAdd,
					'session_id' => $sessionId
				]);
			}
		}else {

			$cart = Session::get('cart', []);
			$productExists = false;

			foreach ($cart as $key => &$item) {
				if ($item['product_id'] == $productId) {
					$cart[$key]['quantity'] = $quantityToAdd;
					$productExists = true;
					break;
				}
			}

			if (!$productExists) {
				$cart[] = [
					'product_id' => $productId,
					'quantity' => $quantityToAdd,
				];
			}

			Session::put('cart', $cart);
		}
	}

	public function remove(Request $request): bool
	{
		$productId = $request->input('product_id');

		if (auth()->check()) {
			$userId = auth()->id();

			ShoppingCart::query()
				->where('user_id', $userId)
				->where('product_id', $productId)
				->delete();

			return true;
		}else {

			if (!in_array($productId, array_column($this->getCartItems(), 'product_id'))) {
				return false;
			}

			$items = array_filter($this->getCartItems(), fn($element) => $element['product_id'] != $productId);

			$this->set($items);

			return true;
		}
	}

	public function getCartItems()
	{
		if (auth()->check()) {
			return ShoppingCart::query()->where('user_id', auth()->id())->select('product_id', 'quantity')->get();
		} else {
			return Session::get('cart', []);
		}
	}

	private function set(array $items): void
	{
		session(['cart' => $items]);
	}

	public function transferSessionCartToUserCart(Request $request)
	{
		if ($request->session()->has('cart')) {

			$sessionCart = $request->session()->get('cart', []);
			$userId = auth()->id();
			$sessionId = session()->getId();

			foreach ($sessionCart as $cart) {
				$exists = ShoppingCart::where('user_id', $userId)->where('product_id', $cart['product_id'])->exists();

				if (!$exists) {
					ShoppingCart::create([
						'product_id' => $cart['product_id'],
						'user_id' => $userId,
						'quantity' => $cart['quantity'],
						'session_id' => $sessionId
					]);
				}else{
					ShoppingCart::query()->where('user_id', $userId)->where('product_id', $cart['product_id'])->update([
						'quantity' => $cart['quantity'],
						'session_id' => $sessionId
					]);
				}
			}

			$request->session()->forget('cart');
		}
	}
}
