import { Head, usePage, useForm, Link } from '@inertiajs/react';
import { FC } from "react";
import styles from './style.module.scss';

const Controls: FC = () => {

	return (
		<ul className={styles.wrap}>
			<li>All products</li>
			<li>Add product</li>
		</ul>
	);
};

export default Controls;
