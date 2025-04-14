import React, { FC, KeyboardEvent, FocusEvent } from "react";
import styles from './style.module.scss';
import TextInput from "@/Components/_ui/TextInput/TextInput";

interface ISearchBarInput {
	label?: string
	className?: string;
	placeholder?: string;
	onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
	onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
	defaultValue?: any;
}

const SearchBarInput: FC<ISearchBarInput> = (props) => {
  return (
	  <label className={styles.label}>
		  {props.label}
    	<TextInput
				type="text"
				{...props}
			/>
	  </label>
  );
}

export default SearchBarInput;
