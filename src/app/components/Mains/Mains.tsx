'use client';

import { useEffect, useState } from 'react';
import styles from './Mains.module.css';
import Login from '../Login/Login';
import Trade from '../Trade/Trade';
import { checkAccessTokenLS } from '@/app/utils/checkAccessTokenLS';
import { fetchConfiguration } from '@/app/utils/fetchConfiguration';

export default function Mains() {
  const [accessToken, setAccessToken] = useState('');
  const [configuration, setConfiguration] = useState(null);

  useEffect(() => {
    checkAccessTokenLS().then((data: string) => setAccessToken(data));
    if (accessToken) {
      fetchConfiguration(accessToken).then((data) => {
        setConfiguration(data);
      });
    }
  }, [accessToken]);

  return (
    <main className={styles.main}>
      { configuration ? <Trade configuration={configuration} /> : <Login />}

    </main>
  );
}
