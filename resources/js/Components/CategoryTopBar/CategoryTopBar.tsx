import { FC, useState } from 'react';
import styles from './style.module.scss';

const CategoryTopBar: FC = () => {

	return (
		<div className={styles.top_bar}>
			<table>
				<tbody>
					<tr>
						<td>IMS Part No.</td>
						<td>Description</td>
						<td>Orig. No.</td>
						<td>Quantity</td>
						<td>Add to wishlist</td>
						<td>Add to cart </td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default CategoryTopBar;
