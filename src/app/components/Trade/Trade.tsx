import Image from 'next/image';
import styles from './Trade.module.css';
import { useEffect, useState } from 'react';

const courseCRYG = 333.73;
const courseDEL = 31.84;

export default function Trade({
  configuration,
}: {
  configuration: {
    id: number;
    name: string;
    key: string;
  };
}) {
  const [inputValue, setInputValue] = useState('');
  const [dollarCRYG, setDollarCRYG] = useState(0);
  const [dollarDEL, setDollarDEL] = useState(0);

  useEffect(() => {
    if (inputValue) {
      setDollarCRYG(Number(inputValue) * courseCRYG);
      setDollarDEL(Number(configuration.key) * Number(inputValue) * courseDEL);
    }
  }, [inputValue]);

  return (
    <div className={styles.trade}>
      <div className={styles.tabs}>
        <span>Swap</span>
        <span>Pools</span>
      </div>

      <div className={styles.sellbuy}>
        <div className={styles.sell}>
          <span>Вы продаете</span>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: '20px 0 26px 0',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Image src="cryg.svg" alt="logo" width={29} height={32} />
              <span className={styles.numbersSpan}>
                CRYG
              </span>
              <Image
                src="backwhite.svg"
                alt="backwhite"
                width={14}
                height={14}
              />
            </div>
            <input
              type="number"
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>CRYG</span>
            <span>~${dollarCRYG.toFixed(2)}</span>
          </div>
        </div>

        <div className={styles.separator} />

        <div className={styles.buy}>
          <span>Вы покупаете</span>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: '20px 0 26px 0',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Image src="del.svg" alt="logo" width={29} height={32} />
              <span
                style={{
                  fontWeight: 600,
                  fontSize: '26px',
                  lineHeight: '36px',
                  color: 'var(--color-font-white)',
                }}
              >
                DEL
              </span>
              <Image
                src="backwhite.svg"
                alt="backwhite"
                width={14}
                height={14}
              />
            </div>
            <span className={styles.numbersSpan}>
              {Number(configuration.key) * Number(inputValue)}
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>DEL</span>
            <span>
              ~${dollarDEL.toFixed(2)} (
              {(((dollarDEL - dollarCRYG) / dollarCRYG) * 100).toFixed(2) ===
              'NaN'
                ? 0
                : (((dollarDEL - dollarCRYG) / dollarCRYG) * 100).toFixed(2)}
              %)
            </span>
          </div>
        </div>
      </div>

      <div className={styles.price}>
        <Image src="attention.svg" alt="wallet" width={17} height={17} />
        <span>1 CRYG = {configuration.key} DEL</span>
        <span>(${(Number(configuration.key) * courseDEL).toFixed(2)})</span>
      </div>
      <button className={styles.button}>
        <Image
          src="solar_wallet-money-linear.svg"
          alt="wallet"
          width={22}
          height={22}
        />
        <span>Connect wallet</span>
      </button>
    </div>
  );
}
