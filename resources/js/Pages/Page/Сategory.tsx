import { Head, router, useForm, usePage } from '@inertiajs/react';
import { FC, useState } from 'react';
import styles from './category.module.scss';
import CategoryProductItem from '@/Components/CategoryProductItem/CategoryProductItem';
import Container from '@/Components/_ui/Container/Container';
import MainLayout from "@/Layouts/MainLayout";
import Pagination from '@/Components/Pagination/Pagination';
import CategoryTopBar from '@/Components/CategoryTopBar/CategoryTopBar';
import Breadcrumbs from '@/Components/Breadcrumbs/Breadcrumbs';
import CategorySearchBar from '@/Components/CategorySearchBar/CategorySearchBar';
import { CategoryProps } from '@/Pages/Page/category.interface';

const Category: FC<CategoryProps> = ({ category, products }) => {
	const { setData } = useForm<{ page: number }>({ page: products.meta.current_page });

	return (
		<MainLayout>
			<Head title="Main" />
			<div className={styles.category_page}>

				<Breadcrumbs title={category.name} />

				<Container>
					<h1 className={styles.title}>{category.name}</h1>

					<CategorySearchBar />

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
						<div className={styles.empty_cat_txt}>
							<h2>No products available!</h2>
						</div>
					)}
				</Container>

			</div>
		</MainLayout>
	);
};

export default Category;
