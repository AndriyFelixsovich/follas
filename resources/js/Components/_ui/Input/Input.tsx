import React, { FC } from 'react';
import styles from './style.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	inputValue: string;
	onInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
	isWishlistPage?: boolean;
}

const Input: FC<InputProps> = ({ inputValue, onInputHandler, isWishlistPage, error, ...props }) => {
	return (
		<input
			{...props}
			type="text"
			aria-label="input"
			value={inputValue}
			onChange={onInputHandler}
			className={styles.input}
			style={{border: error ? '1px solid red' : '1px solid #ccc',}}
		/>
	);
};

export default Input;
