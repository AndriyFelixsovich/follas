import React, { FC, useState, useEffect } from 'react';
import {Link, usePage} from '@inertiajs/react';
import styles from './style.module.scss';
import {Product, CategoryProductItemProps} from './interface';
import { useForm } from '@inertiajs/react';
import Image from '@/Components/_ui/Image/Image';
import Input from '@/Components/_ui/Input/Input';
import CartBtn from '@/Components/_ui/CartBtn/CartBtn';
import WishlistBtn from '@/Components/_ui/WishlistBtn/WishlistBtn';
import EyeBtn from '@/Components/_ui/EyeBtn/EyeBtn';
import CategoryModalWindow from '@/Components/CategoryModalWindow/CategoryModalWindow';
import SuccessModalWindow from '@/Components/SuccessModalWindow/SuccessModalWindow';

const CategoryProductItem: FC<CategoryProductItemProps> = ({ product, isWishlistPage }) => {
	const [modals, setModals] = useState<Product[]>([]);
	const [showSuccess, setShowSuccess] = useState(false);
	const [showSuccessCart, setShowSuccessCart] = useState(false);

	const { cartItemsObj } = usePage().props;
	const { message } = usePage().props.flash;
	const wishlistMessage = message?.wishlist;
	const cartMessage = message?.cart;


	useEffect(() => {
		const cartItem = cartItemsObj.find((item: { product_id: number }) => item.product_id === product.id);
		if (cartItem) {
			CartForm.setData('quantity', cartItem.quantity);
		}
	}, [cartItemsObj, product.id]);

	useEffect(() => {
		if (cartMessage) {
			setShowSuccessCart(true);
			const timeout = setTimeout(() => setShowSuccessCart(false), 1000);
			return () => clearTimeout(timeout);
		}
	}, [cartMessage]);


	const CartForm = useForm({
		product_id: product.id,
		quantity: ""
	});

	const wishlistForm = useForm({
		product_id: product.id
	});

	const openModal = (product: Product) => {
		setModals(prev => [...prev, product]);
	}
	const closeModal = (product: Product) => {
		setModals(prev => prev.filter(modal => modal !== product));
	}

	const handlerQuantityValue = e => {
		const value = e.target.value;
		CartForm.setData('quantity', value);
	}


	const addToWishlist = () => {
		wishlistForm.post('/wishlist/toggleWishlistItem', {
			preserveScroll: true,
			onSuccess: () => {
				setShowSuccess(true);
				setTimeout(() => setShowSuccess(false), 1000);
			}
		});
	};


	const addToCart = () => {
		CartForm.post('/addToCart', {
			preserveScroll: true,
		});
	}

	const viewProductInfo = () => {
		console.log("product viewProductInfo");
	}

	return (
		<div className={styles.category_product_item}>
			<div className={styles.image_block} onClick={() => openModal(product)}>
				<Image src={`${window.location.origin}/${product.image_path}`} width={'150'} height={'150'} alt={product.description} />
			</div>

			{modals.map((modal, index) => (
				<CategoryModalWindow modal={modal} index={index} onClose={closeModal} key={index} />
			))}

			<div className={styles.info}>
				<p>{product.name}</p>
				<div className={styles.title}>{product.description}</div>
				<div>{product.origin_number}</div>
			</div>

			<div className={styles.controls}>
				<EyeBtn onClick={viewProductInfo} width={30} height={30} fill="#2e3b4c" />
				<div className={styles.wishlist_btn_wrp}>
					<WishlistBtn isWishlistPage={isWishlistPage} onClick={addToWishlist} width={30} height={30} fill="#2e3b4c" productId={product.id} />
					{wishlistMessage && showSuccess && (
						<SuccessModalWindow message={wishlistMessage} />
					)}

				</div>
				{!isWishlistPage && (
					<Input
						id="quantity"
						inputValue={CartForm.data.quantity}
						onInputHandler={handlerQuantityValue}
						isWishlistPage={isWishlistPage}
					/>
				)}
				<div className={styles.wishlist_btn_wrp}>
					<CartBtn onClick={addToCart} width={30} height={30} fill="#fff" stroke="#0c0310" productId={product.id}/>
					{cartMessage && showSuccessCart && product.id === message.product_id && (
						<SuccessModalWindow message={cartMessage}/>
					)}
				</div>
			</div>
		</div>
	);
};

export default CategoryProductItem;
