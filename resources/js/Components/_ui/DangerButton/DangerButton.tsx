import React, { FC } from 'react';
import styles from './style.module.scss';

interface IDangerButton{
	className?: string;
	children: React.ReactNode;
	onClick: () => void;
}

const DangerButton: FC<IDangerButton> = ({onClick,className,children}) => {
	return (
		<button className={`${styles.button} ${className}`} onClick={onClick}>{children}</button>
	);
}

export default DangerButton;
