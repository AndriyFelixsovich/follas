import React, {FC, useState} from "react";
import Input from '@/Components/_ui/Input/Input';
import styles from './style.module.scss';

interface ISearchBarInput {
	id: string,
	label: string,
	onHandlerSearchValue: () => void;
	inputValue: string
}

const SearchBarInput: FC<ISearchBarInput> = ({id, label, inputValue, onHandlerSearchValue}) => {
  return (
	  <label htmlFor={id} className={styles.label}>
		  {label}
    	<Input id={id} inputValue={inputValue} onInputHandler={onHandlerSearchValue}/>
	  </label>
  );
}

export default SearchBarInput;
