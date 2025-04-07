<?php
namespace App\Http\Controllers;

use App\Http\Resources\MarkaAutoResource;
use App\Models\MarkaAuto;
use Inertia\Inertia;

class CatalogController extends Controller {
	public function index() {
		$markaAll = MarkaAuto::where('status', '=', '1')->get();

		return Inertia::render('Page/Catalog', [
			'category' => MarkaAutoResource::collection($markaAll)->resolve()
		]);
	}
}
