<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SiteController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\AboutUsController;
use App\Http\Controllers\ContactsController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\WishlistController;
use App\Http\Controllers\CatalogController;
use App\Http\Controllers\ShoppingCartController;
use App\Http\Controllers\ErrorController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [SiteController::class, 'index'])->name('site');
Route::get('/category/{id}', [ProductController::class, 'index'])->name('category.index')->middleware('wishlist');
Route::inertia('Page/About', 'Page/About')->name('about');
Route::get('/catalog', [CatalogController::class, 'index'])->name('catalog.index');

Route::get('/shopping-cart', [ShoppingCartController::class, 'index'])->name('shoppingCart.index');
Route::get('/contacts', [ContactsController::class, 'index'])->name('contacts.index');
Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');
Route::fallback([ErrorController::class, 'notFound']);


Route::group([
	'prefix' => 'wishlist',
	'as' => 'wishlist.'
], function () {
	Route::get('/', [WishlistController::class, 'index'])->name('index');
	Route::post('/toggleWishlistItem', [WishlistController::class, 'toggleWishlistItem'])->name('toggleWishlistItem');
});

/*Route::get('/', function () {
    return Inertia::render('Front/index', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});*/

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
