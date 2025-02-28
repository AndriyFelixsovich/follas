import { FC } from 'react';
import styles from './style.module.scss';

interface CartProps {
	width: number | string;
	height: number | string;
}

const CartIcon: FC<CartProps> = ({ width, height }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} fill="none" stroke="#0c0310" strokeWidth="2">
			<path d="M2.5 3.5h2.074a.5.5 0 0 1 .494.421l1.663 10.395A2 2 0 0 0 8.705 16h8.69a2 2 0 0 0 1.952-1.566l1.382-6.217A1 1 0 0 0 19.753 7H5.84" strokeLinecap="round"/>
			<circle cx="9.5" cy="21" r="1"/>
			<circle cx="16.5" cy="21" r="1"/>
		</svg>
	);
}

export default CartIcon;
