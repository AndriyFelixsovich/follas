<?php
namespace App\Http\Controllers;

use Inertia\Inertia;

class CheckOutController extends Controller {
    public function index() {
       return Inertia::render('Page/CheckOut');
    }
}
