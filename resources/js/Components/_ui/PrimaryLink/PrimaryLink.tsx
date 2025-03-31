import React, { FC } from 'react';
import { Link } from '@inertiajs/react';
import styles from './style.module.scss';

interface ILink {
	children: React.ReactNode;
	href: string;
}

const PrimaryLink: FC<ILink> = ({ children, href }) => {
	return (
		<Link href={href} className={styles.link}>{children}</Link>
	);
}

export default PrimaryLink;
