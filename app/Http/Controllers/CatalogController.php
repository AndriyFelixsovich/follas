<?php
namespace App\Http\Controllers;

use App\Http\Resources\MarkaAutoResource;
use App\Models\MarkaAuto;
use Illuminate\Support\Facades\Cache;
use Inertia\Response as InertiaResponse;
use Inertia\Inertia;

class CatalogController extends Controller {
	public function index(): InertiaResponse
	{
		$markaAll = Cache::remember('marka_all_active', 60 * 60, function () {
			return MarkaAuto::where('status', '=', '1')->get();
		});

		return Inertia::render('Page/Catalog', [
			'category' => MarkaAutoResource::collection($markaAll)->resolve()
		]);
	}
}
