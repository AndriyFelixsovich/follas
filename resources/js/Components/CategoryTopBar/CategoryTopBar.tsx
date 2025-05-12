import { FC, useState } from 'react';
import styles from './style.module.scss';

interface ICategoryTopBar {
	isWishlistPage?: boolean;
}

const CategoryTopBar: FC<ICategoryTopBar> = ({ isWishlistPage = false,  }) => {

	return (
		<div className={styles.top_bar}>
			<div className={styles.top_bar_table}>
				<div></div>
				<div>IMS Part No.</div>
				<div>Description</div>
				<div>Orig. No.</div>
				{isWishlistPage ? (
					<div>Remove</div>
				) : (
					<div>Add to wishlist</div>
				)}
				<div>Quantity</div>
				<div>Add to cart</div>
			</div>
		</div>
	);
};

export default CategoryTopBar;
