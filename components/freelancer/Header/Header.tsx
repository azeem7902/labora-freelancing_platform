import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.welcome}>
        <h1 className={styles.title}>Welcome, John</h1>
        <p className={styles.subtitle}>Find and apply to freelance opportunities</p>
      </div>
      
      <div className={styles.actions}>
        <div className={styles.searchWrapper}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input 
            type="text" 
            placeholder="Search jobs, clients..." 
            className={styles.searchInput} 
          />
        </div>
        
        <div className={styles.icons}>
          <div style={{ display: 'flex', gap: '20px' }}>
            <div className={styles.iconBadge}>
              <i className="fa-regular fa-bell"></i>
              <span className={styles.dot}>4</span>
            </div>
            <div className={styles.iconBadge}>
              <i className="fa-regular fa-envelope"></i>
              <span className={styles.dot}>3</span>
            </div>
          </div>
          <div className={styles.profileCircle}>JD</div>
        </div>
      </div>
    </header>
  );
}