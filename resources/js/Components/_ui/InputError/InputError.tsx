import { FC } from 'react';
import React from 'react';
import styles from './style.module.scss';

interface InputProps {
	message: string | null;
}

const InputError: FC<InputProps> = ({ message, ...props }) => {
	return message ? (
		<p {...props} className={styles.p}>{message}</p>
	) : null;
};

export default InputError;
