import React, { FC, useState,useEffect } from 'react';
import { Link } from '@inertiajs/react';
import styles from './style.module.scss';
import {Product, CategoryProductItemProps, PageProps} from './interface';
import { useForm   } from '@inertiajs/react';
import Image from '@/Components/_ui/Image/Image';
import Input from '@/Components/_ui/Input/Input';
import CartBtn from '@/Components/_ui/CartBtn/CartBtn';
import WishlistBtn from '@/Components/_ui/WishlistBtn/WishlistBtn';
import EyeBtn from '@/Components/_ui/EyeBtn/EyeBtn';
import CategoryModalWindow from '@/Components/CategoryModalWindow/CategoryModalWindow';
import SuccessModalWindow from '@/Components/SuccessModalWindow/SuccessModalWindow';


const CategoryProductItem: FC<CategoryProductItemProps> = ({ product }) => {
	const [modals, setModals] = useState<Product[]>([]);
	const [inputValue, setInputValue] = useState('');
	const { post } = useForm({ product_id: product.id,});
	const [localSuccessMessage, setLocalSuccessMessage] = useState<string | null>(null);

	const openModal = (product: Product) => {
		setModals(prev => [...prev, product]);
	}
	const closeModal = (product: Product) => {
		setModals(prev => prev.filter(modal => modal !== product));
	}

	const handlerQuantityValue = e => {
		const value = e.target.value;
		setInputValue(value)
		console.log('Quantity', value)
	}

	const addToWishlist = () => {
		post('/wishlist/toggleWishlistItem', {
			data: {
				product_id: product.id,
			},
			preserveScroll: true,
			onSuccess: (page: { props: PageProps }) => {
				if (page.props.flash?.success) {
					setLocalSuccessMessage(page.props.flash.success);
				}
			},
			onError: (page: { props: PageProps }) => {
				if (page.props.flash?.error) {
					setLocalSuccessMessage(page.props.flash.error);
				}
			},
		});
	}

	useEffect(() => {
		if (localSuccessMessage) {
			const timer = setTimeout(() => {
				setLocalSuccessMessage(null);
			}, 2000);
			return () => clearTimeout(timer);
		}
	}, [localSuccessMessage]);

	const addToCart = () => {
		console.log("product cart", product)
	}

	const viewProductInfo =() => {
		console.log("product viewProductInfo")
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
			<Input inputValue={inputValue} onInputHandler={handlerQuantityValue} />
			<WishlistBtn
				onClick={addToWishlist}
				width={30}
				height={30}
				fill="#2e3b4c"
				productId={product.id}
			/>
			{localSuccessMessage && (
				<SuccessModalWindow message={localSuccessMessage} />
			)}
			<CartBtn onClick={addToCart} width={30} height={30} fill="#fff" stroke="#0c0310" />
		</div>

		</div>
	);
};

export default CategoryProductItem;
