<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\MarkaAuto;
use App\Models\ModelAuto;
use App\Models\ModelAutoYear;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use function Laravel\Prompts\alert;

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

			$years = ModelAutoYear::with('getYearByModels')
				->get()
				->map(function ($year) {
					// Додаємо поле 'model_id', яке містить унікальні ID пов'язаних моделей
						$year->model_id = $year->getYearByModels->pluck('id')->unique()->values()->toArray();
					return $year;
				});

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
			$request->validate([
				'name' => 'required|string|max:255',
				'origin_number' => 'required|string|max:255|unique:products,origin_number',
				'brand' => 'required|exists:marka_autos,id',
				'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
				'description' => 'nullable|string',
				'price' => 'required|numeric|min:0',
				'quantity' => 'required|integer|min:0',
			]);

			$imagePath = null;

			if ($request->hasFile('image')) {
				$file = $request->file('image');

				$markaAuto = MarkaAuto::find($request->input('brand'));

				// Використовуємо Str::slug для безпечного імені папки
				$brandFolderName = Str::slug($markaAuto->name);
				$destinationPath = 'images/products/' . $brandFolderName;

				// Отримуємо розширення оригінального файлу
				$extension = $file->getClientOriginalExtension();

				$fileName = Str::slug($request->input('origin_number')) . '.' . $extension;

				// Зберігаємо файл на публічному диску
				$imagePath = $file->storeAs($destinationPath, $fileName, 'public');
			}
echo "<pre>"; var_dump('Потрібно доробити зберігання в БД');echo "</pre>"; die();
			/*Product::create([
				'name' => $request->input('name'),
				'origin_number' => $request->input('origin_number'),
				'image_path' => $imagePath,
				'description' => $request->input('description'),
				'price' => $request->input('price'),
				'quantity' => $request->input('quantity'),
			]);*/
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
