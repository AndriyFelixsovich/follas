import {Head, usePage, Link, useForm} from '@inertiajs/react';
import { FC, useState, useEffect  } from 'react';
import styles from './shopping.module.scss';
import Container from '@/Components/_ui/Container/Container';
import MainLayout from "@/Layouts/MainLayout";
import CategoryTopBar from "@/Components/CategoryTopBar/CategoryTopBar";
import CategoryProductItem from "@/Components/CategoryProductItem/CategoryProductItem";
import Breadcrumbs from '@/Components/Breadcrumbs/Breadcrumbs';

const ShoppingCart: FC = ({ totalPrice }) => {
	const page = usePage();
	const productInCart = page.props.products.data;
	const [shouldPost, setShouldPost] = useState(false);
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


	useEffect(() => {
		if (shouldPost) {
			post(route('cart.cartCheck'), data, { preserveScroll: true, replace: true });
			setShouldPost(false);
		}
	}, [data, shouldPost]);

	const send = () => {
		let selectedItems = [];

		if (selectedProducts.length === 0) {
			selectedItems = productInCart.map(product => ({
				...product,
				quantity: quantities[product.id] || product.quantity
			}));
		} else {
			selectedItems = productInCart
				.filter(product => selectedProducts.includes(product.id))
				.map(product => ({
					...product,
					quantity: quantities[product.id] || product.quantity
				}));
		}

		setData({
			products: selectedItems.map(product => product.id)
		});

		setShouldPost(true);
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
