import { usePage, useForm, Link } from '@inertiajs/react';
import React, { FC, useState } from "react";
import styles from './style.module.scss';
import InputLabel from "@/Components/_ui/InputLabel/InputLabel";
import TextInput from "@/Components/_ui/TextInput/TextInput";
import SecondButton from "@/Components/_ui/SecondButton/SecondButton";
import InputError from '@/Components/_ui/InputError/InputError';
import Select from '@/Components/Admin/Select/Select';

interface FormData {
	name: string;
	description: string;
	origin_number: string;
	price: string;
	quantity: string;
}
const AddProductForm: FC = () => {
	const [imagePreview, setImagePreview] = useState<string | null>(null);
	const [error, setError] = useState(false);

	const page= usePage();
	const markas = page.props.markas;
	const models = page.props.models;
	const years = page.props.years;

	const { data, setData, post } = useForm<FormData>({
		image: null,
		name: '',
		description: '',
		origin_number: '',
		price: '',
		quantity: '',
		brand: '',
		model: '',
		year: ''
	});

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setData('image', file);
			setImagePreview(URL.createObjectURL(file));
		}
	};

	const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const isFormValid =
			data.name.trim() !== '' &&
			data.description.trim() !== '' &&
			data.origin_number.trim() !== '' &&
			data.price.trim() !== '' &&
			data.quantity.trim() !== '' &&
			data.image !== null;

		if (!isFormValid) {
			setError(true);
			console.log('Form has empty fields', data);
			return;
		}

		setError(false);

		post(route('admin.products.store'), {
			preserveScroll: true,
			onSuccess: () => {
				setData(data);
			},
			onError: (errors) => {
				console.error('Validation errors:', errors);
			}
		});
	}

	const filteredModels = Array.isArray(models) ? models.filter((model: any) => model.category_id === Number(data.brand)) : [];


	return (
		<div className={styles.product_item}>
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
				<div className={styles.form_field_bl}>
					<Select
						htmlFor="Brand"
						message="Brand"
						value={data.brand}
						variations={markas}
						onChange={(e) => setData('brand', (e.target.value))}
					/>
					{error && <InputError message="The field is required"/>}
				</div>
				<div className={styles.form_field_bl}>
					<Select
						htmlFor="Model"
						message="Model"
						value={data.model}
						variations={filteredModels}
						onChange={(e) => setData('model', (e.target.value))}
					/>
					{error && <InputError message="The field is required"/>}
				</div>
				<div className={styles.form_field_bl}>
					<Select
						htmlFor="Year"
						message="Year"
						value={data.year}
						variations={years}
						onChange={(e) => setData('year', (e.target.value))}
					/>
					{error && <InputError message="The field is required"/>}
				</div>
				<div className={styles.form_field_bl}>
					<InputLabel htmlFor="name" value="Name"/>
					<TextInput
						id="name"
						type="text"
						name="name"
						value={data.name}
						onChange={(e) => setData('name', e.target.value)}
					/>
					{error && <InputError message="The field is required"/>}
				</div>
				<div className={styles.form_field_bl}>
					<InputLabel htmlFor="description" value="Description"/>
					<TextInput
						id="description"
						type="text"
						name="description"
						value={data.description}
						onChange={(e) => setData('description', e.target.value)}
					/>
					{error && <InputError message="The field is required"/>}
				</div>
				<div className={styles.form_field_bl}>
					<InputLabel htmlFor="origin" value="Origin number"/>
					<TextInput
						id="origin"
						type="text"
						name="origin"
						value={data.origin_number}
						onChange={(e) => setData('origin_number', e.target.value)}
					/>
					{error && <InputError message="The field is required"/>}
				</div>
				<div className={styles.form_field_bl}>
					<InputLabel htmlFor="price" value="Price"/>
					<TextInput
						id="price"
						type="text"
						name="price"
						value={data.price}
						onChange={(e) => setData('price', e.target.value)}
					/>
					{error && <InputError message="The field is required"/>}
				</div>
				<div className={styles.form_field_bl}>
					<InputLabel htmlFor="quantity" value="Quantity"/>
					<TextInput
						id="quantity"
						type="text"
						name="quantity"
						value={data.quantity}
						onChange={(e) => setData('quantity', e.target.value)}
					/>
					{error && <InputError message="The field is required"/>}
				</div>
				<div className={styles.send_button}>
					<SecondButton onClick={sendForm}>Add</SecondButton>
				</div>
			</form>
		</div>
	);
};

export default AddProductForm;
