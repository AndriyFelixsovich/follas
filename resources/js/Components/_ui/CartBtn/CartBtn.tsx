import React, { FC } from 'react';
import CartIcon from '@/Components/_ui/Icons/CartIcon';

interface ICartBtn {
	width: number | string;
	height: number | string;
	fill: number | string;
	onClick?: () => void;
}

const CartBtn: FC<ICartBtn> = ({width, height, fill,onClick}) => {
	return (
		<button onClick={onClick}>
			<CartIcon width={width} height={height} fill={fill}/>
		</button>
	);
}

export default CartBtn;
