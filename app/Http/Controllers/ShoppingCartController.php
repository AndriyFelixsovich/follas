<?php
namespace App\Http\Controllers;

use App\Facades\DataTable;
use App\Http\Resources\ProductsAutoResource;
use App\Models\Product;
use App\Models\ShoppingCart;
use App\Services\CartService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShoppingCartController extends Controller {

	protected $cartService;

	public function __construct(CartService $cartService)
	{
		$this->cartService = $cartService;
	}
    public function index() {

			$products = collect();

			if (auth()->check()) {
				$cartItems = ShoppingCart::query()
					->where('user_id', auth()->id())
					->with('product')
					->get();

				$products = $cartItems->map(function ($item) {
					$item->product->quantity = $item->quantity;
					return $item->product;
				});
			} else {
				$cartItems = session()->get('cart', []);

				if (!empty($cartItems) && is_array($cartItems)) {
					$productIds = array_column($cartItems, 'product_id');

					$products = Product::where('is_published', 1)
						->whereIn('id', $productIds)
						->get()
						->each(function ($product) use ($cartItems) {
							$cartItem = collect($cartItems)->firstWhere('product_id', $product->id);
							if ($cartItem) {
								$product->quantity = $cartItem['quantity'];
							} else {
								$product->quantity = 0;
							}
						});
				}
			}

			$totalPrice = $products->sum(function ($product) {
				return ($product->price ?? 0) * ($product->quantity ?? 0);
			});

			return Inertia::render('Page/ShoppingCart', [
				'products' => ProductsAutoResource::collection($products),
				'totalPrice' => $totalPrice
			]);
    }

	public function addToCartCheck(Request $request)
		{
			$productIds = $request->input('products');
			$products = Product::query()
								->whereIn('id',$productIds)
								->get();

			return Inertia::render('Page/CheckOut', [
				'products' => ProductsAutoResource::collection($products),
			]);
		}


}
