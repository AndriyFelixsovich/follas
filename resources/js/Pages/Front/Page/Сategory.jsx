import {Head, Link, useForm} from '@inertiajs/react';
import Container from '@/Pages/Front/_ui/Container/Container';
import CategoryProductItem from '@/Pages/Front/Components/CategoryProductItem/CategoryProductItem';
import styles from './category.module.scss';
import MainLayout from "@/Layouts/MainLayout.jsx";
import Pagination from '@/Pages/Front/Components/Pagination/Pagination';

const Category = ({ category, products  }) => {
	const {data, setData} = useForm({page: products.current_page})

	return (
		<MainLayout>
			<Head title="Main"/>
			<div className={styles.category_page}>
				<Container>
					<h1>{category.name}</h1>
					<div className={styles.category_page_wrap}>
						{products.data.map(product_cat => <CategoryProductItem product={product_cat} key={product_cat.id}/>)}
					</div>
				</Container>
				<Pagination links={products.links} setCurrentPage={(page) => setData('page', page)} />
			</div>
		</MainLayout>);
}

export default Category;
