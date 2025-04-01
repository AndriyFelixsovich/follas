import React, { FC } from 'react';
import styles from './style.module.scss';

interface IPrimaryButton{
	children: React.ReactNode;
	onClick: () => void;
}

const PrimaryButton: FC<IPrimaryButton> = ({children, onClick}) => {
	return (
		<button className={styles.button} onClick={onClick}>{children}</button>
	);
}

export default PrimaryButton;
