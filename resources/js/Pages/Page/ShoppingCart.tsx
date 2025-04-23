import {Head, usePage} from '@inertiajs/react';
import { FC } from 'react';
import styles from './shopping.module.scss';
import Container from '@/Components/_ui/Container/Container';
import MainLayout from "@/Layouts/MainLayout";
import CategoryTopBar from "@/Components/CategoryTopBar/CategoryTopBar";
import CategoryProductItem from "@/Components/CategoryProductItem/CategoryProductItem";

const ShoppingCart: FC = () => {
	const page = usePage();
	const productInCart = page.props.cartItemsObj;


		return (
		<MainLayout>
			<Head title="Shopping Cart"/>
			<div>
				<Container>
					<h1>Shopping Cart</h1>
					<CategoryTopBar />
					{productInCart.length === 0 ? (
						<p className={styles.wishlist_txt}>Shopping Cart is empty!</p>
					) : (
						<div className={styles.products}>
							{productInCart.map((product) => (
								<CategoryProductItem key={product.product_id} product={product}  />
							))}
						</div>
					)}
				</Container>
			</div>
		</MainLayout>);
}

export default ShoppingCart;
