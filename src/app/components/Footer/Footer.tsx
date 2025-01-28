'use client';
import Link from 'next/link';
import styles from './Footer.module.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer className={styles.footer}>
      {!isMobile && (
        <>
          <p>Copyright. @ 2023 Corp Name Все права защищены</p>
          <div className={styles.links}>
            <Link href="#">Пользовательское соглашение</Link>
            <div className={styles.separator} />
            <Link href="#">Политика конфиденциальности</Link>
          </div>
        </>
      )}

      {isMobile && (
        <div className={styles.footerMobile}>
          <div>
            <Link href="#">
              <Image src="/circle.svg" alt="active" width={6} height={6} className={styles.active}/>
              <Image
                src="/ph_arrows-clockwise-fill.svg"
                alt="trade"
                width={32}
                height={32}
              />
            </Link>
          </div>
          <div>
            <Link href="#">
              <Image
                src="/mdi_question-box-multiple.svg"
                alt="box"
                width={32}
                height={32}
              />
            </Link>
          </div>
          <div>
            <Link href="#">
              <Image
                src="/basil_document-solid.svg"
                alt="document"
                width={32}
                height={32}
              />
            </Link>
          </div>
          <div>
            <Link href="#">
              <Image
                src="/ic_round-question-answer.svg"
                alt="questions"
                width={32}
                height={32}
              />
            </Link>
          </div>
          <div>
            <Link href="#">
              <Image
                src="/dashicons_admin-site-alt3.svg"
                alt="earth"
                width={32}
                height={32}
              />
            </Link>
          </div>
        </div>
      )}
    </footer>
  );
}
