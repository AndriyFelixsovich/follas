import { Head, usePage, useForm } from '@inertiajs/react';
import { FC } from "react";
import styles from "@/Layouts/guest_layout.module.scss";
import AdminLayout from "@/Layouts/AdminLayout";
const Categories: FC = () => {
	return (
		<AdminLayout>
			<Head title="Categories"/>
				<h2>Categories</h2>
		</AdminLayout>
	);
}

export default Categories;
