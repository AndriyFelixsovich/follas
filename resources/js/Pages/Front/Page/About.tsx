import {Head} from '@inertiajs/react';
import {FC} from "react";
import Container from '@/Pages/Front/_ui/Container/Container';
import styles from './about.module.scss';
import MainLayout from "@/Layouts/MainLayout";

const About: FC = () => {

	return (
		<MainLayout>
			<Head title="About"/>
			<div>
				<Container>
					<h1>About Us</h1>
				</Container>
			</div>
		</MainLayout>);
}

export default About;
