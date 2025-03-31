import React, { FC } from 'react';
import styles from './style.module.scss';

interface IPrimaryButton{
	children: React.ReactNode;
}

const DangerButton: FC<IPrimaryButton> = ({children}) => {
	return (
		<button className={styles.button}>{children}</button>
	);
}

export default DangerButton;
