import styles from './app.module.scss';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy;2023 Shubham. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          width={15}
          height={15}
          alt="Shubham Mishra"
          className={styles.icon}
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          alt="Shubham Mishra"
          className={styles.icon}
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          alt="Shubham Mishra"
          className={styles.icon}
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          alt="Shubham Mishra"
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default Footer;
