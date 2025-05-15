import { Link } from "@inertiajs/react";
import Header from '@/Components/Header/Header';
import Footer from '@/Components/Footer/Footer';
import Container from '@/Components/_ui/Container/Container';
import logo from '../../../img/follas_logo.svg';
import styles from './style.module.scss';
import Image from "@/Components/_ui/Image/Image";

const NotFound = () => {
  return (
    <>
      <Header/>
        <main className={styles.page_404}>
          <Container>
	          <Link href="/">
		          <Image src={logo} alt={logo} width={'200'} height={'200'} />
	          </Link>
            <h1>Oops, page not found &#128565;</h1>
            <Link href="/">Go home</Link>
          </Container>
        </main>
      <Footer/>
    </>
  );
}

export default NotFound;
