<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Services\CartService;
use App\Services\WishlistService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
		protected $wishlistService;
		protected $cartService;

		public function __construct(WishlistService $wishlistService, CartService $cartService)
		{
			$this->wishlistService = $wishlistService;
			$this->cartService = $cartService;
		}
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

				$this->wishlistService->transferWishlistFromSession($request);
				$this->cartService->transferSessionCartToUserCart($request);

			if (session()->has('url.intended')) {
				$intendedUrl = session('url.intended');
				session()->forget('url.intended');

				if (str_contains($intendedUrl, '/admin') && auth()->user()->isAdmin()) {
					return redirect()->to($intendedUrl);
				}
			}

			if (auth()->user()->isAdmin() && request()->query('redirect') === 'admin') {
				return redirect()->route('admin.dashboard');
			}

        return redirect()->intended(route('dashboard', absolute: false));
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
