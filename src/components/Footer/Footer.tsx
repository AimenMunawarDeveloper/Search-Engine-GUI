import React, { FC } from 'react';
import styles from './Footer.module.css';

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <div className={styles.Footer} data-testid="Footer">
    <div className={styles.FooterContent}>
      <div className={styles.FooterText}>
        <p>&copy; 2023 Gaggle. All rights reserved.</p>
      </div>
    </div>
  </div>
);

export default Footer;
