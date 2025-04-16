import React, { FC } from 'react';
import styles from './style.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	inputValue: string;
	onInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
	isWishlistPage?: boolean;
}

const Input: FC<InputProps> = ({ inputValue, onInputHandler, isWishlistPage, ...props }) => {
	return (
		<input
			{...props}
			type="text"
			aria-label="input"
			value={inputValue}
			onChange={onInputHandler}
			className={styles.input}
		/>
	);
};

export default Input;
