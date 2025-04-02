import {Head} from '@inertiajs/react';
import { FC } from 'react';
import styles from './wishlist.module.scss';
import Container from '@/Components/_ui/Container/Container';
import MainLayout from "@/Layouts/MainLayout";


const Wishlist: FC = ({productsInWishlist}) => {

	return (
		<MainLayout>
			<Head title="Wishlist"/>
			<div>
				<Container>
					<h1>Wishlist</h1>
					<p>Wishlist is empty!</p>
				</Container>
			</div>
		</MainLayout>);
}

export default Wishlist;
