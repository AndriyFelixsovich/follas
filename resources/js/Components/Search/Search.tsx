import { Link } from '@inertiajs/react';
import React, {FC, useState} from "react";
import Input from '@/Components/_ui/Input/Input';
import SearchIcon from '@/Components/_ui/Icons/SeacrhIcon';
import styles from './style.module.scss';


const Search: FC = () => {
	const [inputValue, setInputValue] = useState('')

	const onInputHandler = e => {
		const value = e.target.value;
		setInputValue(value)
		console.log('Search',value)
	}

  return (
	  <form className={styles.form} action="#">
		  <Input placeholder="Search" inputValue={inputValue} onInputHandler={onInputHandler}  />
		  <button>
				<SearchIcon width="27" height="27" fill="#2e3b4c" />
		  </button>
	  </form>
  );
}

export default Search;
