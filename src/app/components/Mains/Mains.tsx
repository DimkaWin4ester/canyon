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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAccessTokenLS().then((data: string) => setAccessToken(data));
    if (accessToken) {
      fetchConfiguration(accessToken).then((data) => {
        setConfiguration(data);
        setIsLoading(false);
      });
    }
  }, [accessToken]);

  // console.log(configuration, 'tut');
  return (
    <main className={styles.main}>
      {isLoading && <p>Loading...</p>}
      {isLoading ? null : configuration ? <Trade configuration={configuration} /> : <Login />}

    </main>
  );
}
