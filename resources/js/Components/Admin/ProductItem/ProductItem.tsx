import { usePage, useForm, Link } from '@inertiajs/react';
import React, { FC, useState } from "react";
import Image from '@/Components/_ui/Image/Image';
import EditIcon from '@/Components/_ui/Icons/EditIcon';
import CloseIcon from '@/Components/_ui/Icons/CloseIcon';
import styles from './style.module.scss';

interface IProductData {
	id: number;
	name: string;
	price: string;
	image_path: string;
	description: string;
	origin_number: string;
	quantity: string;
}

interface IProduct {
	product: IProductData[];
	editProduct: () => void;
}

const ProductItem: FC<IProduct> = ({ product, editProduct }) => {

	const removeProduct = () => {
		console.log('remove')
	}

	return (
		<div className={styles.product_item}>
			<Image src={`${window.location.origin}/${product.image_path}`} width={'150'} height={'150'} alt={product.description}/>
			<div>{product.description}</div>
			<div>{product.name}</div>
			<div>{product.price} $</div>
			<div>{product.origin_number}</div>
			<div>{product.quantity}</div>
			<Link href={`/admin/products/${product.id}/edit`} className={styles.edit_button} onClick={editProduct}>
				<EditIcon width={25} height={25} fill={'#25a0e2'}/>
			</Link>
			<button className={styles.remove_button} onClick={removeProduct}>
				<CloseIcon width={25} height={25}  fill={'red'}/>
			</button>
		</div>
	);
};

export default ProductItem;
