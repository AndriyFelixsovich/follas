import React, { FC, InputHTMLAttributes } from 'react';
import styles from './style.module.scss';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	isCartPage?: boolean;
	checked?: boolean;
	onHandleChangeCheckBox?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<CheckboxProps> = ({
	                                     className = '',
	                                     isCartPage,
	                                     onHandleChangeCheckBox,
	                                     checked ,
	                                     ...props
}) => {
	return (
		<input type="checkbox" className={`${styles.checkbox} ${className}`.trim()} {...props} onChange={onHandleChangeCheckBox}  checked={checked} />
	);
};

export default Checkbox;
