import { FC } from 'react';
import { Link } from '@inertiajs/react';
import styles from './style.module.scss';

const HeaderNav: FC = () => {
  return (
	 <nav className={styles.nav}>
		 <ul>
			 <li><Link className={route().current('catalog.index') ? 'font-bond underline' : ''} href={route('catalog.index')}>Catalog</Link></li>
			 <li><Link className={route().current('blog.index') ? 'font-bond underline' : ''} href={route('blog.index')}>Blog</Link></li>
			 <li><Link className={route().current('about') ? 'font-bond underline' : ''} href={route('about')}>About Us</Link></li>
			 <li><Link className={route().current('contacts.index') ? 'font-bond underline' : ''} href={route('contacts.index')}>Contact</Link></li>
		 </ul>
	 </nav>
  );
}

export default HeaderNav;
