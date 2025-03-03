<?php

namespace App\Http\Controllers;

//use App\Models\Category;
//use App\Models\Collection;
use App\Http\Resources\MarkaAutoResource;
use App\Models\MarkaAuto;
//use Illuminate\Http\Request;
use Inertia\Inertia;

class SiteController extends Controller
{
	public function index()
	{
		//Отримуємо всі категорії
		$markaAll = MarkaAuto::where('status', '=', '1')->get();

		return Inertia::render('index', [
			//MarkaAutoResource - перетворюємо колекцію в масив і вказуємо які поля додати в масив
			'category' => MarkaAutoResource::collection($markaAll)->resolve()
		]);
    }
}

