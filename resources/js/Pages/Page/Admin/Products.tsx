import { Head, usePage, useForm } from '@inertiajs/react';
import { FC } from "react";
import styles from "@/Layouts/guest_layout.module.scss";
import Tabs from "@/Components/_ui/Tabs/Tabs";
import AdminLayout from "@/Layouts/AdminLayout";
const Products: FC = () => {
	return (
		<AdminLayout>
			<Head title="Products"/>
				<h3>Products</h3>
				<Tabs />


		</AdminLayout>
	);
}

export default Products;
