import React, { FC, useState } from 'react';
import EyeIcon from '@/Components/_ui/Icons/EyeIcon';

interface IEyeBtn {
	width: number | string;
	height: number | string;
	fill: number | string;
	onClick?: () => void;
}

const EyeBtn: FC<IEyeBtn> = ({width, height, fill,onClick}) => {
	const [isActive, setActive] = useState(false);

	const handlerClick = () => {
		setActive(prev => !prev)
		if(onClick) onClick();
	}

	return (
		<button onClick={handlerClick}>
			<EyeIcon width={width} height={height} fill={isActive ? "#28a745" : fill} />
		</button>
	);
}

export default EyeBtn;
