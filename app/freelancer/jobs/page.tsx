'use client';

import React, { useState } from 'react';
import { Search, Bell, Mail, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Sidebar from '@/components/freelancer/Sidebar/Sidebar';
import Footer from '@/components/freelancer/Footer/Footer';
import styles from './job.module.css';

const JOBS_DATA = [
  {
    id: 1,
    category: 'Web Development',
    budget: '$2,500',
    title: 'E-commerce Website',
    description: 'Build a responsive platform with React.js and Node.js.',
    posted: '2h ago',
    type: 'Fixed Price',
    tags: ['React', 'Node.js', 'E-commerce'],
  },
  {
    id: 2,
    category: 'Mobile Development',
    budget: '$4,000',
    title: 'Fitness Tracking App',
    description: 'Develop a cross-platform mobile app using Flutter.',
    posted: '5h ago',
    type: 'Fixed Price',
    tags: ['Flutter', 'Dart', 'Firebase'],
  },
  {
    id: 3,
    category: 'UI/UX Design',
    budget: '$1,800',
    title: 'SaaS Dashboard Redesign',
    description: 'Modern redesign of analytics dashboard with Figma.',
    posted: '1d ago',
    type: 'Hourly',
    tags: ['Figma', 'UI/UX', 'Design Systems'],
  },
  {
    id: 4,
    category: 'Web Development',
    budget: '$3,200',
    title: 'Fintech Dashboard',
    description: 'Secure financial dashboard with real-time data.',
    posted: '2d ago',
    type: 'Fixed Price',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    id: 5,
    category: 'Data Science',
    budget: '$2,800',
    title: 'ML Model Deployment',
    description: 'Deploy machine learning model to production.',
    posted: '3d ago',
    type: 'Hourly',
    tags: ['Python', 'TensorFlow', 'AWS'],
  },
  {
    id: 6,
    category: 'Graphic Design',
    budget: '$1,200',
    title: 'Brand Identity Package',
    description: 'Complete branding kit including logo and guidelines.',
    posted: '4d ago',
    type: 'Fixed Price',
    tags: ['Illustrator', 'Photoshop', 'Branding'],
  },
];

export default function FindJobsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className={styles.layoutWrapper}>
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className={styles.sidebarOverlay} onClick={() => setIsSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed md:static inset-y-0 left-0 z-50 transform transition-transform duration-300 md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Mobile Close Button */}
        <div className="md:hidden flex justify-end p-4 bg-[#27a963]">
          <button onClick={toggleSidebar} className="text-white hover:opacity-80">
            <X size={28} />
          </button>
        </div>
        <Sidebar />
      </aside>

      {/* Main Content Area */}
      <div className={styles.contentWrapper}>
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
          <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
            {/* Left: Menu + Welcome */}
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <button onClick={toggleSidebar} className="md:hidden text-gray-700 hover:text-gray-900 flex-shrink-0">
                <Menu size={24} />
              </button>
              <div className="min-w-0">
                <h1 className="text-lg sm:text-xl font-bold text-gray-900 truncate">Welcome back!</h1>
                <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Find and apply to freelance opportunities</p>
              </div>
            </div>

            {/* Right: Search + Icons + Profile */}
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
              {/* Search (Hidden on small mobile) */}
              <div className="hidden sm:block relative w-48 lg:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input
                  type="text"
                  placeholder="Search jobs, clients..."
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-100 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#27a963] focus:bg-white transition"
                />
              </div>

              {/* Icons */}
              <div className="flex items-center gap-2 sm:gap-4">
                <button className="relative text-gray-600 hover:text-gray-900 p-2 hover:bg-gray-100 rounded-lg transition flex-shrink-0">
                  <Bell size={20} />
                  <span className="absolute top-1 right-1 w-4 h-4 bg-[#27a963] text-white text-xs rounded-full flex items-center justify-center font-bold">4</span>
                </button>
                <button className="relative text-gray-600 hover:text-gray-900 p-2 hover:bg-gray-100 rounded-lg transition flex-shrink-0">
                  <Mail size={20} />
                  <span className="absolute top-1 right-1 w-4 h-4 bg-[#27a963] text-white text-xs rounded-full flex items-center justify-center font-bold">3</span>
                </button>
              </div>

              {/* Profile */}
              <div className="w-10 h-10 bg-[#27a963] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-md">JD</div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className={styles.pageContainer}>
          <div className={styles.mainContent}>
            {/* Page Header */}
            <div className={styles.pageHeader}>
              <h2 className={styles.pageTitle}>Find Jobs</h2>
              <p className={styles.pageSubtitle}>Browse projects that match your skills and expertise</p>
            </div>

            {/* Filters */}
            <div className={styles.filterBar}>
              <div className={styles.filterGroup}>
                <label className={styles.filterLabel}>Category</label>
                <select className={styles.filterInput}>
                  <option>All Categories</option>
                  <option>Development</option>
                  <option>Design</option>
                  <option>Writing</option>
                </select>
              </div>

              <div className={styles.filterGroup}>
                <label className={styles.filterLabel}>Budget</label>
                <div className={styles.rangeContainer}>
                  <input type="text" placeholder="Min" className={styles.filterInput} />
                  <span className={styles.rangeSep}>-</span>
                  <input type="text" placeholder="Max" className={styles.filterInput} />
                </div>
              </div>

              <div className={styles.filterGroup}>
                <label className={styles.filterLabel}>Skills</label>
                <button className={styles.skillsBtn}>Select skills</button>
              </div>

              <div className={styles.filterGroup}>
                <button className={styles.clearFiltersBtn}>Clear Filters</button>
              </div>
            </div>

            {/* Jobs Section Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>Job Listings</h3>
              <a href="#" style={{ fontSize: '0.875rem', color: '#2ecc71', fontWeight: 'bold', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                View All Jobs <ChevronRight size={16} />
              </a>
            </div>

            {/* Jobs Grid */}
            <div className={styles.jobsGrid}>
              {JOBS_DATA.map((job) => (
                <div key={job.id} className={styles.jobCard}>
                  <div className={styles.cardContent}>
                    <div className={styles.cardHeader}>
                      <span className={styles.clientName}>{job.category}</span>
                      <span className={styles.budget}>{job.budget}</span>
                    </div>
                    <h4 className={styles.jobTitle}>{job.title}</h4>
                    <p className={styles.description}>{job.description}</p>
                    <div className={styles.skillTags}>
                      {job.tags.map((tag) => (
                        <span key={tag} className={styles.skillTag}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.cardFooter}>
                    <div className={styles.footerTop}>
                      <span className={styles.postTime}>{job.posted}</span>
                      <span className={`${styles.badge} ${job.type === 'Hourly' ? styles.badgeHourly : styles.badgeFixed}`}>
                        {job.type}
                      </span>
                    </div>
                    <div className={styles.actionButtons}>
                      <button className={styles.detailsBtn}>View Details</button>
                      <button className={styles.applyBtn}>Apply Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className={styles.pagination}>
              <button className={styles.paginationBtn} disabled>
                <ChevronLeft size={18} />
              </button>
              <div className={styles.pageNumbers}>
                {[1, 2, 3].map((num) => (
                  <button
                    key={num}
                    className={`${styles.pageNum} ${currentPage === num ? styles.pageNumActive : ''}`}
                    onClick={() => setCurrentPage(num)}
                  >
                    {num}
                  </button>
                ))}
              </div>
              <button className={styles.paginationBtn}>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}