import { FC } from "react";
import { usePage } from '@inertiajs/react';
import styles from "./style.module.scss";

const WishlistHeaderQuantity: FC = () => {

	return (
		<div className={styles.total_quantity}>0</div>
	)
};

export default WishlistHeaderQuantity;
