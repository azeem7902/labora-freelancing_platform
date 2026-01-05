import React from 'react';
import styles from './Header.module.css';
import FontAwesomeIcon from '@/corecomponents/FontAwesomeIcon';
import { SearchIcon, BellIcon, BarsIcon } from '../../../icons';

interface HeaderProps {
  onToggleSidebar: () => void;
  isProfileOpen: boolean;
  onToggleProfile: () => void;
}

const Header = ({ onToggleSidebar, isProfileOpen, onToggleProfile }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <button className={styles.hamburger} onClick={onToggleSidebar}>
        <FontAwesomeIcon icon={BarsIcon} />
      </button>

      <div className={styles.welcome}>
        <h2 className={styles.welcomeTitle}>Welcome, Jane Smith</h2>
        <p className={styles.welcomeSub}>Manage hires for Tech Innovations Ltd.</p>
      </div>

      <div className={styles.actions}>
        <div className={styles.searchBar}>
          <FontAwesomeIcon icon={SearchIcon} />
          <input type="text" placeholder="Search freelancers..." />
        </div>
        <FontAwesomeIcon icon={BellIcon} />
        <div className={styles.profileContainer} onClick={onToggleProfile}>
          <div className={styles.profileIcon}>JS</div>
          {isProfileOpen && (
            <div className={styles.profileDropdown}>
              <ul>
                <li>Profile</li>
                <li>Settings</li>
                <li>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;