import { FC, useState, useEffect } from "react";
import { usePage, useForm, Link } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import styles from './style.module.scss';
import { route } from 'ziggy-js';
import ProductItem from "@/Components/Admin/ProductItem/ProductItem";
import AddProductForm from "@/Components/Admin/AddProductForm/AddProductForm";
import Pagination from '@/Components/Pagination/Pagination';
import SearchBarInput from '@/Components/SearchBarInput/SearchBarInput';
import ProductEditForm from '@/Components/Admin/ProductEditForm/ProductEditForm';

interface IContent {
	activeTab: number;
	setShowTab: () => void;
	products: {
		data: any[];
		links: {
			url: string | null;
			label: string;
			active: boolean;
		}[];
	};
}

const Content: FC<IContent> = ({ activeTab, products, setShowTab, selectedTab }) => {
	const [currentPage, setCurrentPage] = useState<string | null>(null);
	const [showEditForm, setShowEditForm] = useState(false);

	const editProduct = (product) => {
		setShowEditForm(true);
		setShowTab(true);
		const path = `/posts/${product.id}/edit`;
		router.visit(path);
	}

	return (
		<div className={styles.content}>
			<div>
				{
					activeTab === 1 && (
						<>
							<div className={styles.search}>
								<SearchBarInput placeholder="Search"/>
							</div>
							{products?.data?.map((product, index) => (
								<ProductItem key={product.id} index={index} product={product} editProduct={() => editProduct(product)} />
							))}
						</>
					)
				}
				{activeTab === 1 && products?.links && (
					<Pagination
						links={products.links}
						setCurrentPage={setCurrentPage}
					/>
				)}
			</div>
			<div>
				{
					activeTab === 2 &&
					<AddProductForm />
				}
			</div>
			<div>
				{activeTab === 3 && showEditForm && (
					<>
						<ProductEditForm products={products} productId={editProduct} />
					</>
				)}
			</div>
		</div>
	);
};

export default Content;
