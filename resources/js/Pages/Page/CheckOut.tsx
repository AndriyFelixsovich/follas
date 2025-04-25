import {  FC  } from "react";
import {  Head, usePage, useForm  } from '@inertiajs/react';
import styles from './checkout.module.scss';
import Container from '@/Components/_ui/Container/Container';
import MainLayout from "@/Layouts/MainLayout";
import Breadcrumbs from '@/Components/Breadcrumbs/Breadcrumbs';
import TextInput from '@/Components/_ui/TextInput/TextInput';
import InputLabel from '@/Components/_ui/InputLabel/InputLabel';
import Textarea from '@/Components/_ui/Textarea/Textarea';
import InputError from '@/Components/_ui/InputError/InputError';
import OrderItem from '@/Components/OrderItem/OrderItem';
import PrimaryButton from '@/Components/_ui/PrimaryButton/PrimaryButton';

const CheckOut: FC = () => {
	const page = usePage();
	console.log(page)

	const formSubmitHandler = () => {
		console.log('submit')
	}

	return (
		<MainLayout>
			<Head title="Order"/>
			<Breadcrumbs title="Order"/>
			<div>
				<Container>
					<h1>Order</h1>
					<div className={styles.checkout_wrap}>
						<div>
							<h3>Contact information</h3>

							<form onSubmit={formSubmitHandler}>
								<div className={styles.form_field}>
									<InputLabel htmlFor="name" value="Name"/>
									<TextInput type="text" id="name"/>
								</div>
								<div className={styles.form_field}>
									<InputLabel htmlFor="phone" value="Phone"/>
									<TextInput type="text" id="phone"/>
								</div>
								<div className={styles.form_field}>
									<InputLabel htmlFor="email" value="Email"/>
									<TextInput type="text" id="email"/>
								</div>
								<div className={styles.form_field}>
									<InputLabel htmlFor="comment" value="Comment"/>
									<Textarea id="comment" />
								</div>
							</form>

							<div className={styles.form_field_send}>
								<PrimaryButton onClick={formSubmitHandler}>Send</PrimaryButton>
							</div>
						</div>
						<div>
							<h3>Product order</h3>
								<OrderItem />
						</div>
					</div>
				</Container>
			</div>
		</MainLayout>);
}

export default CheckOut;
