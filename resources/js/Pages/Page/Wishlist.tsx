import { Head, usePage, useForm } from '@inertiajs/react';
import { FC } from 'react';
import styles from './wishlist.module.scss';
import Container from '@/Components/_ui/Container/Container';
import CategoryProductItem from '@/Components/CategoryProductItem/CategoryProductItem';
import CategoryTopBar from '@/Components/CategoryTopBar/CategoryTopBar';
import MainLayout from '@/Layouts/MainLayout';

interface IProduct {
	id: number;
	image_path: string;
	description: string;
	origin_number: string;
	name: string;
	isWishlistPage?: boolean;
}

interface IWishlist {
	productsInWishlist: IProduct[];
}

const Wishlist: FC<IWishlist> = ({ productsInWishlist }) => {
	const page = usePage();
	console.log(page)


	return (
		<MainLayout>
			<Head title="Wishlist" />
			<div className={styles.wishlist}>
				<Container>
					<h1>Wishlist</h1>

					{productsInWishlist.length === 0 ? (
						<p className={styles.wishlist_txt}>Wishlist is empty!</p>
					) : (
						<div className={styles.products}>
							<CategoryTopBar isWishlistPage={true} />
							{productsInWishlist.map(product => (
								<CategoryProductItem isWishlistPage={true} product={product} key={product.id}/>
							))}
						</div>
					)}

				</Container>
			</div>
		</MainLayout>
	);
};

export default Wishlist;
