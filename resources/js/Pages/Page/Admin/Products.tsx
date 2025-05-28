import { Head, usePage, useForm } from '@inertiajs/react';
import { FC } from "react";
import Tabs from "@/Components/Admin/Tabs/Tabs";
import ProductItem from "@/Components/Admin/ProductItem/ProductItem";
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
				<Tabs tabs={tabs} products={products}/>

			{
				products.data.map((product, index) => (
					<ProductItem key={product.id} index={index} product={product} />
				))
			}

		</AdminLayout>
	);
}

export default Products;
