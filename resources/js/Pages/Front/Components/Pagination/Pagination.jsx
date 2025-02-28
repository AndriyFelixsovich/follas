import { router } from "@inertiajs/react";
import styles from './style.module.scss';

const Pagination = ({ links, setCurrentPage }) => {

	const handlePageChange = url => {
		if (!url) return;
		const pageParam = new URL(url, window.location.origin).searchParams.get('page');
		setCurrentPage(pageParam);
		router.get(url, {}, { preserveState: true });
	};

	return (
		<nav className={styles.pagination}>
			<ul>
				{links.map((link, index) => (
					<li key={link + index} className={link.active ? styles.selectedPage : ''}>
						<a href={link.url || '#'} onClick={() => {handlePageChange(link.url);}} dangerouslySetInnerHTML={{ __html: link.label }} />
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
