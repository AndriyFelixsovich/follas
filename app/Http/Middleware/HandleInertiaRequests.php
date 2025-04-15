<?php

namespace App\Http\Middleware;

use App\Models\Wishlist;
use App\Services\WishlistService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';
		protected $wishlistService;

	public function __construct(WishlistService $wishlistService)
	{
		$this->wishlistService = $wishlistService;
	}

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
			$wishlistItemsObj = $this->wishlistService->getWishlistItems($request);

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
						'wishlistItemsObj' => $wishlistItemsObj,
						'flash' => [
							'message' => fn () => $request->session()->get('message')
						],
        ];
    }
}
