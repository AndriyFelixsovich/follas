import { Link } from '@inertiajs/react';
import styles from './style.module.scss';

const HeaderNav = () => {
  return (
	 <nav className={styles.nav}>
		 <ul>
			 <li><Link href="/blog">Blog</Link></li>
			 <li><Link href="/about">About Us</Link></li>
			 <li><Link href="/contacts">Contact</Link></li>
		 </ul>
	 </nav>
  );
}

export default HeaderNav;
