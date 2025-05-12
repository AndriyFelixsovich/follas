import {FC, useState} from 'react';
import {Link, router, usePage} from '@inertiajs/react';
import styles from './style.module.scss';
import SearchBarInput from "@/Components/SearchBarInput/SearchBarInput";

const CategorySearchBar: FC = ({queryParams = {}}) => {
	const { slug: categorySlug } = usePage().props.category;
	const [ourPartNo, setOurPartNo] = useState(queryParams.our_part_no || '');
	const [description, setDescription] = useState(queryParams.description || '');
	const [originalNo, setOriginalNo] = useState(queryParams.original_no || '');

	const searchFieldChanged = (name: string, value: string) => {
		const newParams = { ...queryParams };

		if (value) {
			newParams[name] = value;
		} else {
			delete newParams[name];
		}

		router.get(route('category.index', { slug: categorySlug }), newParams, { preserveState: true });
	};
	const onKeyPress = (name: string, value: string, e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key !== 'Enter') return;
		searchFieldChanged(name, value);
	};
	return (
		<div className={styles.search_bar}>
			<SearchBarInput
				label="Search by IMS Part No."
				placeholder="Search"
				value={ourPartNo}
				onChange={e => setOurPartNo(e.target.value)}
				onBlur={() => searchFieldChanged('our_part_no', ourPartNo)}
				onKeyPress={e => onKeyPress('our_part_no', ourPartNo, e)}
			/>
			<SearchBarInput
				label="Search by Description."
				placeholder="Search"
				value={description}
				onChange={e => setDescription(e.target.value)}
				onBlur={() => searchFieldChanged('description', description)}
				onKeyPress={e => onKeyPress('description', description, e)}
			/>
			<SearchBarInput
				label="Search by Orig."
				placeholder="Search"
				value={originalNo}
				onChange={e => setOriginalNo(e.target.value)}
				onBlur={() => searchFieldChanged('original_no', originalNo)}
				onKeyPress={e => onKeyPress('original_no', originalNo, e)}
			/>
		</div>
	);
};

export default CategorySearchBar;
