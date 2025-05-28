import { Head, usePage, useForm } from '@inertiajs/react';
import { FC } from "react";
import TabsProduct from "@/Components/Admin/TabsProduct/TabsProduct";
import AdminLayout from "@/Layouts/AdminLayout";
import styles from "@/Layouts/guest_layout.module.scss";

const Products: FC = ({ products }) => {

	const tabs = [
		{id: 1, title: 'All products'},
		{id: 2, title: 'Add product'},
	]

	return (
		<AdminLayout>
			<Head title="Products"/>
				<h3>Products</h3>
				<TabsProduct tabs={tabs} products={products}/>

		</AdminLayout>
	);
}

export default Products;
