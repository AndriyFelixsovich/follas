import { FC } from "react";
import { usePage } from '@inertiajs/react';
import styles from "./style.module.scss";

const WishlistHeaderQuantity: FC = () => {
	const { productsInWishlist } = usePage().props;
	const wishlistCount = productsInWishlist ? productsInWishlist.length : 0;

	return (
		<div className={styles.total_quantity}>{wishlistCount}</div>
	)
};

export default WishlistHeaderQuantity;
