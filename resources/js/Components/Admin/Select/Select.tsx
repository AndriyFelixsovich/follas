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
				<InputLabel htmlFor={htmlFor} value={message} />
				<select name={htmlFor} id={htmlFor} className={styles.select} value={value} onChange={onChange}>
					<option value="">Select option</option>
					{variations.map(option => (
						<option key={option.id} value={option.slug}>
							{option.name || option.year_range}
						</option>
					))}
				</select>
			</>
	);
};

export default Select;
