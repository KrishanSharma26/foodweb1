import { useRouter } from 'next/router';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { wrapper } from '../redux/store/store';
import '../styles/globals.css';
const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  const showHeaderFooter = router.pathname === '/auth' ? false : true;
  return (
    <>
      {showHeaderFooter && <Navbar />}
      <Component {...pageProps} />
      {showHeaderFooter && <Footer />}
    </>
  );
};

export default wrapper.withRedux(MyApp);
