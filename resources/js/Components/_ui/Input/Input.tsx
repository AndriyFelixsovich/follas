import React, { FC } from 'react';
import styles from './style.module.scss';

interface InputProps {
	placeholder?: string;
	id?: string;
	inputValue: string;
	onInputHandler: () => void;
}

const Input: FC<InputProps> = ({ id,placeholder, inputValue, onInputHandler }) => {
	return (
		<input type="text" aria-label="input" id={id} className={styles.input} placeholder={placeholder} value={inputValue} onChange={onInputHandler}/>
	);
}

export default Input;
