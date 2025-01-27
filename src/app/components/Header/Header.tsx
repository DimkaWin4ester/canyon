import Image from 'next/image';
import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.titleLinks}>
        <div className={styles.title}>
          <Image src="/logo.svg" alt="logo" width={32} height={32} />
          <h1>Canyon Swap</h1>
        </div>

        <div className={styles.links}>
          <Link href="#">Главная</Link>
          <Link href="#">Лендинг</Link>
          <Link href="#">FAQ</Link>
          <Link href="#"> Обратная связь</Link>
        </div>
      </div>

      <div className={styles.buttons}>
        <div>
        <Image src="/earth.svg" alt="language" width={15} height={15} />
        <span>RU</span>
        <Image src="/back.svg" alt="language-switch" width={15} height={15} />
        </div>
        <div>
          <Image src="/logo2.svg" alt="logo2" width={18} height={18} />
          <span>Decimal</span>
        </div>
        <div>
          <Image src="/header-wallet.svg" alt="wallet" width={16} height={16} />
          <span>Connect wallet</span>
        </div>
      </div>

    </header>
  );
}
