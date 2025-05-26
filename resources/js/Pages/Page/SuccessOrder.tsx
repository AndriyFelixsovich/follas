import { FC } from 'react';
import { Head, usePage, useForm, Link } from '@inertiajs/react';
import MainLayout from "@/Layouts/MainLayout";
import Container from '@/Components/_ui/Container/Container';
import styles from './success-order.module.scss';

const SuccessOrder: FC = () => {
	return (
		<MainLayout>
			<Head title="Success Order"/>
			<Container>
				<div className={styles.success_block}>
					<h2>Thank You for Your Order! <span>&#128578;</span></h2>
					<p>Your order was successful. We will contact you soon.</p>
					<Link href="/">Go home</Link>
				</div>
			</Container>
		</MainLayout>
);
};

export default SuccessOrder;
