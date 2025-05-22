import {Head, usePage, Link, useForm} from '@inertiajs/react';
import { FC, useState  } from 'react';
import styles from './shopping.module.scss';
import Container from '@/Components/_ui/Container/Container';
import MainLayout from "@/Layouts/MainLayout";
import CategoryTopBar from "@/Components/CategoryTopBar/CategoryTopBar";
import CategoryProductItem from "@/Components/CategoryProductItem/CategoryProductItem";
import Breadcrumbs from '@/Components/Breadcrumbs/Breadcrumbs';

const ShoppingCart: FC = ({ totalPrice }) => {
	const page = usePage();
	const productInCart = page.props.products.data;

	const [selectedProducts, setSelectedProducts] = useState([]);
	const [quantities, setQuantities] = useState<Record<number, string>>({});


	const { data, setData, post } = useForm({
		products: productInCart,
	});

	const handleQuantityChange = (id: number, quantity: string) => {
		setQuantities(prev => ({ ...prev, [id]: quantity }));
	};


	const handleSelectChange = (id: number, checked: boolean) => {
		if (checked) {
			setSelectedProducts(prev => [...prev, id]);
		} else {
			setSelectedProducts(prev => prev.filter(pid => pid !== id));
		}
	};


	const CartForm = useForm({
		product_id: product.id,
		check: 1
	});

	const send = () => {
		const selectedItems = productInCart
			.filter(product => selectedProducts.includes(product.id))
			.map(product => ({
				...product,
				quantity: quantities[product.id] || product.quantity
			}));

		if (selectedItems.length === 0) {
			const allProductIds = productInCart.map(product => product.id);
			setSelectedProducts(allProductIds);
			return;
		}

		CartForm.setData({
			selectedItems: selectedItems,
			check: 1
		});


		CartForm.post(route('cart.cartCheck'), {
			preserveScroll: true,
			replace: true,
		});
	};


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
									<CategoryProductItem
										key={index}
										product={product}
										isCartPage={true}
									  index={index}
										onSelectChange={handleSelectChange}
										onQuantityChange={handleQuantityChange}
									/>
								))}
							</div>
							<div className={styles.total_price}>
								<div className={styles.price}>{totalPrice}$</div>
								<div onClick={send} className={styles.buy_btn}>Buy</div>
							</div>
						</>
					)}
				</Container>
			</div>
		</MainLayout>);
}

export default ShoppingCart;
