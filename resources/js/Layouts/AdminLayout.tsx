import React from 'react';
import TopBar from '@/Components/Admin/TopBar/TopBar';
import styles from './guest_layout.module.scss';
import Sidebar from "@/Components/Admin/Sidebar/Sidebar";

interface AdminLayoutProps {
	children: React.ReactNode;
	className?: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, className }) => {
	return (
		<>
			<div className={styles.dashboard_inner}>
				<TopBar/>
				<div className={styles.cols}>
					<Sidebar />
					{children}
				</div>
			</div>
		</>
	);
};

export default AdminLayout;
