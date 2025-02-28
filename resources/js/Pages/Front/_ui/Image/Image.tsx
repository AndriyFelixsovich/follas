import { FC } from 'react';
import styles from './style.module.scss';

interface ImageProps {
	src: string;
	alt: string;
	width: number | string;
	height: number | string;
}

const Image: FC<ImageProps> = ({ src, alt, width, height }) => {
	return (
		<img className={styles.image} src={src} alt={alt} width={width} height={height} />
	);
}

export default Image;
