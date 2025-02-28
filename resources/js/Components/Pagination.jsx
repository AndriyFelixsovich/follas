import React from 'react';
import { router } from "@inertiajs/react";

const Pagination = ({ links, setCurrentPage }) => {
	const handlePageChange = (url) => {
		if (!url) return;
		const pageParam = new URL(url, window.location.origin).searchParams.get('page');
		setCurrentPage(pageParam);
		router.get(url, {}, { preserveState: true });
	};

	return (
		<nav aria-label="Pagination">
			<ul className="pagination">
				{links.map((link, index) => (
					<li key={index} className={link.active ? 'page-item active' : 'page-item'}>
						<a
							className="page-link"
							href={link.url || '#'}
							onClick={(e) => {
								e.preventDefault();
								handlePageChange(link.url);
							}}
							dangerouslySetInnerHTML={{ __html: link.label }}
						/>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
