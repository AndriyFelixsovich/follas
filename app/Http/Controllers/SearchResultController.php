<?php
namespace App\Http\Controllers;

use App\Http\Requests\SearchParamsRequest;
use App\Services\SearchService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SearchResultController extends Controller {

	/**
	 * @var SearchService
	 */
	private SearchService $searchService;

	public function __construct(SearchService $searchService)
	{
		$this->searchService = $searchService;
	}
    public function index(SearchParamsRequest $request) {

			$searchResult = $this->searchService->index();

       return Inertia::render('Page/SearchResult',[
				 'searchResult' => $searchResult,
				 ]);
    }
}
