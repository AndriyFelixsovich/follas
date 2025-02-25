import {Head} from '@inertiajs/react';
import Container from '@/Pages/Front/_ui/Container/Container';
import CategoryProductItem from '@/Pages/Front/Components/CategoryProductItem/CategoryProductItem';
import styles from './category.module.scss';
import MainLayout from "@/Layouts/MainLayout.jsx";

const Category = ({ category, products  }) => {

	return (
		<MainLayout>
			<Head title="Main"/>
			<div className={styles.category_page}>
				<Container>
					<h1>{category.name}</h1>
					<div className={styles.category_page_wrap}>
						{products.map(product_cat => <CategoryProductItem product={product_cat} key={product_cat.id}/>)}
					</div>
				</Container>
			</div>
		</MainLayout>);
}

export default Category;
