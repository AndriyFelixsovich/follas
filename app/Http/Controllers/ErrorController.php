<?php
    namespace App\Http\Controllers;

    use Inertia\Inertia;
    use Inertia\Response;

    class ErrorController extends Controller
    {
        public function notFound(): Response
        {
            return Inertia::render('Errors/NotFound');
        }
    }
