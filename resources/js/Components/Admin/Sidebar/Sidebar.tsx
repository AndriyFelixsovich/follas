import { usePage, useForm, Link } from '@inertiajs/react';
import { FC, useState } from "react";
import SidebarItem from '@/Components/Admin/SidebarItem/SidebarItem';
import styles from './style.module.scss';

const Sidebar: FC = () => {

	return (
		<div className={styles.sidebar}>
			<SidebarItem />
		</div>
	);
};

export default Sidebar;
