import React, { FC, useState, useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import WishlistIcon from '@/Components/_ui/Icons/WishlistIcon';
import CloseIcon from '@/Components/_ui/Icons/CloseIcon';

interface IWishlistBtn {
	width: number | string;
	height: number | string;
	fill: string;
	onClick?: () => void;
	productId: number;
	isWishlistPage?: boolean;
}

interface PageProps {
	wishlistItemsObj?: {};
}

const WishlistBtn: FC<IWishlistBtn> = ({ width, height, fill, onClick, productId, isWishlistPage }) => {
	const [isActive, setActive] = useState(false);
	const { wishlistItemsObj } = usePage().props as PageProps;

	useEffect(() => {
		if (wishlistItemsObj && Array.isArray(wishlistItemsObj) && wishlistItemsObj.includes(productId)) {
			setActive(true);
		} else {
			setActive(false);
		}
	}, [wishlistItemsObj, productId]);

	const handlerClick = () => {
		setActive(prev => !prev);
		if (onClick) onClick();
	};

	return (
		<button onClick={handlerClick}>
			{isWishlistPage ? (
				<CloseIcon width={width} height={height} fill={isActive ? '#dc3545' : '#dc3545'} />
			) : (
				<WishlistIcon width={width} height={height} fill={isActive ? '#28a745' : fill} />
			)}
		</button>
	);
};

export default WishlistBtn;
