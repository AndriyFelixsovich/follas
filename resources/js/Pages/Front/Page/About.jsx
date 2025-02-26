import {Head} from '@inertiajs/react';
import Container from '@/Pages/Front/_ui/Container/Container';
import CategoryProductItem from '@/Pages/Front/Components/CategoryProductItem/CategoryProductItem';
import styles from './about.module.scss';
import MainLayout from "@/Layouts/MainLayout.jsx";

const About = () => {

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
