import {Head} from '@inertiajs/react';
import { FC } from 'react';
import { usePage } from '@inertiajs/react';
import styles from './shopping.module.scss';
import Container from '@/Components/_ui/Container/Container';
import MainLayout from "@/Layouts/MainLayout";
import CategoryTopBar from "@/Components/CategoryTopBar/CategoryTopBar";
import CategoryProductItem from "@/Components/CategoryProductItem/CategoryProductItem";

interface IProduct {
	id: number;
	image_path: string;
	description: string;
	origin_number: string;
	name: string;
}

interface ICart {
	cartItemsObj: IProduct[];
}

const ShoppingCart: FC<ICart> = ({ cartItemsObj }) => {

		return (
		<MainLayout>
			<Head title="Shopping Cart"/>
			<div>
				<Container>
					<h1>Shopping Cart</h1>
					{cartItemsObj.length === 0 ? (
						<p className={styles.wishlist_txt}>Shopping Cart is empty!</p>
					) : (
						<div className={styles.products}>
							{cartItemsObj.map((product) => (
								<CategoryProductItem key={product.id} product={product} />
							))}
						</div>
					)}
				</Container>
			</div>
		</MainLayout>);
}

export default ShoppingCart;
