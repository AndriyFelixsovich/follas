import { FC } from 'react';
import styles from './style.module.scss';

interface IChevronDown {
	width: number | string;
	height: number | string;
	className?: string
}

const ChevronDown: FC<IChevronDown> = ({ width, height, className }) => {
  return (
	<svg width={width} height={height} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M7 10L12 15L17 10" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
	</svg>
  );
}

export default ChevronDown;
