import React, { FC, useState,useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import WishlistIcon from '@/Components/_ui/Icons/WishlistIcon';

interface IWishlistBtn {
	width: number | string;
	height: number | string;
	fill: number | string;
	onClick?: () => void;
	productId: number;
}

interface PageProps {
	wishlist?: number[];
}

const WishlistBtn: FC<IWishlistBtn> = ({width, height, fill,onClick,productId }) => {
	const [isActive, setActive] = useState(false);
	const { wishlist } = usePage().props as PageProps;

	useEffect(() => {
		if (wishlist && Array.isArray(wishlist) && wishlist.includes(productId)) {
			setActive(true);
		} else {
			setActive(false);
		}
	}, [wishlist, productId]);

	const handlerClick = () => {
		setActive(prev => !prev)
		if(onClick) onClick();
	}

	return (
		<button onClick={handlerClick}>
			<WishlistIcon width={width} height={height} fill={isActive ? "#28a745" : fill} />
		</button>
	);
}

export default WishlistBtn;
