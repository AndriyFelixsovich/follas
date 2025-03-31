import Header from '@/Components/Header/Header';
import Footer from '@/Components/Footer/Footer';
import { ReactNode } from 'react';

interface MainLayoutProps {
	children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
			<>
				<Header/>
					<main>{children}</main>
				<Footer />
			</>
    );
}
