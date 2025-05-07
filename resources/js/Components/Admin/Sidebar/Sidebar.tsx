import { Head, usePage, useForm, Link } from '@inertiajs/react';
import { FC } from "react";
import Image from '@/Components/_ui/Image/Image';
import ChevronRight from '@/Components/_ui/Icons/ChevronRight';
import logo from '../../../img/follas_logo.svg';
import styles from './style.module.scss';

const Sidebar: FC = () => {
	return (
		<div className={styles.sidebar}>
			<h2>Sidebar</h2>
		</div>
	);
};

export default Sidebar;
