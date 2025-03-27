import { FC } from 'react';
import styles from './style.module.scss';

interface InputProps {
	placeholder?: string;
	quantityValue: number;
	handlerQuantityValue: () => void;
}

const Input: FC<InputProps> = ({ placeholder, quantityValue, handlerQuantityValue }) => {
	return (
		<input type="text" className={styles.input} placeholder={placeholder} value={quantityValue} onChange={handlerQuantityValue}/>
	);
}

export default Input;
