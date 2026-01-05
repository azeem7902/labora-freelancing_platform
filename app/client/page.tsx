'use client'; // Enable client-side state

import React, { useState } from 'react';
import Sidebar from '@/components/client/Sidebar/Sidebar';
import Header from '@/components/client/Header/Header';
import Footer from '@/components/client/Footer/Footer';
import styles from './ClientPage.module.css';

const StatCard = ({ count, label, sub }: { count: string; label: string; sub: string }) => (
  <div className={styles.statCard}>
    <div className={styles.statIcon}></div>
    <h3 className={styles.statCount}>{count}</h3>
    <p className={styles.statSub}>{sub}</p>
    <p className={styles.statLabel}>{label}</p>
  </div>
);

const JobCard = ({ title, role, budget, status, date }: any) => (
  <div className={styles.jobCard}>
    <div className={styles.jobHeader}>
      <span className={styles.jobTitle}>{title}</span>
      <span className={styles.jobBudget}>{budget}</span>
    </div>
    <h4 className={styles.jobRole}>{role}</h4>
    <p className={styles.jobStatus}>Status: {status}</p>
    <div className={styles.jobMeta}>
      <span>{date}</span>
      <span>Remote</span>
    </div>
    <div className={styles.jobActions}>
      <button className={styles.btnView}>View</button>
      <button className={styles.btnManage}>Manage</button>
    </div>
  </div>
);

const ServiceCard = ({ title, desc }: any) => (
  <div className={styles.serviceCard}>
    <div className={styles.serviceIcon}></div>
    <h4 className={styles.serviceTitle}>{title}</h4>
    <p className={styles.serviceDesc}>{desc}</p>
    <button className={styles.btnHire}>Hire Now</button>
  </div>
);

export default function ClientPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  return (
    <div className={styles.layout}>
      {/* Mobile backdrop - only visible when sidebar is open */}
      {isSidebarOpen && (
        <div className={styles.backdrop} onClick={closeSidebar}></div>
      )}

      {/* Sidebar - fixed on mobile, static on desktop */}
      <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ''}`}>
        <Sidebar />
      </aside>

      {/* Main content column - everything except sidebar and footer */}
      <div className={styles.contentColumn}>
        <Header 
          onToggleSidebar={toggleSidebar} 
          isProfileOpen={isProfileOpen} 
          onToggleProfile={toggleProfile}
        />
        
        <main className={styles.pageContent}>
          <section className={styles.hero}>
            <h1 className={styles.heroTitle}>Welcome back, Jane Smith!</h1>
            <p className={styles.heroText}>
              Manage your freelance hires and discover top talent for Tech Innovations Ltd. Track budgets and projects effortlessly.
            </p>
            <button className={styles.btnPostJob}>Post a New Job</button>
          </section>

          <section className={styles.statsSection}>
            <div className={styles.statsGrid}>
              <StatCard count="12" sub="Active Hires" label="" />
              <StatCard count="$25,400" sub="Total Budget Spent" label="" />
              <StatCard count="28" sub="Total Contracts" label="" />
            </div>
          </section>

          <section className={styles.jobsSection}>
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Your Job Listings</h3>
              <a href="#" className={styles.linkViewAll}>View All</a>
            </div>
            <div className={styles.jobsGrid}>
              <JobCard 
                title="Web Development" 
                role="Senior React Developer Needed" 
                budget="$2,500" 
                status="Open for hires" 
                date="Posted 2 days ago" 
              />
              <JobCard 
                title="UI/UX Design" 
                role="Mobile App UI Redesign" 
                budget="$1,800" 
                status="In Progress" 
                date="Due in 2 weeks" 
              />
              <JobCard 
                title="Data Science" 
                role="Analytics Dashboard Build" 
                budget="$3,200" 
                status="Review Pending" 
                date="Completed Jan 01" 
              />
            </div>
          </section>

          <section className={styles.servicesSection}>
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Services You Can Hire</h3>
              <a href="#" className={styles.linkViewAll}>View All Services</a>
            </div>
            <div className={styles.servicesGrid}>
              <ServiceCard 
                title="Web Development" 
                desc="Get custom websites and web apps built by expert developers. Scalable and secure." 
              />
              <ServiceCard 
                title="App Development" 
                desc="Launch native or cross-platform mobile apps. From concept to app store." 
              />
              <ServiceCard 
                title="UI/UX Design" 
                desc="Create intuitive and engaging user interfaces. User research and wireframing." 
              />
              <ServiceCard 
                title="Data Analysis" 
                desc="Unlock insights from your data with advanced analytics and visualization." 
              />
            </div>
          </section>
        </main>
      </div>

      {/* Footer is now outside contentColumn - spans full width */}
      <Footer className={styles.footer} />
    </div>
  );
}