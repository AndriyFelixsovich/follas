import { Head, useForm } from '@inertiajs/react';
import { FC } from 'react';
import styles from './category.module.scss';
import CategoryProductItem from '@/Components/CategoryProductItem/CategoryProductItem';
import Container from '@/Components/_ui/Container/Container';
import MainLayout from "@/Layouts/MainLayout";
import Pagination from '@/Components/Pagination/Pagination';
import CategoryTopBar from '@/Components/CategoryTopBar/CategoryTopBar';
import Breadcrumbs from '@/Components/Breadcrumbs/Breadcrumbs';
import { CategoryProps } from '@/Pages/Page/category.interface';

const Category: FC<CategoryProps> = ({ category, products }) => {
	const { data, setData } = useForm<{ page: number }>({ page: products.current_page });

	return (
		<MainLayout>
			<Head title="Main" />
			<div className={styles.category_page}>

				<Breadcrumbs categoryName={category.name}/>

				<Container>
					<h1 className={styles.title}>{category.name}</h1>

					{products.data.length > 0 ? (
						<>
							<CategoryTopBar />
								<div className={styles.category_page_wrap}>
									{products.data.map((product_cat) => (
										<CategoryProductItem product={product_cat} key={product_cat.id} index={0} />
									))}
								</div>

								<Pagination links={products.links} setCurrentPage={(page:any) => setData('page', page)} />
						</>
					) : (
						<h2>Category is empty! </h2>
					)}

				</Container>

			</div>
		</MainLayout>
	);
};

export default Category;
