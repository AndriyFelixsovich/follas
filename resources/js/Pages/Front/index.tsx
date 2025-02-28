import { Head, Link } from '@inertiajs/react';
import { FC } from 'react';
import Container from '@/Pages/Front/_ui/Container/Container';
import CategoryItem from '@/Pages/Front/Components/CategoryItem/CategoryItem';
import styles from './index.module.scss';
import MainLayout from "@/Layouts/MainLayout";


interface Category {
	id: number;
	name: string;
}

interface IndexProps {
	category: Category[];
}

const Index: FC<IndexProps> = ({ category }) => {
	return (
		<MainLayout>
			<Head title="Main" />
			<Container>
				<div className={styles.home_page}>
					<h1>Follow the best internet store!</h1>
					<div className={styles.category_item_wrap}>
						{category.map(cat => (
							<CategoryItem cat={cat} key={cat.id} />
						))}
					</div>
				</div>
			</Container>
		</MainLayout>
	);
};

export default Index;
