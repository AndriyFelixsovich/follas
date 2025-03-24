import React, { FC } from 'react';
import WishlistIcon from '@/Components/_ui/Icons/WishlistIcon';

interface IWishlistBtn {
	width: number | string;
	height: number | string;
	fill: number | string;
	onClick?: () => void;
}

const WishlistBtn: FC<IWishlistBtn> = ({width, height, fill,onClick}) => {
	return (
		<button onClick={onClick}>
			<WishlistIcon width={width} height={height} fill={fill} />
		</button>
	);
}

export default WishlistBtn;
