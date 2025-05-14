import { FC } from 'react';
import { Link, usePage } from '@inertiajs/react';
import styles from './style.module.scss';

const HeaderNav: FC = () => {

  return (
	 <nav className={styles.nav}>
		 <ul>
			 <li><Link href={route('catalog.index')}>Catalog</Link></li>
			 <li><Link href={route('blog.index')}>Blog</Link></li>
			 <li><Link href={route('about')}>About Us</Link></li>
			 <li><Link href={route('contacts.index')}>Contact</Link></li>
		 </ul>
	 </nav>
  );
}

export default HeaderNav;
