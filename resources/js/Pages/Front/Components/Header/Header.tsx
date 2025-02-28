import { FC } from 'react';
import { Link } from '@inertiajs/react';
import Container from '@/Pages/Front/_ui/Container/Container';
import Image from '@/Pages/Front/_ui/Image/Image';
import WishlistIcon from '@/Pages/Front/_ui/Icons/Wishlist';
import LoginIcon from '@/Pages/Front/_ui/Icons/Login';
import CartIcon from '@/Pages/Front/_ui/Icons/Cart';
import HeaderNav from '@/Pages/Front/Components/HeaderNav/HeaderNav';
import Search from '@/Pages/Front/Components/Search/Search';
import logo from '/resources/img/follas_logo.jpg';
import styles from './style.module.scss';

const Header: FC = () => {
  return (
    <header>
      <Container>
				<div className={styles.inner}>
				<Link href='/'>
					<Image src={logo} alt={logo} width={'80'} height={'80'} />
				</Link>
						<HeaderNav />
						<div className={styles.col_2}>
							<Link href="#">
								<WishlistIcon width="30" height="30" />
							</Link>
							<Link href="#">
								<CartIcon width="30" height="30" />
							</Link>
							<Link href="/profile">
								<LoginIcon width="30" height="30" />
							</Link>
						</div>
					<Search />
				</div>
      </Container>
    </header>
  );
}

export default Header;
