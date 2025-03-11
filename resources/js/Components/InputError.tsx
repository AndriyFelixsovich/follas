import { HTMLProps } from 'react';
import React from 'react';

interface InputErrorProps extends HTMLProps<HTMLParagraphElement> {
	message: string | null;
	className?: string;
}

const InputError: React.FC<InputErrorProps> = ({ message, className = '', ...props }) => {
	return message ? (
		<p {...props} className={`text-sm text-red-600 ${className}`}>
			{message}
		</p>
	) : null;
};

export default InputError;
