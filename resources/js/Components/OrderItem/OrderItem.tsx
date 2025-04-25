import { FC } from 'react';
import { Link } from '@inertiajs/react';
import Image from '@/Components/_ui/Image/Image';
import styles from './style.module.scss';


const OrderItem: FC = () => {
	return (
		<div className={styles.item}>
			<div>img</div>
			<div>descr</div>
			<div>origin</div>
			<div>price</div>
		</div>
	);
};

export default OrderItem;
