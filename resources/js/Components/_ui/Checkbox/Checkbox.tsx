import React, { FC, InputHTMLAttributes } from 'react';
import styles from './style.module.scss';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
}

const Checkbox: FC<CheckboxProps> = ({ className = '', ...props }) => {
	return (
		<input type="checkbox" className={`${styles.checkbox} ${className}`.trim()} {...props} />
	);
};

export default Checkbox;
