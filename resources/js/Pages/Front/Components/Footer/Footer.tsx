import { FC } from 'react';
import { Link } from '@inertiajs/react';
import Container from '@/Pages/Front/_ui/Container/Container';
import Image from '@/Pages/Front/_ui/Image/Image';
import logo from '/resources/img/follas_logo.jpg';
import styles from './style.module.scss';

const Footer: FC = () => {
  return (
    <footer>
      <Container>
				<div className={styles.inner}>
					<Link href='/'>
						<Image src={logo} alt={logo} width={'80'} height={'80'} />
					</Link>
					<h2>© Powered by Follos</h2>
				</div>
      </Container>
    </footer>
  );
}

export default Footer;
