import Header from '@/Pages/Front/Components/Header/Header';
import Footer from '@/Pages/Front/Components/Footer/Footer';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function MainLayout({ header, children }) {
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
