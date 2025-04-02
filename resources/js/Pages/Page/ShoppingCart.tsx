import {Head} from '@inertiajs/react';
import { FC } from 'react';
import styles from './shopping.module.scss';
import Container from '@/Components/_ui/Container/Container';
import MainLayout from "@/Layouts/MainLayout";

const ShoppingCart: FC = () => {

	return (
		<MainLayout>
			<Head title="Shopping Cart"/>
			<div>
				<Container>
					<h1>Shopping Cart</h1>
					<p>Shopping Cart is empty!</p>
				</Container>
			</div>
		</MainLayout>);
}

export default ShoppingCart;
