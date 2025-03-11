import {Link} from "@inertiajs/react";
import Header from '@/Components/Header/Header';
import Footer from '@/Components/Footer/Footer';
import Container from '@/Components/_ui/Container/Container';
import styles from './style.module.scss';

const NotFound = () => {
  return (
    <>
      <Header/>
        <main className={styles.page_404}>
          <Container>
            <h1>Page not found</h1>
            <Link href="/">Go to home</Link>
          </Container>
        </main>
      <Footer/>
    </>
  );
}

export default NotFound;
