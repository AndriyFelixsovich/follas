import { Head, usePage, useForm, Link } from '@inertiajs/react';
import { FC } from "react";
import Image from '@/Components/_ui/Image/Image';
import ChevronDown from '@/Components/_ui/Icons/ChevronDown';
import styles from './style.module.scss';

const Sidebar: FC = () => {
	return (
		<div className={styles.sidebar}>
			<h2>Sidebar</h2>
		</div>
	);
};

export default Sidebar;
