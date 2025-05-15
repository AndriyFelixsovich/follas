import { Head,usePage, useForm } from '@inertiajs/react';
import { FC } from "react";
import Container from '@/Components/_ui/Container/Container';
import MainLayout from "@/Layouts/MainLayout";
import Breadcrumbs from '@/Components/Breadcrumbs/Breadcrumbs';
import styles from './about.module.scss';

const About: FC = () => {

	return (
			<MainLayout>
				<Head title="About"/>
				<Breadcrumbs title="About"/>
				<div>
					<Container>
						<h1>About Us</h1>
					</Container>
				</div>
			</MainLayout>
		);
}

export default About;
