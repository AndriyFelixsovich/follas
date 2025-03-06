import { FC } from 'react';
import styles from './style.module.scss';

interface InputProps {
	placeholder?: string;
}

const Input: FC<InputProps> = ({ placeholder }) => {
	return (
		<input type="text" placeholder={placeholder} className={styles.input} />
	);
}

export default Input;
