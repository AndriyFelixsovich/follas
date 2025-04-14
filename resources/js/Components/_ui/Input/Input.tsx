import React, { FC } from 'react';
import styles from './style.module.scss';

interface InputProps {
	placeholder?: string;
	id?: string;
}

const Input: FC<InputProps> = (props) => {
	return (
		<input type="text" aria-label="input" {...props} className={styles.input}/>
	);
}

export default Input;
