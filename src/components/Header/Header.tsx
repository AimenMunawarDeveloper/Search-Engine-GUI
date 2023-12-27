import React, { FC } from 'react';
import '../../App.css'; 
import styles from './Header.module.css';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <div className={styles.Header} data-testid="Header">
    <div className={styles.LogoContainer}>
      <h1 className={styles.Logo}>Gaggle</h1>
    </div>
  </div>
);

export default Header;
