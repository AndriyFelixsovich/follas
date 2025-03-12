import { FC, useState } from 'react';
import { Link } from '@inertiajs/react';
import { CSSTransition } from 'react-transition-group';
import Image from '@/Components/_ui/Image/Image';
import Input from '@/Components/_ui/Input/Input';
import WishlistIcon from '@/Components/_ui/Icons/WishlistIcon';
import CategoryModalWindow from '@/Components/CategoryModalWindow/CategoryModalWindow';
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
	const [modals, setModals] = useState([]);
	const openModal = product => setModals(prev => [...prev, product]);
	const closeModal = product => setModals(prev => prev.filter(modal => modal !== product));

	return (
		<div className={styles.category_product_item}>

			<div className={styles.image_block} onClick={() => openModal(product)}>
				<Image src={`${window.location.origin}/${product.image_path}`} width={'150'} height={'150'} alt={product.description} />
			</div>

			{modals.map((modal, index) => (
				<CategoryModalWindow modal={modal} index={index} onClose={closeModal} key={index} />
			))}

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
