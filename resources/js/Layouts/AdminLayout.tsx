import React from 'react';
import Image from '@/Components/_ui/Image/Image';
import { Link } from '@inertiajs/react';
import styles from './guest_layout.module.scss';
import logo from "../../img/follas_logo.svg";

interface AdminLayoutProps {
	children: React.ReactNode;
	className?: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, className }) => {
	const layoutClass = className ? `${styles.guest_layout_wpr} ${className}` : styles.guest_layout_wpr;

	return (
		<div className={layoutClass}>
				<Link href="/">
					<Image src={logo} alt={logo} width={'120'} height={'80'} />
				</Link>

			<div className={styles.guest_layout_inner}>
				{children}
			</div>
		</div>
	);
};

export default AdminLayout;
