import { Head,usePage, useForm } from '@inertiajs/react';
import { FC } from "react";
import Container from '@/Components/_ui/Container/Container';
import MainLayout from "@/Layouts/MainLayout";
import Breadcrumbs from '@/Components/Breadcrumbs/Breadcrumbs';
import CategoryProductItem from '@/Components/CategoryProductItem/CategoryProductItem';
import styles from './about.module.scss';

const SearchResult: FC = () => {
	const page = usePage();
	const products = page.props.searchResult.props.products.data;

	return (
			<MainLayout>
				<Head title="Search Result"/>
				<Breadcrumbs title="Search Result"/>
				<div>
					<Container>
						<h1>Search Result</h1>
						{
							products.length > 0 ? (
								products.map(product => (
									<CategoryProductItem product={product} key={product.id} index={product.id} />
								))
							) : (
								<p>Product not found</p>
							)
						}
					</Container>
				</div>
			</MainLayout>
		);
}

export default SearchResult;
