<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;

use Inertia\Inertia;

class PagesController extends Controller {
    public function index() {
       return Inertia::render('Page/Admin/Pages');
    }
}
