import { useForm } from '@inertiajs/react';
import React, {FC, useState} from "react";
import Input from '@/Components/_ui/Input/Input';
import SearchIcon from '@/Components/_ui/Icons/SeacrhIcon';
import styles from './style.module.scss';

const Search: FC = () => {
	const [inputError, setInputError] = useState(false);

	const searchForm = useForm({
		value: ''
	});

	const onInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		searchForm.setData('value', e.target.value);
	};

	const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!searchForm.data.value) {
			setInputError(true);
			return;
		}

		searchForm.post('/SearchResultController/index', {
			onSuccess: () => {
				console.log('Send!');
			}
		});
	};

	return (
		<form className={styles.form} onSubmit={sendForm}>
			<Input placeholder="Search" onInputHandler={onInputHandler} inputValue={searchForm.data.value} error={inputError} />
			<button type="submit">
				<SearchIcon width="27" height="27" fill="#2e3b4c" />
			</button>
		</form>
	);
};

export default Search;
