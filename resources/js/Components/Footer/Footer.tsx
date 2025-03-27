import { FC } from 'react';
import { Link } from '@inertiajs/react';
import Container from '@/Components/_ui/Container/Container';
import Image from '@/Components/_ui/Image/Image';
import logo from '../../../img/follas_logo.svg';
import styles from './style.module.scss';

const Footer: FC = () => {
  return (
    <footer>
      <Container>
				<div className={styles.inner}>
					<Link href='/'>
						<Image src={logo} alt={logo} width={'80'} height={'80'} />
					</Link>
					<h3>© 2025 Follas. All rights reserved.</h3>
				</div>
      </Container>
    </footer>
  );
}

export default Footer;
