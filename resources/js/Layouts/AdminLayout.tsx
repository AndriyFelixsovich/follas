import React from 'react';
import styles from './guest_layout.module.scss';


interface AdminLayoutProps {
	children: React.ReactNode;
	className?: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, className }) => {
	const layoutClass = className ? `${styles.guest_layout_wpr} ${className}` : styles.guest_layout_wpr;

	return (
		<div className={layoutClass}>
			<div className={styles.guest_layout_inner}>
				{children}
			</div>
		</div>
	);
};

export default AdminLayout;
