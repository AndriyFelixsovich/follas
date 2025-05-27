import { Head, usePage, useForm } from '@inertiajs/react';
import { FC } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import styles from "@/Layouts/guest_layout.module.scss";

const Dashboard: FC = () => {
	const page = usePage();
	const user = page.props.auth.user;

	return (
			<AdminLayout>
				<Head title="Dashboard"/>
					<div className={styles.dashboard_inner_content}>
						<h2>Welcome {user.name}</h2>
					</div>
			</AdminLayout>
	);
}

export default Dashboard;
