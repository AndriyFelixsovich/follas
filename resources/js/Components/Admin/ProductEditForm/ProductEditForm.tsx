import { Head, usePage, useForm, Link } from '@inertiajs/react';
import React, {FC, useEffect, useState} from "react";
import styles from './style.module.scss';
import InputLabel from "@/Components/_ui/InputLabel/InputLabel";
import TextInput from "@/Components/_ui/TextInput/TextInput";
import SecondButton from "@/Components/_ui/SecondButton/SecondButton";
import InputError from "@/Components/_ui/InputError/InputError";

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

const ProductEditForm: FC<IProductEditForm> = () => {
	const [imagePreview, setImagePreview] = useState<string | null>(null);
	const [error, setError] = useState(false);

	const { data, setData, post } = useForm<FormData>({
		image: null,
		name: '',
		description: '',
		origin_number: '',
		price: '',
		quantity: ''
	});

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setData('image', file);
			setImagePreview(URL.createObjectURL(file));
		}
	};

	const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('send')
	}

	const chan = () => {
		console.log('123')
	}

	return (
		<form onSubmit={sendForm}>
			{imagePreview && (
				<div>
					<img src={imagePreview} alt="preview" className={styles.img_preview}/>
				</div>
			)}
			<div className={styles.form_field_bl}>
				<InputLabel htmlFor="image" value="Image"/>
				<TextInput
					id="image"
					type="file"
					name="image"
					onChange={handleImageChange}
				/>
				{error && <InputError message="The field is required"/>}
			</div>
			<div className={styles.form_field}>
				<InputLabel htmlFor="name" value="Name"/>
				<TextInput
					id="name"
					type="text"
					name="name"
					value=""
					onChange={chan}
				/>
			</div>
			<div className={styles.form_field}>
				<InputLabel htmlFor="description" value="Description"/>
				<TextInput
					id="description"
					type="text"
					name="description"
					value=""
					onChange={chan}
				/>
			</div>
			<div className={styles.form_field}>
				<InputLabel htmlFor="origin" value="Origin number"/>
				<TextInput
					id="origin"
					type="text"
					name="origin"
					value=""
					onChange={chan}
				/>
			</div>
			<div className={styles.form_field}>
				<InputLabel htmlFor="price" value="Price"/>
				<TextInput
					id="price"
					type="text"
					name="price"
					value=""
					onChange={chan}
				/>
			</div>
			<div className={styles.form_field}>
				<InputLabel htmlFor="quantity" value="Quantity"/>
				<TextInput
					id="quantity"
					type="text"
					name="quantity"
					value=""
					onChange={chan}
				/>
			</div>
			<div className={styles.send_button}>
				<SecondButton onClick={sendForm}>Add</SecondButton>
			</div>
		</form>
	);
};

export default ProductEditForm;
