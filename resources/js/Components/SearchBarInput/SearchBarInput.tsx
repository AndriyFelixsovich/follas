import React, { FC, KeyboardEvent, FocusEvent, ChangeEvent } from "react";
import Input from '@/Components/_ui/Input/Input';
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

const SearchBarInput: FC<ISearchBarInput> = ({
							 label,
							 className,
							 placeholder,
							 onBlur,
							 onKeyPress,
																						}) => {
  return (
	  <label className={styles.label}>
		  {label}
    	<TextInput
				type="text"
				className={className}
				placeholder={placeholder}
				onBlur={onBlur}
				onKeyPress={onKeyPress}
			/>
	  </label>
  );
}

export default SearchBarInput;
