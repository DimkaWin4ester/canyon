'use client';

import { fetchLogin } from '@/app/utils/fetchLogin';
import { FormEvent, useEffect, useState } from 'react';
import styles from './Login.module.css';
import { fetchCsrfToken } from '@/app/utils/fetchCsrfToken';

export default function Login() {
  const [csrfToken, setCsrfToken] = useState<string | null>(null);

  useEffect(() => {
    fetchCsrfToken().then((data) => setCsrfToken(data));
  }, []);

  function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    fetchLogin(email as string, password as string, csrfToken as string).then(
      () => (window.location.href = '/')
    );
    e.currentTarget.reset();
  }

  return (
    <form className={styles.form} onSubmit={submitForm}>
      <label>Введите email</label>
      <input name="email" type="email" required />
      <label>Введите пароль</label>
      <input name="password" type="password" required />
      <button className={styles.button}>Войти</button>
    </form>
  );
}
