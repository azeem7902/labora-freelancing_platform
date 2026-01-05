import styles from './Sidebar.module.css';

export default function Sidebar() {
  const menuItems = {
    general: [
      { name: 'Home', icon: 'fa-house', active: true },
      { name: 'Dashboard', icon: 'fa-chart-line' },
      { name: 'Find Jobs', icon: 'fa-briefcase', badge: 24 },
    ],
    work: [
      { name: 'My Projects', icon: 'fa-file-lines', badge: 8 },
      { name: 'Proposals', icon: 'fa-paper-plane', badge: 12 },
      { name: 'Messages', icon: 'fa-comments', badge: 5 },
    ],
    account: [
      { name: 'Earnings', icon: 'fa-wallet' },
      { name: 'Reviews', icon: 'fa-star' },
      { name: 'Settings', icon: 'fa-gear' },
    ]
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoSection}>
        <div className={styles.logoIcon}><i className="fa-solid fa-handshake"></i></div>
        <span className={styles.logoText}>Labora</span>
      </div>

      {/* Added 'no-scrollbar' class here */}
      <div className={`${styles.navScroll} no-scrollbar`}>
        {Object.entries(menuItems).map(([key, items]) => (
          <div key={key} className="mb-8">
            <p className={styles.sectionTitle}>{key}</p>
            <nav className="space-y-1">
              {items.map((item) => (
                <a key={item.name} href="#" className={`${styles.navLink} ${item.active ? styles.active : ''}`}>
                  <div className="flex items-center gap-4">
                    <i className={`fa-solid ${item.icon} w-5 text-center text-base`}></i>
                    {item.name}
                  </div>
                  {item.badge && <span className={styles.badge}>{item.badge}</span>}
                </a>
              ))}
            </nav>
          </div>
        ))}
      </div>
    </aside>
  );
}