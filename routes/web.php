<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SiteController;
use App\Http\Controllers\CheckOutController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\AboutUsController;
use App\Http\Controllers\SearchResultController;
use App\Http\Controllers\ContactsController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\SuccessOrderController;
use App\Http\Controllers\WishlistController;
use App\Http\Controllers\CatalogController;
use App\Http\Controllers\ShoppingCartController;
use App\Http\Controllers\ErrorController;
use Illuminate\Foundation\Application;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\DashboardController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [SiteController::class, 'index'])->name('site');

Route::group([
	'controller' => ProductController::class,
], function(){
	Route::get('/category/{slug}', 'index')->name('category.index');
	Route::post('/addToCart', 'addToCart')->name('addToCart');
	Route::post('/removeFromCart', 'removeFromCart')->name('removeFromCart');
});


Route::inertia('Page/About', 'Page/About')->name('about');
Route::get('/search-result', [SearchResultController::class, 'index'])->name('index');

Route::group([
	'middleware' => ['auth', 'admin'],
	'prefix' => 'admin',
	'as'     => 'admin.'
], function (){
	Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
})->middleware(['auth', 'admin']);

Route::get('/catalog', [CatalogController::class, 'index'])->name('catalog.index');
Route::get('/checkout', [CheckOutController::class, 'index'])->name('checkout.index');
Route::get('/success-order', [SuccessOrderController::class, 'index'])->name('success.index');

Route::get('/contacts', [ContactsController::class, 'index'])->name('contacts.index');
Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');
Route::fallback([ErrorController::class, 'notFound']);

Route::group([
	'controller' => ShoppingCartController::class,
		'as'    	 => 'cart.'
],function () {
	Route::get('/shopping-cart','index')->name('index');
	Route::post('/cartCheck', 'addToCartCheck')->name('cartCheck');
});


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
