import { FC } from 'react';
import { Link } from '@inertiajs/react';
import Image from '@/Components/_ui/Image/Image';
import styles from './style.module.scss';
import logo from "../../../img/follas_logo.svg";

interface IProduct {
	id: number;
	name: string;
	price: string;
	image_path: string;
	description: string;
	origin_number: string;
}

interface IProductData {
	product: IProduct[];
}

const OrderItem: FC<IProductData> = ({product}) => {
	return (
		<div className={styles.item}>
			<div><Image src={product.image_path} alt={logo} width={'80'} height={'80'} /></div>
			<div>{product.name}</div>
			<div>{product.description}</div>
			<div>{product.origin_number}</div>
			<div>{product.price} $</div>
			<div>{product.quantity} pc.</div>
		</div>
	);
};

export default OrderItem;
