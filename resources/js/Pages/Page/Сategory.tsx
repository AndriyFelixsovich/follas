import { Head, router, useForm, usePage } from '@inertiajs/react';
import { FC, useState } from 'react';
import styles from './category.module.scss';
import CategoryProductItem from '@/Components/CategoryProductItem/CategoryProductItem';
import Container from '@/Components/_ui/Container/Container';
import MainLayout from "@/Layouts/MainLayout";
import Pagination from '@/Components/Pagination/Pagination';
import CategoryTopBar from '@/Components/CategoryTopBar/CategoryTopBar';
import Breadcrumbs from '@/Components/Breadcrumbs/Breadcrumbs';
import SearchBarInput from '@/Components/SearchBarInput/SearchBarInput';
import { CategoryProps } from '@/Pages/Page/category.interface';

const Category: FC<CategoryProps> = ({ category, products, queryParams = {} }) => {
	const { setData } = useForm<{ page: number }>({ page: products.meta.current_page });
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
		<MainLayout>
			<Head title="Main" />
			<div className={styles.category_page}>

				<Breadcrumbs title={category.name} />

				<Container>
					<h1 className={styles.title}>{category.name}</h1>

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

					{products.data.length > 0 ? (
						<>
							<CategoryTopBar />
							<div className={styles.category_page_wrap}>
								{products.data.map((product_cat) => (
									<CategoryProductItem
										product={product_cat}
										isWishlistPage={false}
										key={product_cat.id}
										index={0}
									/>
								))}
							</div>
							<Pagination
								links={products.meta.links}
								setCurrentPage={(page: any) => setData('page', page)}
							/>
						</>
					) : (
						<h2>Category is empty!</h2>
					)}
				</Container>

			</div>
		</MainLayout>
	);
};

export default Category;
