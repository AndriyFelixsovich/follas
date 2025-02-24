import { Link } from '@inertiajs/react';
import Container from '@/Pages/Front/_ui/Container/Container';
import Image from '@/Pages/Front/_ui/Image/Image';
import Wishlist from '@/Pages/Front/_ui/Icons/Wishlist';
import Login from '@/Pages/Front/_ui/Icons/Login';
import Cart from '@/Pages/Front/_ui/Icons/Cart';
import logo from '/resources/img/follas_logo.jpg';
import styles from './style.module.scss';

const Header = () => {
  return (
    <header>
      <Container>
				<div className={styles.inner}>
				<Link href='/'>
					<Image src={logo} alt={logo} />
				</Link>
						<nav>
							<ul>
								<li><Link href="{{ route('blog') }}">Blog</Link></li>
								<li><Link href="{{ route('about') }}">About Us</Link></li>
								<li><Link href="{{ route('contact') }}">Contact</Link></li>
							</ul>
						</nav>
						<div className={styles.col_2}>
							<Link href="#">
								<Wishlist width="30" height="30" />
							</Link>
							<Link href="#">
								<Cart width="30" height="30" />
							</Link>
							<Link href="#">
								<Login width="30" height="30" />
							</Link>
						</div>
				</div>
      </Container>
    </header>
  );
}

export default Header;
