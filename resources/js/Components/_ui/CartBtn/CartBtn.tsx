import React, { FC, useEffect, useState } from 'react';
import CartIcon from '@/Components/_ui/Icons/CartIcon';
import { usePage } from '@inertiajs/react';

interface ICartBtn {
	width: number | string;
	height: number | string;
	fill: number | string;
	onClick?: () => void;
	productId: number;
	stroke?: string;
}

interface PageProps {
	cartItemsObj?: { product_id: number }[];
}

const CartBtn: FC<ICartBtn> = ({ width, height, fill, onClick, stroke, productId }) => {
	const [isActive, setActive] = useState(false);
	const { cartItemsObj } = usePage().props as PageProps;

	useEffect(() => {
		if (Array.isArray(cartItemsObj)) {
			const isInCart = cartItemsObj.some(item => item.product_id === productId);
			setActive(isInCart);
		}
	}, [cartItemsObj, productId]);

	const handlerClick = () => {
		setActive(prev => !prev);
		if (onClick) onClick();
	};

	return (
		<button onClick={handlerClick}>
			<CartIcon width={width} height={height} fill={fill} stroke={isActive ? "#28a745" : stroke} />
		</button>
	);
};

export default CartBtn;
