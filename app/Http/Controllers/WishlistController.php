<?php
namespace App\Http\Controllers;

use Inertia\Inertia;

class WishlistController extends Controller {
    public function index() {
       return Inertia::render('Page/Wishlist');
    }
}
