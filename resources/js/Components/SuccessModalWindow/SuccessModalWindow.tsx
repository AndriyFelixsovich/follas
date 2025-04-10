import React, { FC } from 'react';
import styles from './style.module.scss';

interface ISuccessModalWindow {
	message: string
}

const SuccessModalWindow: FC<ISuccessModalWindow> = ({ message }) => {

	return (
		<div className={styles.modal_window}>
				<div className={styles.message}>{message}</div>
		</div>
	);
};

export default SuccessModalWindow;
