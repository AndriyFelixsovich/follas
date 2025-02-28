import { FC } from 'react';
import { router } from '@inertiajs/react';
import styles from './style.module.scss';

interface Link {
	url: string | null;
	label: string;
	active: boolean;
}

interface PaginationProps {
	links: Link[];
	setCurrentPage: (page: string | null) => void;
}

const Pagination: FC<PaginationProps> = ({ links, setCurrentPage }) => {

	const handlePageChange = (url: string | null) => {
		if (!url) return;
		const pageParam = new URL(url, window.location.origin).searchParams.get('page');
		setCurrentPage(pageParam);
		router.get(url, {}, { preserveState: true });
	};

	return (
		<nav className={styles.pagination}>
			<ul>
				{links.map((link, index) => (
					<li key={index} className={link.active ? styles.selectedPage : ''}>
						<a href={link.url || '#'} onClick={() => handlePageChange(link.url)} dangerouslySetInnerHTML={{ __html: link.label }}/>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
