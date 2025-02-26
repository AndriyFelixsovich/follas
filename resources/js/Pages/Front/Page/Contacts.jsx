import {Head} from '@inertiajs/react';
import Container from '@/Pages/Front/_ui/Container/Container';
import CategoryProductItem from '@/Pages/Front/Components/CategoryProductItem/CategoryProductItem';
import styles from './contacts.module.scss';
import MainLayout from "@/Layouts/MainLayout.jsx";

const Contacts = () => {

	return (
		<MainLayout>
			<Head title="Contacts"/>
			<div>
				<Container>
					<h1>Contacts</h1>
				</Container>
			</div>
		</MainLayout>);
}

export default Contacts;
