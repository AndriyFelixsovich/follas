import { FC } from 'react';
import { Link } from '@inertiajs/react';
import Container from '@/Components/_ui/Container/Container';
import Image from '@/Components/_ui/Image/Image';
import WishlistIcon from '@/Components/_ui/Icons/WishlistIcon';
import LoginIcon from '@/Components/_ui/Icons/LoginIcon';
import CartIcon from '@/Components/_ui/Icons/CartIcon';
import HeaderNav from '@/Components/HeaderNav/HeaderNav';
import Search from '@/Components/Search/Search';
import logo from '../../../img/follas_logo.svg';
import styles from './style.module.scss';

const Header: FC = () => {
	return (
    <header>
      <Container>
				<div className={styles.inner}>
				<Link href='/'>
					<Image src={logo} alt={logo} width={'100'} height={'100'} />
				</Link>
						<HeaderNav />
					<Search />
						<div className={styles.col_2}>
							<Link href="/wishlist">
								<WishlistIcon width="30" height="30" fill="#2e3b4c" />
							</Link>
							<Link href="/shopping-cart">
								<CartIcon width="30" height="30" stroke="#2e3b4c" fill="transparent" />
							</Link>
							<Link href="/profile">
								<LoginIcon width="30" height="30" fill="#2e3b4c" />
							</Link>
						</div>
				</div>
      </Container>
    </header>
  );
}

export default Header;
