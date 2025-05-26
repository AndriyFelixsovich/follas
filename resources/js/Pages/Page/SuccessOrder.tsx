import { FC } from 'react';
import styles from './success-order.module.scss';

const SuccessOrder: FC = () => {
	return (
		<div>
			<h2>Thank You for Your Order! <span>&#128578;</span></h2>
			<p>Your order was successful. We will contact you soon.</p>
		</div>
	);
};

export default SuccessOrder;
