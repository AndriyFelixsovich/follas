import { Head,usePage, useForm } from '@inertiajs/react';
import { FC, useState } from "react";
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

const CheckOut: FC = ({ totalPrice }) => {
	const [error, setErrors] = useState({});
	const page = usePage();
	const products = page.props.product;

	const { data, setData, post, errors } = useForm({
		name: '',
		phone: '',
		email: '',
		address: '',
	});

	const handleChange = e => setData(e.target.name, e.target.value);

	const formSubmitHandler = e => {
		e.preventDefault();

		const newErrors = {};
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const phoneRegex = /^\+\d{10,15}$/;

		if (!data.name.trim()) newErrors.name = 'Name is required';

		if (!data.phone.trim()) {
			newErrors.phone = 'Phone is required';
		} else if (!phoneRegex.test(data.phone)) {
			newErrors.phone = 'Phone must start with "+" and contain only digits';
		}

		if (!data.email.trim()) {
			newErrors.email = 'Email is required';
		} else if (!emailRegex.test(data.email)) {
			newErrors.email = 'Invalid email format';
		}

		if (!data.address.trim()) newErrors.address = 'Address is required';

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}

		// post('/test', data);
		console.log(data)
	};


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
									<TextInput type="text" id="name" name="name" value={data.name} onChange={handleChange}/>
									{error.name && <InputError message={error.name}/>}
								</div>
								<div className={styles.form_field}>
									<InputLabel htmlFor="phone" value="Phone"/>
									<TextInput type="text" id="phone" name="phone" value={data.phone} onChange={handleChange}/>
									{error.phone && <InputError message={error.phone}/>}
								</div>
								<div className={styles.form_field}>
									<InputLabel htmlFor="email" value="Email"/>
									<TextInput type="email" id="email" name="email" value={data.email} onChange={handleChange}/>
									{error.email && <InputError message={error.email}/>}
								</div>
								<div className={styles.form_field}>
									<InputLabel htmlFor="address" value="Delivery address"/>
									<Textarea id="address" name="address" value={data.address} onChange={handleChange}/>
									{error.address && <InputError message={error.address}/>}
								</div>

								<strong className={styles.total_amount}>Total amount: {totalPrice} $</strong>
								<div className={styles.form_field_send}>
									<PrimaryButton onClick={formSubmitHandler}>Send</PrimaryButton>
								</div>
							</form>

						</div>
						<div>
							<h3>Product order</h3>
							{
								products.map((product, index) => (
									<OrderItem product={product} key={index} index={index} />
								))
							}
						</div>
					</div>
				</Container>
			</div>
		</MainLayout>
	);
}

export default CheckOut;
