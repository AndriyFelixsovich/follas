import {Head} from '@inertiajs/react';
import {FC} from "react";
import Container from '@/Components/_ui/Container/Container';
import MainLayout from "@/Layouts/MainLayout";
import Breadcrumbs from '@/Components/Breadcrumbs/Breadcrumbs';
import CategorySearchBar from '@/Components/CategorySearchBar/CategorySearchBar';
import styles from './about.module.scss';

const SearchResult: FC = () => {

	return (
			<MainLayout>
				<Head title="Search Result"/>
				<Breadcrumbs title="Search Result"/>
				<div>
					<Container>
						<h1>Search Result</h1>


					</Container>
				</div>
			</MainLayout>
		);
}

export default SearchResult;
