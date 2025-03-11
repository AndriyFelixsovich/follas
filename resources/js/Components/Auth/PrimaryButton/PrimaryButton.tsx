import React from 'react';
import './style.module.scss';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	disabled?: boolean;
	className?: string;
	children: React.ReactNode;
}

export default function PrimaryButton({className = '', disabled = false, children, ...props}: PrimaryButtonProps) {
	return (
		<button {...props} className={`button ${disabled ? 'opacity-25' : ''} ` + className} disabled={disabled}>
			{children}
		</button>
	);
}
