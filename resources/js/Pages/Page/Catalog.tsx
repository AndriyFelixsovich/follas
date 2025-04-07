import { Head } from '@inertiajs/react';
import { FC } from "react";
import styles from './catalog.module.scss';
import CategoryProductItem from '@/Components/CategoryProductItem/CategoryProductItem';
import Container from '@/Components/_ui/Container/Container';
import MainLayout from "@/Layouts/MainLayout";
import Pagination from '@/Components/Pagination/Pagination';
import CategoryTopBar from '@/Components/CategoryTopBar/CategoryTopBar';
import Breadcrumbs from '@/Components/Breadcrumbs/Breadcrumbs';

const Catalog: FC = () => {

	return (
		<MainLayout>
			<Head title="Catalog"/>
			<div>
				<Breadcrumbs categoryName="Catalog"/>

				<Container>
					<h1>Catalog</h1>
					<CategoryTopBar />
				</Container>

			</div>
		</MainLayout>);
}

export default Catalog;
