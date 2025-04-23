import { FC } from 'react';
import { Link } from '@inertiajs/react';
import Container from '@/Components/_ui/Container/Container';
import Image from '@/Components/_ui/Image/Image';
import WishlistIcon from '@/Components/_ui/Icons/WishlistIcon';
import LoginIcon from '@/Components/_ui/Icons/LoginIcon';
import CartIcon from '@/Components/_ui/Icons/CartIcon';
import CartHeaderQuantity from '@/Components/_ui/CartHeaderQuantity/CartHeaderQuantity';
import WishlistHeaderQuantity from "@/Components/_ui/WishlistHeaderQuantity/WishlistHeaderQuantity";
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
							<Link href={route('wishlist.index')}>
								<div className={styles.quantity_wrp}>
									<WishlistHeaderQuantity />
									<WishlistIcon width="30" height="30" fill="#2e3b4c" />
								</div>
							</Link>
							<Link href={route('cart.index')}>
								<div className={styles.quantity_wrp}>
									<CartHeaderQuantity />
									<CartIcon width="30" height="30" stroke="#2e3b4c" fill="transparent" />
								</div>
							</Link>
							<Link href={route('login')} className={styles.login}>
								<LoginIcon width="30" height="30" fill="#2e3b4c"/>
								<span>userName</span>
							</Link>

						</div>
				</div>
      </Container>
    </header>
  );
}

export default Header;
