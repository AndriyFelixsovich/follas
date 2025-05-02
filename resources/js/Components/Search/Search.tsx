import { useForm } from '@inertiajs/react';
import React, {FC, useState} from "react";
import Input from '@/Components/_ui/Input/Input';
import SearchIcon from '@/Components/_ui/Icons/SeacrhIcon';
import styles from './style.module.scss';

const Search: FC = () => {
	const [inputError, setInputError] = useState(false);

	const { data, setData, post } = useForm({
		value: ''
	});

	const onInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setData('value', e.target.value);
	};

	const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if(!data.value) {
			setInputError(true);
		}

		console.log(data.value);
		// post('/search');
	};

	return (
		<form className={styles.form} onSubmit={sendForm}>
			<Input placeholder="Search" onInputHandler={onInputHandler} inputValue={data.value} error={inputError} />
			<button type="submit">
				<SearchIcon width="27" height="27" fill="#2e3b4c" />
			</button>
		</form>
	);
};

export default Search;
