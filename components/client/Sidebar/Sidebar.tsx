import React from 'react';
import styles from './Sidebar.module.css';
import FontAwesomeIcon from '@/corecomponents/FontAwesomeIcon';
import { HomeIcon, DashboardIcon, UsersIcon, FileIcon } from '../../../icons';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <div style={{width: 30, height: 30, background: '#fff', borderRadius: 4}}></div>
        LaboraClient
      </div>

      <div className={styles.sectionTitle}>General</div>
      <div className={`${styles.navItem} ${styles.active}`}>
        <FontAwesomeIcon icon={HomeIcon} /> Home
      </div>
      <div className={styles.navItem}>
        <FontAwesomeIcon icon={DashboardIcon} /> Dashboard
      </div>
      <div className={styles.navItem}>
        <FontAwesomeIcon icon={FileIcon} /> Post Jobs
        <span className={styles.badge}>5</span>
      </div>

      <div className={styles.sectionTitle}>My Hires</div>
      <div className={styles.navItem}>
        <FontAwesomeIcon icon={UsersIcon} /> Hired Freelancers
        <span className={styles.badge}>12</span>
      </div>
      <div className={styles.navItem}>
        <FontAwesomeIcon icon={FileIcon} /> Contracts
        <span className={styles.badge}>8</span>
      </div>
      
      <div className={styles.sectionTitle}>Account</div>
      <div className={styles.navItem}>Payments</div>
      <div className={styles.navItem}>Settings</div>
    </aside>
  );
};

export default Sidebar;