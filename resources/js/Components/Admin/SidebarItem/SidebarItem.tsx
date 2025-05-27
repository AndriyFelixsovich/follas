import { Head, usePage, useForm, Link } from '@inertiajs/react';
import {FC, useState} from "react";
import styles from './style.module.scss';

interface ISidebarItemProps {
	title: string;
	route: string;
}
const SidebarItem: FC<ISidebarItemProps> = ({title, route}) => {

	return (
		<Link href={route} className={styles.sidebar_item}>
			<div className={styles.button}>
				{title}
			</div>
		</Link>
	);
};

export default SidebarItem;
