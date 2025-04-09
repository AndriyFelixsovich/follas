import React, {FC} from "react";
import Input from '@/Components/_ui/Input/Input';
import styles from './style.module.scss';

interface ISearchBarInput {
	id: string,
	label: string,
	onInputHandler: () => void;
	inputValue: string
}

const SearchBarInput: FC<ISearchBarInput> = ({id, label, inputValue, onInputHandler}) => {
  return (
	  <label htmlFor={id} className={styles.label}>
		  {label}
    	<Input id={id} inputValue={inputValue} onInputHandler={onInputHandler}/>
	  </label>
  );
}

export default SearchBarInput;
