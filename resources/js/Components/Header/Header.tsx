import { FC } from 'react';
import { Link } from '@inertiajs/react';
import Container from '@/Components/_ui/Container/Container';
import Image from '@/Components/_ui/Image/Image';
import WishlistIcon from '@/Components/_ui/Icons/WishlistIcon';
import LoginIcon from '@/Components/_ui/Icons/LoginIcon';
import CartIcon from '@/Components/_ui/Icons/CartIcon';
import HeaderNav from '@/Components/HeaderNav/HeaderNav';
import Search from '@/Components/Search/Search';
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
					<Search />
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
				</div>
      </Container>
    </header>
  );
}

export default Header;
