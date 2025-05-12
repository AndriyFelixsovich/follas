<?php
namespace App\Http\Controllers;

use Inertia\Inertia;

class SearchResultController extends Controller {
    public function index() {
       return Inertia::render('Page/SearchResult');
    }
}
