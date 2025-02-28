import { Head, useForm } from '@inertiajs/react';
import { FC } from 'react';
import Container from '@/Pages/Front/_ui/Container/Container';
import CategoryProductItem from '@/Pages/Front/Components/CategoryProductItem/CategoryProductItem';
import styles from './category.module.scss';
import MainLayout from "@/Layouts/MainLayout";
import Pagination from '@/Pages/Front/Components/Pagination/Pagination';

interface Category {
	id: number;
	name: string;
}

interface Product {
	id: number;
	name: string;
	price: string;
}

interface Products {
	current_page: number;
	data: Product[];
	links: any;
}

interface CategoryProps {
	category: Category;
	products: Products;
}

const Category: FC<CategoryProps> = ({ category, products }) => {
	const { data, setData } = useForm<{ page: number }>({ page: products.current_page });

	return (
		<MainLayout>
			<Head title="Main" />
			<div className={styles.category_page}>
				<Container>
					<h1>{category.name}</h1>
					<div className={styles.category_page_wrap}>
						{products.data.map((product_cat) => (
							<CategoryProductItem product={product_cat} key={product_cat.id} />
						))}
					</div>
				</Container>
				<Pagination links={products.links} setCurrentPage={(page:any) => setData('page', page)} />
			</div>
		</MainLayout>
	);
};

export default Category;
