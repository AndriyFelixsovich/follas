import { FC } from 'react';
import styles from './style.module.scss';

interface InputProps {
	placeholder?: string;
	inputValue: number;
	onInputHandler: () => void;
}

const Input: FC<InputProps> = ({ placeholder, inputValue, onInputHandler }) => {
	return (
		<input type="text" aria-label="input" className={styles.input} placeholder={placeholder} value={inputValue} onChange={onInputHandler}/>
	);
}

export default Input;
