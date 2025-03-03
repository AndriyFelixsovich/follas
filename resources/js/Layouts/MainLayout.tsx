import Header from '@/Components/Header/Header';
import Footer from '@/Components/Footer/Footer';
import { ReactNode } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

interface MainLayoutProps {
	header?: ReactNode;
	children: ReactNode;
}

export default function MainLayout({ header, children }: MainLayoutProps) {
   /* const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);*/

    return (
			<>
				<Header/>
					<main>{children}</main>
				<Footer />
			</>
    );
}
