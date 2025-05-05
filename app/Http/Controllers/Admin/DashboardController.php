<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;

use Inertia\Inertia;

class DashboardController extends Controller {
    public function index() {
			echo "<pre>"; var_dump(5555);echo "</pre>"; die();
       return Inertia::render('Page/Admin/Dashboard');
    }
}
