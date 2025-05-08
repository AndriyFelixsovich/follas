import { Head, usePage, useForm } from '@inertiajs/react';
import { FC } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import ProductList from '@/Components/Admin/ProductList/ProductList';

const Dashboard: FC = () => {
	return (
			<AdminLayout>
				<Head title="Dashboard"/>
				<h2>Wellcome Username</h2>
			</AdminLayout>
	);
}

export default Dashboard;
