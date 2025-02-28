import { FC } from 'react';
import { Link } from '@inertiajs/react';
import Image from '../../_ui/Image/Image';
import styles from './style.module.scss';

interface Product {
	image_path: string;
	description: string;
	origin_number: string;
	name: string;
}

interface CategoryProductItemProps {
	product: Product;
}

const CategoryProductItem: FC<CategoryProductItemProps> = ({ product }) => {
	return (
		<div className={styles.category_product_item}>
			<Image src={`${window.location.origin}/${product.image_path}`} width={'150'} height={'150'} alt={product.description} />
			<div className={styles.info}>
				<div className={styles.title}>{product.description}</div>
				<strong>№: {product.origin_number}</strong>
				<p>{product.name}</p>
			</div>
		</div>
	);
};

export default CategoryProductItem;
