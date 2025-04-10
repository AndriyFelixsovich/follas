import { FC, useState } from 'react';
import styles from './style.module.scss';

interface ICategoryTopBar {
	isWishlistPage?: boolean;
}

const CategoryTopBar: FC<ICategoryTopBar> = ({ isWishlistPage = false }) => {

	return (
		<div className={styles.top_bar}>
			<table>
				<tbody>
					<tr>
						<td>IMS Part No.</td>
						<td>Description</td>
						<td>Orig. No.</td>
						{isWishlistPage ? (
							<td>Remove</td>
						) : (
							<td>Add to wishlist</td>
						)}
						{
							!isWishlistPage && (
								<td>Quantity</td>
							)
						}
						<td>Add to cart </td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default CategoryTopBar;
