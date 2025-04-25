import {Head, usePage, Link} from '@inertiajs/react';
import { FC } from 'react';
import styles from './shopping.module.scss';
import Container from '@/Components/_ui/Container/Container';
import MainLayout from "@/Layouts/MainLayout";
import CategoryTopBar from "@/Components/CategoryTopBar/CategoryTopBar";
import CategoryProductItem from "@/Components/CategoryProductItem/CategoryProductItem";
import Breadcrumbs from '@/Components/Breadcrumbs/Breadcrumbs';

const ShoppingCart: FC = () => {
	const page = usePage();
	const productInCart = page.props.products.data;

		return (
		<MainLayout>
			<Head title="Shopping Cart"/>
			<Breadcrumbs title="Shopping Cart"/>
			<div>
				<Container>
					<h1>Shopping Cart</h1>
					{productInCart.length === 0 ? (
						<p className={styles.wishlist_txt}>Shopping Cart is empty!</p>
					) : (
						<>
							<CategoryTopBar />
							<div className={styles.products}>
								{productInCart.map((product, index) => (
									<CategoryProductItem key={index} product={product}  isCartPage={true} />
								))}
							</div>
							<div className={styles.total_price}>
								<div className={styles.price}>25$</div>
								<Link className={styles.buy_btn} href={route('index')}>Buy</Link>
							</div>
						</>
					)}
				</Container>
			</div>
		</MainLayout>);
}

export default ShoppingCart;
