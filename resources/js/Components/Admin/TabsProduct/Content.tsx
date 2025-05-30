import { FC, useState } from "react";
import styles from './style.module.scss';
import ProductItem from "@/Components/Admin/ProductItem/ProductItem";
import AddProductForm from "@/Components/Admin/AddProductForm/AddProductForm";
import Pagination from '@/Components/Pagination/Pagination';
import SearchBarInput from '@/Components/SearchBarInput/SearchBarInput';

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

const Content: FC<IContent> = ({ activeTab, products, setShowTab }) => {
	const [currentPage, setCurrentPage] = useState<string | null>(null);
	const [showEditForm, setShowEditForm] = useState(false);

	const editProduct = () => {
		setShowEditForm(true);
		setShowTab(true)
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
							{products.data.map((product, index) => (
								<ProductItem key={product.id} index={index} product={product} editProduct={editProduct}/>
							))}
						</>
					)
				}
				{activeTab === 1 && (
					<Pagination
						links={products.links}
						setCurrentPage={setCurrentPage}
					/>
				)}
			</div>
			<div>
				{
					activeTab === 2 &&
					<AddProductForm/>
				}
			</div>
			<div>
				{activeTab === 3 && showEditForm && (
					<>
						<h3>Edit Product</h3>
					</>
				)}
			</div>
		</div>
	);
};

export default Content;
