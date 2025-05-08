import { Head, usePage, useForm, Link } from '@inertiajs/react';
import { FC } from "react";
import Image from '@/Components/_ui/Image/Image';
import PrimaryButton from '@/Components/_ui/PrimaryButton/PrimaryButton';
import logo from '../../../../img/follas_logo.svg';
import styles from './style.module.scss';

const TopBar: FC = () => {

	const logout = () => {
		console.log('log')
	}

	return (
		<div className={styles.topbar}>
			<div className={styles.logo}>
				<Link href="/">
					<Image src={logo} alt={logo} width={'100'} height={'100'} />
				</Link>
			</div>
			<div className={styles.info}>
				<ul className={styles.list}>
					<li>Username</li>
					<li><a href="/" target="_blank">Store Follas</a></li>
					<li><PrimaryButton onClick={logout}>Log out</PrimaryButton></li>
				</ul>
			</div>
		</div>
	);
};

export default TopBar;
