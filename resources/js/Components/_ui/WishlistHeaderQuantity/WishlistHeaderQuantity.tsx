import { FC } from "react";
import { usePage } from '@inertiajs/react';
import styles from "./style.module.scss";
import {count} from "../../../../../node_modules2/rxjs";

const WishlistHeaderQuantity: FC = () => {
	const { wishlistItemsObj } = usePage().props;
	const wishlistCount = Object.keys(wishlistItemsObj).length;

	return (
		<div className={styles.total_quantity}>{wishlistCount}</div>
	)
};

export default WishlistHeaderQuantity;
