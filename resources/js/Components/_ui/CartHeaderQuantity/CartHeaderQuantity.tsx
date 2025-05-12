import {FC} from "react";
import styles from "./style.module.scss";
import {usePage} from "@inertiajs/react";

const CartHeaderQuantity: FC = () => {
	const { cartItemsObj } = usePage().props;
	const cartCount = Object.keys(cartItemsObj).length;

	return (
		<div className={styles.total_quantity}>{cartCount}</div>
	)
};

export default CartHeaderQuantity;
