import { Head,usePage, useForm } from '@inertiajs/react';
import { FC } from "react";
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
	const { data, setData, post, errors } = useForm({
		name: '',
		phone: '',
		email: '',
		comment: ''
	});

	const handleChange = e => setData(e.target.name, e.target.value);

	const formSubmitHandler = e => {
		e.preventDefault();
		// post('/checkout');
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
									<TextInput type="text" id="name" name="name" value={data.name} onChange={handleChange} />
									{errors.name && <InputError message={errors.name} />}
								</div>
								<div className={styles.form_field}>
									<InputLabel htmlFor="phone" value="Phone"/>
									<TextInput type="text" id="phone" name="phone" value={data.phone} onChange={handleChange}/>
									{errors.phone && <InputError message={errors.phone} />}
								</div>
								<div className={styles.form_field}>
									<InputLabel htmlFor="email" value="Email"/>
									<TextInput type="text" id="email" name="email" value={data.email} onChange={handleChange}/>
									{errors.email && <InputError message={errors.email} />}
								</div>
								<div className={styles.form_field}>
									<InputLabel htmlFor="comment" value="Comment"/>
									<Textarea id="comment" name="comment" value={data.comment} onChange={handleChange}/>
									{errors.comment && <InputError message={errors.comment} />}
								</div>

								<div className={styles.form_field_send}>
									<PrimaryButton onClick={formSubmitHandler}>Send</PrimaryButton>
								</div>
							</form>
						</div>
						<div>
							<h3>Product order</h3>
							<OrderItem />
						</div>
					</div>
				</Container>
			</div>
		</MainLayout>
	);
}

export default CheckOut;
