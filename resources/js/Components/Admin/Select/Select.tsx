import { usePage, useForm, Link } from '@inertiajs/react';
import React, { FC, useState } from "react";
import InputLabel from "@/Components/_ui/InputLabel/InputLabel";
import styles from './style.module.scss';

interface ISelect {
	htmlFor: string;
	message: string;
}
const Select: FC<ISelect> = ({htmlFor, message}) => {

	return (
		<div>
			<InputLabel htmlFor={htmlFor} value={message} />
			<select name="select" id="select" className={styles.select}>
				<option value="марка">Марка</option>
			</select>
		</div>
	);
};

export default Select;
