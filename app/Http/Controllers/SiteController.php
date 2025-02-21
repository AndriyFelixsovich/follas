<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Collection;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SiteController extends Controller
{
    public function index()
    {
        //Отримуємо всі категорії
        $category = Category::all();

        return Inertia::render('Front/index',['category' => $category]);
    }
}

