import {FC} from 'react';
import styles from './style.module.scss';

interface ITextarea {
	value?: string;
	className?: string;
	id?: string;
	placeholder?: string;
}
const Textarea: FC<ITextarea> = ({...props}) => {
	return (
		<textarea {...props} className={styles.textarea} cols="30" rows="10" aria-label="textarea">{props.value}</textarea>
	);
};

export default Textarea;
