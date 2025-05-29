import React, { FC } from 'react';
import styles from './style.module.scss';

interface ISecondButton{
	children: React.ReactNode;
	onClick: () => void;
}

const SecondButton: FC<ISecondButton> = ({children, onClick }) => {
	return (
		<button className={styles.button} onClick={onClick}>{children}</button>
	);
}

export default SecondButton;
