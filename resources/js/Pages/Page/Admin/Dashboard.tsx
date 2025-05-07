import { Head, usePage, useForm } from '@inertiajs/react';
import { FC } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import TopBar from '@/Components/Admin/TopBar/TopBar';
import Sidebar from '@/Components/Admin/Sidebar/Sidebar';
import ProductList from '@/Components/Admin/ProductList/ProductList';
import styles from './style.module.scss';

const Dashboard: FC = () => {

	return (
			<AdminLayout>
				<Head title="Dashboard"/>
					<div className={styles.dashboard_inner}>
						<TopBar />
						<div className={styles.cols}>
							<Sidebar />
							<ProductList />
						</div>
					</div>
			</AdminLayout>
	);
}

export default Dashboard;
