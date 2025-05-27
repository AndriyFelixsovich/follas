import { Head, usePage, useForm } from '@inertiajs/react';
import { FC } from "react";
import Tabs from "@/Components/Admin/Tabs/Tabs";
import AdminLayout from "@/Layouts/AdminLayout";
import styles from "@/Layouts/guest_layout.module.scss";

const Categories: FC = () => {

	const tabs = [
		{id: 1, title: 'All categories'},
		{id: 2, title: 'Add categories'},
	]

	return (
		<AdminLayout>
			<Head title="Categories"/>

				<h3>Categories</h3>
				<Tabs tabs={tabs} />

		</AdminLayout>
	);
}

export default Categories;
