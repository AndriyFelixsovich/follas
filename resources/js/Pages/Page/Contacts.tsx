import { Head,usePage, useForm } from '@inertiajs/react';
import { FC } from "react";
import styles from './contacts.module.scss';
import Container from '@/Components/_ui/Container/Container';
import Breadcrumbs from '@/Components/Breadcrumbs/Breadcrumbs';
import MainLayout from "@/Layouts/MainLayout";

const Contacts: FC = () => {

	return (
		<MainLayout>
			<Head title="Contacts"/>
			<Breadcrumbs title="Contacts"/>
			<div>
				<Container>
					<h1>Contacts</h1>
				</Container>
			</div>
		</MainLayout>);
}

export default Contacts;
