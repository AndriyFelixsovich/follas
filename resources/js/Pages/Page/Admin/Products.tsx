import { Head, usePage, useForm } from '@inertiajs/react';
import { FC } from "react";
import TabsProduct from "@/Components/Admin/TabsProduct/TabsProduct";
import AdminLayout from "@/Layouts/AdminLayout";
import styles from "@/Layouts/guest_layout.module.scss";

const Products: FC = ({ products, selectedTab2 }) => {

	const tabs = [
		{id: 1, title: 'All products', href: 'admin.products.index'},
		{id: 2, title: 'Add product',  href: 'admin.products.create'},
		{id: 3, title: 'Edit product', href: 'admin.products.edit'},
	]

	return (
		<AdminLayout>
			<Head title="Products"/>
				<h3>Products</h3>
				<TabsProduct tabs={tabs} products={products} selectedTab={selectedTab2} />
		</AdminLayout>
	);
}

export default Products;
