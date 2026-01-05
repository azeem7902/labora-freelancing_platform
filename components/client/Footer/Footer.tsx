import styles from './Footer.module.css';

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={`${styles.footer} ${className}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3 className={styles.title}>Labora</h3>
            <p className={styles.description}>
              Building exceptional digital experiences for businesses worldwide.
            </p>
          </div>
          
          <div className={styles.grid}>
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Quick Links</h4>
              <ul className={styles.list}>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
              </ul>
            </div>
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Services</h4>
              <ul className={styles.list}>
                <li>Web Design</li>
                <li>Web Development</li>
                <li>App Development</li>
              </ul>
            </div>
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Contact Us</h4>
              <ul className={styles.list}>
                <li>Email: info@labora.com</li>
                <li>Phone: +1 (234) 567-890</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}