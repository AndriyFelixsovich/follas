import { Head, usePage, useForm, Link } from '@inertiajs/react';
import { FC } from "react";
import Image from '@/Components/_ui/Image/Image';
import logo from '../../../../img/follas_logo.svg';
import styles from './style.module.scss';

const TopBar: FC = () => {
	return (
		<div className={styles.topbar}>
			<div className={styles.logo}>
				<Link href='/'>
					<Image src={logo} alt={logo} width={'100'} height={'100'} />
				</Link>
			</div>
			<div className={styles.info}>
				Username
				logout
			</div>
		</div>
	);
};

export default TopBar;
