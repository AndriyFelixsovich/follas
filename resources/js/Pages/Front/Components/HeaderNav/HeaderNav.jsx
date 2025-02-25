import { Link } from '@inertiajs/react';
import styles from './style.module.scss';

const HeaderNav = () => {
  return (
	 <nav className={styles.nav}>
		 <ul>
			 <li><Link href="{{ route('blog') }}">Blog</Link></li>
			 <li><Link href="{{ route('about') }}">About Us</Link></li>
			 <li><Link href="{{ route('contact') }}">Contact</Link></li>
		 </ul>
	 </nav>
  );
}

export default HeaderNav;
