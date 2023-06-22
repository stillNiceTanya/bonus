import { InfoButton } from '../InfoButton';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>логотип</span>
      <InfoButton />
    </header>
  );
};
