import {forwardRef, useEffect, useImperativeHandle, useRef, InputHTMLAttributes,} from "react";
import styles from './style.module.scss';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
	isFocused?: boolean;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
	({ type = "text", className = "", isFocused = false, ...props }, ref) => {
		const localRef = useRef<HTMLInputElement>(null);

		useImperativeHandle(ref, () => ({
			focus: () => localRef.current?.focus(),
		}));

		useEffect(() => {
			if (isFocused) {
				localRef.current?.focus();
			}
		}, [isFocused]);

		return (
			<input
				{...props}
				type={type}
				ref={localRef}
				className={styles.input}
			/>
		);
	}
);

export default TextInput;
