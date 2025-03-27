import { Head } from '@inertiajs/react';
import { FC } from 'react';
import Container from '@/Components/_ui/Container/Container';
import CategoryItem from '@/Components/CategoryItem/CategoryItem';
import MainLayout from "@/Layouts/MainLayout";
import styles from './index.module.scss';

interface Category {
	id: number;
	name: string;
}

interface IndexProps {
	category: Category[];
}

const Index: FC<IndexProps> = ({ category = [] }) => {
	return (
		<MainLayout>
			<Head title="Main" />
			<Container>
				<div className={styles.home_page}>
					<h1>Follas the best internet store!</h1>
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
