import { Head } from '@inertiajs/react';
import { FC } from "react";
import styles from './catalog.module.scss';
import Container from '@/Components/_ui/Container/Container';
import MainLayout from "@/Layouts/MainLayout";
import Breadcrumbs from '@/Components/Breadcrumbs/Breadcrumbs';
import CategoryItem from "@/Components/CategoryItem/CategoryItem";

interface IProductCategory {
	id: number;
	name: string;
}

interface ICatalog {
	category: IProductCategory[];
}

console.log()
const Catalog: FC<ICatalog> = ({ category }) => {
	return (
		<MainLayout>
			<div className={styles.catalog}>
				<Head title="Catalog"/>
				<div>
					<Breadcrumbs title="Catalog"/>

					<Container>
						<h1>Catalog</h1>
						<div className={styles.catalog_item_wrap}>
							{category.map(cat => (
								<CategoryItem cat={cat} key={cat.id} slug={cat.slug} />
							))}
						</div>
					</Container>

				</div>
			</div>
		</MainLayout>);
}

export default Catalog;
