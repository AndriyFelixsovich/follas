import { Head, usePage, useForm } from '@inertiajs/react';
import { FC } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import ProductList from '@/Components/Admin/ProductList/ProductList';
import styles from "@/Layouts/guest_layout.module.scss";

const Dashboard: FC = () => {
	return (
			<AdminLayout>
				<Head title="Dashboard"/>
				<div className={styles.dashboard_inner_content}>
					<h2>Wellcome Username</h2>
				</div>
			</AdminLayout>
	);
}

export default Dashboard;
