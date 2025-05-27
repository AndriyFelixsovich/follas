import { usePage, useForm, Link } from '@inertiajs/react';
import { FC, useState } from "react";
import SidebarItem from '@/Components/Admin/SidebarItem/SidebarItem';
import styles from './style.module.scss';

const Sidebar: FC = () => {

	const sidebarLinks = [
		{ id: 1, title: 'Pages', route: '/admin/pages' },
		{ id: 2, title: 'Categories', route: '/admin/categories'},
		{ id: 3, title: 'Products', route: '/admin/products' },
	]

	return (
		<div className={styles.sidebar}>
			{
				sidebarLinks.map((link, index) => (
					<SidebarItem
						key={link.id + index}
						title={link.title}
						route={link.route}
					/>
				))
			}
		</div>
	);
};

export default Sidebar;
