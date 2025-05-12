import {Head} from '@inertiajs/react';
import {FC} from "react";
import styles from './blog.module.scss';
import Container from '@/Components/_ui/Container/Container';
import Breadcrumbs from '@/Components/Breadcrumbs/Breadcrumbs';
import MainLayout from "@/Layouts/MainLayout";

const Blog: FC = () => {

	return (
		<MainLayout>
			<Head title="Blog"/>
			<Breadcrumbs title="Blog"/>
			<div>
				<Container>
					<h1>Blog</h1>
				</Container>
			</div>
		</MainLayout>);
}

export default Blog;
