import {Head} from '@inertiajs/react';
import {FC} from "react";
import checkout from './blog.module.scss';
import Container from '@/Components/_ui/Container/Container';
import MainLayout from "@/Layouts/MainLayout";

const CheckOut: FC = () => {

	return (
		<MainLayout>
			<Head title="Order"/>
			<div>
				<Container>
					<h1>Order</h1>
				</Container>
			</div>
		</MainLayout>);
}

export default CheckOut;
