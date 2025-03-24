import React, { FC, useState } from 'react';
import { Link } from '@inertiajs/react';
import Image from '@/Components/_ui/Image/Image';
import Input from '@/Components/_ui/Input/Input';
import CartBtn from '@/Components/_ui/CartBtn/CartBtn';
import WishlistBtn from '@/Components/_ui/WishlistBtn/WishlistBtn';
import CategoryModalWindow from '@/Components/CategoryModalWindow/CategoryModalWindow';
import styles from './style.module.scss';

interface Product {
	image_path: string;
	description: string;
	origin_number: string;
	name: string;
}

interface CategoryProductItemProps {
	product: Product;
	index: number;
}

const CategoryProductItem: FC<CategoryProductItemProps> = ({ product }) => {
	const [modals, setModals] = useState<Product[]>([]);

	const openModal = (product: Product) => {
		setModals(prev => [...prev, product]);
	}
	const closeModal = (product: Product) => {
		setModals(prev => prev.filter(modal => modal !== product));
	}

	const addToWishlist = () => {
		console.log(product)
	}

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
				<div className={styles.title}>{product.description}</div>
				<div>{product.origin_number}</div>
			</div>

			<Input />

			<WishlistBtn onClick={addToWishlist} width={30} height={30} fill="#0c0310" />
			<CartBtn width={30} height={30} fill="#fff" />

		</div>
	);
};

export default CategoryProductItem;
