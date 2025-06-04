<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\MarkaAuto;
use App\Models\ModelAuto;
use App\Models\ModelAutoYear;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
			$products = Product::paginate(20);

			return Inertia::render('Page/Admin/Products', [
				'products' =>$products,
				'selectedTab2' => '2'
			]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
	    $markas =  MarkaAuto::all();
	    $models = ModelAuto::all();
	    $years =  ModelAutoYear::all();

	    return Inertia::render('Page/Admin/Products', [
		    'markas' => $markas,
		    'models' => $models,
		    'years' => $years,
		    'selectedTab2' => '2'
	    ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
