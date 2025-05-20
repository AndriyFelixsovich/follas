<?php

namespace App\Services;

use App\Facades\DataTable;
use App\Http\Resources\ProductsAutoResource;
use App\Models\MarkaAuto;
use App\Models\Product;
use App\Models\ShoppingCart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class SearchService
{

	public function index()
	{

		$result = DataTable::query(Product::query())
			->searchable(['modelAutos.name','markaAutos.name','name','origin_number','description'])
			->make();
		return Inertia::render('Page/SearchResult', [
			'products' => ProductsAutoResource::collection($result),
		]);

	}

}
