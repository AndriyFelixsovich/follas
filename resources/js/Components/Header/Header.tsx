import { FC } from 'react';
import { Link } from '@inertiajs/react';
import Container from '../_ui/Container/Container';
import Image from '../_ui/Image/Image';
import WishlistIcon from '../_ui/Icons/Wishlist';
import LoginIcon from '../_ui/Icons/Login';
import CartIcon from '../_ui/Icons/Cart';
import HeaderNav from '../HeaderNav/HeaderNav';
import Search from '../Search/Search';
import logo from '../../../img/follas_logo.jpg';
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
