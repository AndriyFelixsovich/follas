import {Head, Link} from '@inertiajs/react';
import Container from '@/Pages/Front/_ui/Container/Container';
import CategoryItem from '@/Pages/Front/Components/CategoryItem/CategoryItem';
import styles from './index.module.scss';
import MainLayout from "@/Layouts/MainLayout.jsx";


const Index = ({category}) => {
	return (
		<MainLayout>
			<Head title="Main"/>
			<Container>
				<div className={styles.home_page}>
					<h1>Follos the best internet store!</h1>

					<div className={styles.category_item_wrap}>
						{category.map(cat => <CategoryItem cat={cat} key={cat.id}/>)}
					</div>

				</div>
			</Container>
		</MainLayout>
	);
}

export default Index;
