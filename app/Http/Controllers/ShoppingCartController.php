<?php
namespace App\Http\Controllers;

use Inertia\Inertia;

class ShoppingCartController extends Controller {
    public function index() {
       return Inertia::render('Page/ShoppingCart');
    }
}
