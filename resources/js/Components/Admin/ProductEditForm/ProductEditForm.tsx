import { Head, usePage, useForm, Link } from '@inertiajs/react';
import React, { FC } from "react";
import styles from './style.module.scss';
import InputLabel from "@/Components/_ui/InputLabel/InputLabel";
import TextInput from "@/Components/_ui/TextInput/TextInput";
import SecondButton from "@/Components/_ui/SecondButton/SecondButton";

interface FormData {
	image: string;
	name: string;
	description: string;
	origin_number: string;
	price: string;
	quantity: string;
}

interface IProductEditForm {
	products: FormData[];
}

const ProductEditForm: FC<IProductEditForm> = ({productId}) => {

	const { data, setData, post } = useForm<FormData>({
		image: null,
		name: '',
		description: '',
		origin_number: '',
		price: '',
		quantity: ''
	});

	console.log('productId', productId)

	const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('send')
	}

	return (
		<form onSubmit={sendForm}>
			<div className={styles.form_field}>
				<InputLabel htmlFor="name" value="Name"/>
				<TextInput
					id="name"
					type="text"
					name="name"
					value=""
				/>
			</div>
			<div className={styles.form_field}>
				<InputLabel htmlFor="description" value="Description"/>
				<TextInput
					id="description"
					type="text"
					name="description"
					value=""
				/>
			</div>
			<div className={styles.form_field}>
				<InputLabel htmlFor="origin" value="Origin number"/>
				<TextInput
					id="origin"
					type="text"
					name="origin"
					value=""
				/>
			</div>
			<div className={styles.form_field}>
				<InputLabel htmlFor="price" value="Price"/>
				<TextInput
					id="price"
					type="text"
					name="price"
					value=""
				/>
			</div>
			<div className={styles.form_field}>
				<InputLabel htmlFor="quantity" value="Quantity"/>
				<TextInput
					id="quantity"
					type="text"
					name="quantity"
					value=""
				/>
			</div>
			<div className={styles.send_button}>
				<SecondButton onClick={sendForm}>Add</SecondButton>
			</div>
		</form>
	);
};

export default ProductEditForm;
