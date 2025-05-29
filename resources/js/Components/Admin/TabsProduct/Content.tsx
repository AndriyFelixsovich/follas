import { FC, useState } from "react";
import styles from './style.module.scss';
import ProductItem from "@/Components/Admin/ProductItem/ProductItem";
import AddProductForm from "@/Components/Admin/AddProductForm/AddProductForm";
import Pagination from '@/Components/Pagination/Pagination';

interface IContent {
	activeTab: number;
	products: {
		data: any[];
		links: {
			url: string | null;
			label: string;
			active: boolean;
		}[];
	};
}

const Content: FC<IContent> = ({ activeTab, products }) => {
	const [currentPage, setCurrentPage] = useState<string | null>(null);

	return (
		<div className={styles.content}>
			<div>
				{
					activeTab === 1 && products.data.map((product, index) => (
						<ProductItem key={product.id} index={index} product={product} />
					))
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
					<AddProductForm />
				}
			</div>
		</div>
	);
};

export default Content;
