<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ShoppingCart extends Model
{
    protected $fillable = [
			'user_id',
			'session_id',
			'product_id',
			'quantity'
			];

		public function product(): BelongsTo
		{
			return $this->belongsTo(Product::class);
		}

		public function User(): BelongsTo
		{
			return $this->belongsTo(User::class);
		}
}
