import { FC } from 'react';
import { Link } from '@inertiajs/react';
import Image from '@/Components/_ui/Image/Image';
import Input from '@/Components/_ui/Input/Input';
import WishlistIcon from '@/Components/_ui/Icons/WishlistIcon';
import CartIcon from '@/Components/_ui/Icons/CartIcon';
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
				<p>{product.name}</p>
				<div>{product.origin_number}</div>
				<div className={styles.title}>{product.description}</div>
			</div>

			<Input />

			<button><WishlistIcon width={30} height={30}/></button>
			<button><CartIcon width={30} height={30}/></button>

		</div>
	);
};

export default CategoryProductItem;
