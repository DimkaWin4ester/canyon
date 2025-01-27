import Image from 'next/image';
import styles from './Trade.module.css';

const courseCRYG = 333.73;
const courseDEL = 2.154704;

export default function Trade({
  configuration,
}: {
  configuration: {
    id: number;
    name: string;
    key: string;
  };
}) {
  return (
    <div className={styles.trade}>
      <div className={styles.tabs}>
        <span>Swap</span>
        <span>Pools</span>
      </div>

      <div className={styles.sellbuy}>
        <div className={styles.sell}>
          <span>Вы продаете</span>
          
          <div>
            <div>
              <span>CRYG</span>
              <span>0.00000000</span>
              <input />
            </div>
          </div>
          <div>
            <span>CRYG</span>
            <span>~$333.73</span>
          </div>
        </div>

        <div className={styles.buy}>
          <span>Вы покупаете</span>
          <div></div>
          <div>
            <span>DEL</span>
            <span>0.00000000</span>
          </div>
        </div>
      </div>

      <div className={styles.price}>
        <Image src="attention.svg" alt="wallet" width={17} height={17} />
        <span>1 CRYG = {configuration.key} DEL</span>
        <span>($331.42)</span>
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
