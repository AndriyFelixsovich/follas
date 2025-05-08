import { Head, usePage, useForm, Link } from '@inertiajs/react';
import {FC, useState} from "react";
import ChevronDown from '@/Components/_ui/Icons/ChevronDown';
import styles from './style.module.scss';


const SidebarItem: FC<ISidebarItem> = ({...props}) => {
	const [open, setOpen] = useState(false)

	const toggleContent  = () => {
		setOpen(prevState => !prevState);
	}

	return (
		<div className={styles.sidebar_item}>
			<div className={styles.button} onClick={toggleContent }>
				Sidebar
				<ChevronDown width={25} height={25} className={`${styles.button_icon} ${open ? styles.open : ''}`} />
			</div>
			<div className={`${styles.content} ${open ? styles.open : ''}`}>
				<div className={styles.content_bl}>content</div>
			</div>
		</div>
	);
};

export default SidebarItem;
