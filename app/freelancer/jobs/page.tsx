'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/freelancer/Sidebar/Sidebar';
import Header from '@/components/freelancer/Header/Header';
import Footer from '@/components/freelancer/Footer/Footer';
import styles from './job.module.css';

// Mock job data
const MOCK_JOBS = [
  {
    id: '1',
    title: 'E-Commerce Frontend Migration',
    client: 'TechRetail Solutions',
    desc: 'Migrate a Shopify storefront to Next.js App Router with a focus on Core Web Vitals and performance optimization.',
    budget: '$3,000 - $5,000',
    skills: ['Next.js', 'React', 'TypeScript'],
    time: '2h ago',
    type: 'Fixed Price',
  },
  {
    id: '2',
    title: 'Fintech API Development',
    client: 'SecurePay Inc',
    desc: 'Build secure RESTful APIs using Node.js and PostgreSQL. Experience with JWT and Redis caching required.',
    budget: '$70/hr',
    skills: ['Node.js', 'PostgreSQL', 'API Design'],
    time: '5h ago',
    type: 'Hourly',
  },
  {
    id: '3',
    title: 'SaaS Dashboard Design',
    client: 'Analytics Pro',
    desc: 'Create high-fidelity Figma mockups for a complex data analytics dashboard with real-time visualizations.',
    budget: '$1,500 - $2,000',
    skills: ['Figma', 'UI/UX', 'Design Systems'],
    time: '1d ago',
    type: 'Fixed Price',
  },
  {
    id: '4',
    title: 'HealthTrack Mobile App',
    client: 'HealthCo Technologies',
    desc: 'Develop a cross-platform fitness app using Flutter with Bluetooth wearable device integration.',
    budget: '$5,000 - $8,000',
    skills: ['Flutter', 'Dart', 'Firebase'],
    time: '2d ago',
    type: 'Fixed Price',
  },
  {
    id: '5',
    title: 'Python Web Scraper',
    client: 'DataMining Solutions',
    desc: 'Build a robust scraper for real estate listings with proxy rotation and anti-captcha bypass measures.',
    budget: '$800 - $1,200',
    skills: ['Python', 'Selenium', 'Web Scraping'],
    time: '3d ago',
    type: 'Fixed Price',
  },
  {
    id: '6',
    title: 'Cloud Infrastructure Audit',
    client: 'SkySystems Cloud',
    desc: 'Perform a security and cost-optimization audit on existing AWS infrastructure with recommendations.',
    budget: '$100/hr',
    skills: ['AWS', 'DevOps', 'Security'],
    time: '4d ago',
    type: 'Hourly',
  },
];

// Job Card Component
interface JobCardProps {
  job: (typeof MOCK_JOBS)[0];
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <article className={styles.jobCard}>
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h3 className={styles.jobTitle}>{job.title}</h3>
          <span className={`${styles.badge} ${job.type === 'Fixed Price' ? styles.badgeFixed : styles.badgeHourly}`}>
            {job.type}
          </span>
        </div>

        <p className={styles.clientName}>{job.client}</p>
        <p className={styles.description}>{job.desc}</p>

        <div className={styles.skillTags}>
          {job.skills.map((skill) => (
            <span key={skill} className={styles.skillTag}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.cardFooter}>
        <div className={styles.footerTop}>
          <span className={styles.budget}>{job.budget}</span>
          <span className={styles.postTime}>{job.time}</span>
        </div>

        <div className={styles.actionButtons}>
          <button className={styles.detailsBtn}>View Details</button>
          <button className={styles.applyBtn}>Apply Now</button>
        </div>
      </div>
    </article>
  );
};

// Filter Bar Component
const FilterBar: React.FC = () => {
  return (
    <div className={styles.filterBar}>
      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Category</label>
        <select className={styles.filterInput}>
          <option>All Categories</option>
          <option>Web Development</option>
          <option>Mobile Development</option>
          <option>Design</option>
          <option>DevOps</option>
        </select>
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Budget Range</label>
        <div className={styles.rangeContainer}>
          <input type="text" placeholder="Min" className={styles.filterInput} />
          <span className={styles.rangeSep}>-</span>
          <input type="text" placeholder="Max" className={styles.filterInput} />
        </div>
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Skills</label>
        <button className={styles.skillsBtn}>Select Skills +</button>
      </div>

      <button className={styles.clearFiltersBtn}>Clear Filters</button>
    </div>
  );
};

// Pagination Component
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <nav className={styles.pagination}>
      <button
        className={styles.paginationBtn}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        aria-label="Previous page"
      >
        ← Previous
      </button>

      <div className={styles.pageNumbers}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`${styles.pageNum} ${currentPage === page ? styles.pageNumActive : ''}`}
            onClick={() => onPageChange(page)}
            aria-current={currentPage === page ? 'page' : undefined}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className={styles.paginationBtn}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        aria-label="Next page"
      >
        Next →
      </button>
    </nav>
  );
};

// Main Page Component
export default function FindJobsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const jobsPerPage = 6;
  const totalPages = Math.ceil(MOCK_JOBS.length / jobsPerPage);

  const startIdx = (currentPage - 1) * jobsPerPage;
  const paginatedJobs = MOCK_JOBS.slice(startIdx, startIdx + jobsPerPage);

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  const handleMenuClick = () => {
    setIsSidebarOpen(true);
  };

  return (
    <div className={styles.layoutWrapper}>
      {/* Sidebar - Passes toggle state */}
      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />

      {/* Main Content Column */}
      <div className={styles.contentWrapper}>
        {/* Header - Passes menu click handler */}
        <Header onMenuClick={handleMenuClick} />

        {/* Page Content */}
        <div className={styles.pageContainer}>
          <main className={styles.mainContent}>
            {/* Page Header */}
            <section className={styles.pageHeader}>
              <h1 className={styles.pageTitle}>Find Jobs</h1>
              <p className={styles.pageSubtitle}>Browse projects that match your skills and expertise</p>
            </section>

            {/* Filter Bar */}
            <FilterBar />

            {/* Job Grid */}
            <div className={styles.jobsGrid}>
              {paginatedJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </main>
        </div>

        {/* Footer - Stays at bottom */}
        <Footer />
      </div>
    </div>
  );
}