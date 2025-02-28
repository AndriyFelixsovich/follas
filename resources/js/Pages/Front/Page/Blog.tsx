import {Head} from '@inertiajs/react';
import {FC} from "react";
import Container from '@/Pages/Front/_ui/Container/Container';
import styles from './blog.module.scss';
import MainLayout from "@/Layouts/MainLayout";

const Blog: FC = () => {

	return (
		<MainLayout>
			<Head title="Blog"/>
			<div>
				<Container>
					<h1>Blog</h1>
				</Container>
			</div>
		</MainLayout>);
}

export default Blog;
