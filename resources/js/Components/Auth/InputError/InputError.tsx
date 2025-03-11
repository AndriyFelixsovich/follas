import { HTMLProps } from 'react';
import React from 'react';
import styles from './style.module.scss';

interface InputErrorProps extends HTMLProps<HTMLParagraphElement> {
	message: string | null;
	className?: string;
}

const InputError: React.FC<InputErrorProps> = ({ message, className = '', ...props }) => {
	return message ? (
		<p {...props} className={styles.p}>
			{message}
		</p>
	) : null;
};

export default InputError;
