import Footer from '@/app/components/Footer/Footer';
import styles from './page.module.css';
import Header from '@/app/components/Header/Header';
import Mains from '@/app/components/Mains/Mains';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Mains />
      <Footer />
    </div>
  );
}
