import {Head} from '@inertiajs/react';
import { FC } from 'react';
import Container from '@/Pages/Front/_ui/Container/Container';
import styles from './contacts.module.scss';
import MainLayout from "@/Layouts/MainLayout";

const Contacts: FC = () => {

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
