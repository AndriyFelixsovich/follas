import { FC } from 'react';
import { Link } from '@inertiajs/react';
import Image from '@/Components/_ui/Image/Image';
import logo from '../../../img/follas_logo.svg';
import styles from './style.module.scss';

interface Category {
	id: number;
	name: string;
}

interface CategoryItemProps {
	cat: Category;
}

const CategoryItem: FC<CategoryItemProps> = ({ cat }) => {
	return (
		<div className={styles.category_item}>
			<Link href={route('category.index', { id: cat.id })}>
				<Image src={logo} alt={logo} width={'80'} height={'80'} />
			</Link>
			<Link href={route('category.index', { id: cat.id })}>{cat.name}</Link>
		</div>
	);
};

export default CategoryItem;
