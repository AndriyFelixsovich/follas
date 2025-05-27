import { Head, usePage, useForm } from '@inertiajs/react';
import { FC } from "react";
import styles from "@/Layouts/guest_layout.module.scss";
import AdminLayout from "@/Layouts/AdminLayout";
const Products: FC = () => {
	return (
		<AdminLayout>
			<Head title="Products"/>
				<h2>Products</h2>
		</AdminLayout>
	);
}

export default Products;
