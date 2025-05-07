import React from 'react';
import styles from './guest_layout.module.scss';


interface AdminLayoutProps {
	children: React.ReactNode;
	className?: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, className }) => {
	return (
		<>
			{children}
		</>
	);
};

export default AdminLayout;
