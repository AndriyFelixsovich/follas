import React, { FC, useState } from 'react';
import WishlistIcon from '@/Components/_ui/Icons/WishlistIcon';

interface IWishlistBtn {
	width: number | string;
	height: number | string;
	fill: number | string;
	onClick?: () => void;
}

const WishlistBtn: FC<IWishlistBtn> = ({width, height, fill,onClick}) => {
	const [isActive, setActive] = useState(false);

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
