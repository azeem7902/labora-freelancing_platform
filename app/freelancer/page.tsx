'use client';

import React from 'react';
import Sidebar from '@/components/freelancer/Sidebar/Sidebar';
import Header from '@/components/freelancer/Header/Header';
import Footer from '@/components/client/Footer/Footer';
import styles from './FreelancerPage.module.css';

export default function FreelancerPage() {
  return (
    <>
      <div className={styles.layout}>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />

        {/* Sidebar */}
        <aside className="w-64 flex-shrink-0 hidden md:block overflow-hidden h-full">
          <Sidebar />
        </aside>
        
        {/* Main Content Column */}
        <div className={styles.contentColumn}>
          <Header />

          {/* Scrollable Main Area - Content only */}
          <main className={styles.scrollArea}>
            <div className="p-6 md:p-8 space-y-8 max-w-[1400px] mx-auto w-full">
              
              {/* Hero Banner */}
              <div className="relative bg-[#26c267] rounded-3xl p-8 md:p-12 text-white overflow-hidden shadow-lg">
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-3">Welcome to Labora, John!</h2>
                  <p className="text-white/80 text-sm md:text-base mb-6 md:mb-8">Ready to find your next freelance opportunity?</p>
                  <button className="bg-white text-[#26c267] px-6 md:px-8 py-2.5 md:py-3 rounded-xl font-bold text-sm md:text-base hover:bg-gray-100 transition-colors">
                    Start Exploring
                  </button>
                </div>
              </div>

              {/* Stat Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: 'New Jobs Today', val: '24', icon: 'fa-bolt' },
                  { label: 'Available to Earn', val: '$8,450', icon: 'fa-dollar-sign' },
                  { label: 'Active Clients', val: '156', icon: 'fa-users' }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-md flex flex-col items-center justify-center text-center h-32 p-4">
                    <div className="text-[#26c267] text-lg mb-1 opacity-40"><i className={`fa-solid ${stat.icon}`}></i></div>
                    <p className="text-3xl font-bold text-slate-800 leading-tight">{stat.val}</p>
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Featured Jobs Section */}
              <section className="pb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-slate-800 text-lg">Featured Job Listings</h3>
                  <a href="#" className="text-[#26c267] text-xs font-bold hover:underline">View All Jobs →</a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex justify-between items-start mb-4 text-sm">
                        <span className="text-[#26c267] font-bold">Web Dev</span>
                        <span className="font-bold text-slate-800 text-lg">$2,500</span>
                      </div>
                      <h4 className="font-bold text-slate-800 mb-2">E-commerce Website</h4>
                      <p className="text-xs text-slate-400 mb-6 line-clamp-2">Build a responsive platform with React.js and Node.js.</p>
                      <div className="flex gap-3">
                        <button className="flex-1 bg-[#26c267] text-white py-2.5 rounded-xl font-bold text-sm hover:bg-green-600 transition-colors">Apply Now</button>
                        <button className="flex-1 border border-[#26c267] text-[#26c267] py-2.5 rounded-xl font-bold text-sm hover:bg-green-50 transition-colors">Manage</button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>

      {/* Footer - OUTSIDE layout, full width at bottom */}
      <div className={styles.footerWrapper}>
        <div className={styles.footerInner}>
          <Footer />
        </div>
      </div>
    </>
  );
}
