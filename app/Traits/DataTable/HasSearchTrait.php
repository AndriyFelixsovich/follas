<?php

namespace App\Traits\DataTable;

trait HasSearchTrait
{
	protected array $searchable = [];

	protected function search()
	{
//		dd($this);
		$query = $this->query;
		$search = request()->query->all();

		if ($search && !empty($this->searchable)) {
			foreach ($search as $key => $value) {
				if (empty($value)) {
					continue;
				}

				$query->where(function ($query) use ($value) {
					$lower = 'LOWER';
					$like = 'LIKE';
					$searchTerm = '%' . strtolower($value) . '%';

					foreach ($this->searchable as $column) {
						if (str()->contains($column, '.')) {
							$parts = explode('.', $column);
							$relationPath = implode('.', array_slice($parts, 0, -1));
							$columnName = end($parts);

							$query->orWhereHas($relationPath, function ($nestedQuery) use ($searchTerm, $lower, $like, $columnName) {
								$nestedQuery->whereRaw("$lower($columnName) $like ?", [$searchTerm]);
							});
						} else {
							$query->orWhereRaw("$lower($column) $like ?", [$searchTerm]);
						}
					}
				});
			}
		}

		return $query;
	}
}
