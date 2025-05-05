<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
	public function handle(Request $request, Closure $next): Response
	{
		if (!auth()->check()) {
			session(['url.intended' => $request->fullUrl()]);
			return redirect()->route('login', ['redirect' => 'admin']);
		}

		if (!auth()->user()->isAdmin()) {
			return back()->with('error', 'You do not have administrator rights.');
		}

		return $next($request);
	}
}
