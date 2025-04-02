<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class WishlistInertiaMiddleware
{
	/**
	 * Handle an incoming request.
	 *
	 * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
	 */
	public function handle(Request $request, Closure $next): Response
	{
		$wishlist = [];

		if (auth()->check()) {
			$wishlist = DB::table('wishlists')
				->where('user_id', auth()->id())
				->pluck('product_id')
				->toArray();
		}

		else {
			$wishlist = $request->session()->get('wishlist', []);
		}

		Inertia::share([
			'flash' => [
				'success' => $request->session()->get('success'),
				'error' => $request->session()->get('error'),
			],
			'wishlist' => $wishlist,
		]);

		return $next($request);
	}
}
