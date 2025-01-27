import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <p>Copyright. @ 2023 Corp Name Все права защищены</p>
        <div className={styles.links}>
          <Link href="#">Пользовательское соглашение</Link>
          <div className={styles.separator} />
          <Link href="#">Политика конфиденциальности</Link>
        </div>
      </footer>
  )
}
