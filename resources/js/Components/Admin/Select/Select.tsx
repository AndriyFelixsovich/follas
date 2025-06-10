import { usePage, useForm, Link } from '@inertiajs/react';
import React, { FC, useState } from "react";
import InputLabel from "@/Components/_ui/InputLabel/InputLabel";
import styles from './style.module.scss';

interface IOptions {
	id: number;
	name: string;
	slug: string;
	year_range: number;
}
interface ISelect {
	htmlFor: string;
	message: string;
	variations: IOptions[];
	value: string;
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const Select: FC<ISelect> = ({ htmlFor, message, variations = [],  value, onChange }) => {

	return (
		<>
			<InputLabel htmlFor={htmlFor} value={message}/>
			<select value={value} onChange={onChange} id={htmlFor} className={styles.select}>
				<option value="">Select...</option>
				{variations.map((item) => (
					<option key={item.id} value={item.id}>
						{item.name || item.year_range}
					</option>
				))}
			</select>

		</>
	);
};

export default Select;
