import { Head, usePage, useForm } from '@inertiajs/react';
import React, { FC } from "react";
import Container from '@/Components/_ui/Container/Container';
import AdminLayout from "@/Layouts/AdminLayout";
import styles from './style.module.scss';

const Dashboard: FC = () => {

	return (
			<AdminLayout>
				<Head title="Login"/>
					<Container>
						<h1>Dashboard</h1>
					</Container>
			</AdminLayout>
	);
}

export default Dashboard;
