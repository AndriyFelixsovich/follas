import { Head, usePage, useForm } from '@inertiajs/react';
import { FC } from "react";
import styles from "@/Layouts/guest_layout.module.scss";
import AdminLayout from "@/Layouts/AdminLayout";
const Pages: FC = () => {
	return (
		<AdminLayout>
			<Head title="Pages"/>
				<h2>Pages</h2>
		</AdminLayout>
	);
}

export default Pages;
