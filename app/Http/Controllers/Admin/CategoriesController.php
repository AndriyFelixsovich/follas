<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;

use Inertia\Inertia;

class CategoriesController extends Controller {
    public function index() {
       return Inertia::render('Page/Admin/Categories');
    }
}
