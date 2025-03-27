import React, { FC, useState } from 'react';
import CartIcon from '@/Components/_ui/Icons/CartIcon';

interface ICartBtn {
	width: number | string;
	height: number | string;
	fill: number | string;
	onClick?: () => void;
	stroke?: string;
}

const CartBtn: FC<ICartBtn> = ({width, height, fill,onClick, stroke}) => {
	const [isActive, setActive] = useState(false);

	const handlerClick = () => {
		setActive(prev => !prev)
		if(onClick) onClick();
	}

	return (
		<button onClick={handlerClick}>
			<CartIcon width={width} height={height} fill={fill} stroke={isActive ? "#28a745" : stroke} />
		</button>
	);
}

export default CartBtn;
