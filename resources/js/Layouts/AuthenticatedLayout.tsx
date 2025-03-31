import React from 'react';
import styles from './guest_layout.module.scss';
import logo from '../../img/follas_logo.svg';
import PrimaryLink from '@/Components/_ui/PrimaryLink/PrimaryLink';
import Container from '@/Components/_ui/Container/Container';
import Image from '@/Components/_ui/Image/Image';
import { usePage } from '@inertiajs/react';

interface AuthenticatedLayoutProps {
	children: React.ReactNode;
}

const AuthenticatedLayout: React.FC<AuthenticatedLayoutProps> = ({ children }) => {
	const { auth } = usePage();
	const user = auth?.user;

	return (
		<div className={styles.authenticated_layout_wrp}>
			<header>
				<Container>
					<div className={styles.inner}>
						<PrimaryLink href="/">
							<Image src={logo} alt={logo} width={'100'} height={'100'} />
						</PrimaryLink>

						<h2>Dashboard</h2>

						<div className={styles.controls}>
							<PrimaryLink href={route('dashboard')}>Dashboard</PrimaryLink>
							<PrimaryLink href={route('profile.edit')}>Profile</PrimaryLink>
							<PrimaryLink href={route('logout')} method="post">Log Out</PrimaryLink>
						</div>
					</div>
				</Container>
			</header>

			<main className={styles.main}>{children}</main>

		</div>
	);
};

export default AuthenticatedLayout;
