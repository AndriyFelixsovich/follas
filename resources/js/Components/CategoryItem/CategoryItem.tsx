import { FC } from 'react';
import { Link } from '@inertiajs/react';
import Image from '@/Components/_ui/Image/Image';
import logo from '../../../img/follas_logo.svg';
import styles from './style.module.scss';

interface Category {
	id: number;
	name: string;
	slug: string
}

interface CategoryItemProps {
	cat: Category;
}

const CategoryItem: FC<CategoryItemProps> = ({ cat }) => {
	return (
		<Link className={styles.category_item} href={route('category.index', { slug: cat.slug })}>
			<Image src={logo} alt={logo} width={'80'} height={'80'} className={styles.category_img}/>
			<div href={route('category.index', { slug: cat.slug })}>{cat.name}</div>
		</Link>
	);
};

export default CategoryItem;
