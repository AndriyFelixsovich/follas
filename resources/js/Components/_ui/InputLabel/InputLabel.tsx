import {FC, ReactNode} from 'react';
import styles from './style.module.scss';

interface ILabelProps {
	value?: string;
	className?: string;
	children?: ReactNode;
}

const InputLabel: FC<ILabelProps> = ({value, children, className}) => {
	return (
		<label className={`${styles.label} ${className}`}>{value || children}</label>
	);
}

export default InputLabel;
