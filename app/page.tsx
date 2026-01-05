'use client';

import React from 'react';
import Image from 'next/image';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      
      {/* Navbar */}
      <nav className="bg-white shadow-sm px-4 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-green-500 tracking-tight">Labora</div>
          
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-600">
             {/* Space for menu items if needed, currently empty in top-right of nav in image, 
                 but Login/Sign up are present */}
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-green-500">Log in</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-green-500">Sign Up</a>
            <button className="bg-green-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition-colors">
              GET STARTED
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-center px-4">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="Office Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Digital Solutions
          </h1>
          <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
            Create digital solutions for your business needs with our innovative systems and expertise.
          </p>
          <button className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors">
            GET STARTED
          </button>
           {/* Slider Dots Visual */}
           <div className="mt-12 flex justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-gray-400"></span>
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <span className="h-2 w-2 rounded-full bg-gray-400"></span>
          </div>
        </div>

        {/* Slider Arrows Visual (Absolute) */}
        <button className="absolute left-4 md:left-8 bg-white/20 p-2 rounded-full text-white hover:bg-white/40 hidden md:block">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button className="absolute right-4 md:right-8 bg-white/20 p-2 rounded-full text-white hover:bg-white/40 hidden md:block">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </section>

      {/* About Us Header */}
      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 uppercase tracking-wide">About Us</h2>
        <div className="h-1 w-16 bg-green-500 mx-auto mt-2 mb-8"></div>
        <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Maecenas ultricies felis id fermentum pharetra. Ut fermentum habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
      </section>

      {/* Welcome & Feature Section */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-500 mb-6">Welcome to Our Site</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Suspendisse potent. Duis faucibus tempus fringilla integer ante ut, consectetur adipiscing elit. 
              Donec condimentum eros vel elit consectetur, et tempor nunc tincidunt. 
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Quid ratione ab compositis invenire? Autem rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
            </p>
            <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors uppercase text-sm font-bold shadow-md">
              Read More
            </button>
          </div>
          <div className="relative">
             {/* Main Image */}
            <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                src="https://images.unsplash.com/photo-1531498860503-6c61e274c4a1?q=80&w=2070&auto=format&fit=crop"
                alt="Team working with sticky notes"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Objective Cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-lg p-4">
                <div className="relative mb-4">
                    <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" alt="Mission" width={400} height={250} className="w-full h-48 object-cover rounded-md" />
                    <div className="absolute -bottom-3 -right-3 bg-white p-1 rounded-full">
                        <div className="bg-green-500 rounded-full p-2 text-white">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                    </div>
                </div>
                <h3 className="text-lg font-bold mb-2">Our Mission</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg p-4">
                <div className="relative mb-4">
                    <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" alt="Vision" width={400} height={250} className="w-full h-48 object-cover rounded-md" />
                    <div className="absolute -bottom-3 -right-3 bg-white p-1 rounded-full">
                        <div className="bg-green-500 rounded-full p-2 text-white">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                    </div>
                </div>
                <h3 className="text-lg font-bold mb-2">Our Vision</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg p-4">
                <div className="relative mb-4">
                    <Image src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop" alt="Objective" width={400} height={250} className="w-full h-48 object-cover rounded-md" />
                    <div className="absolute -bottom-3 -right-3 bg-white p-1 rounded-full">
                        <div className="bg-green-500 rounded-full p-2 text-white">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                    </div>
                </div>
                <h3 className="text-lg font-bold mb-2">Our Objective</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum.</p>
            </div>

        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-2">Our Services</h2>
            <div className="h-1 w-16 bg-green-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We define comprehensive freelancing solutions across web, mobile, and design services to help your business succeed.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Left Arrow */}
            <button className="hidden md:flex bg-green-500 text-white w-10 h-10 rounded-full items-center justify-center hover:bg-green-600 flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 flex-grow">
                {/* Service 1 */}
                <div className="bg-white p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="mb-4 flex justify-center text-blue-400">
                        {/* Icon Placeholder */}
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">Web Design</h3>
                    <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet, cons adipi elit.</p>
                </div>

                {/* Service 2 */}
                <div className="bg-white p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="mb-4 flex justify-center text-blue-400">
                         <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">Web Development</h3>
                    <p className="text-xs text-gray-500">Sed do eiusmod tempor incididunt ut labore.</p>
                </div>

                {/* Service 3 */}
                <div className="bg-white p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                     <div className="mb-4 flex justify-center text-purple-400">
                         <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">App Design</h3>
                    <p className="text-xs text-gray-500">Ut enim ad minim veniam, quis nostrud exerc.</p>
                </div>

                {/* Service 4 */}
                <div className="bg-white p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="mb-4 flex justify-center text-purple-400">
                         <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">App Development</h3>
                    <p className="text-xs text-gray-500">Duis aute irure dolor in reprehenderit in voluptate.</p>
                </div>
            </div>

            {/* Right Arrow */}
            <button className="hidden md:flex bg-green-500 text-white w-10 h-10 rounded-full items-center justify-center hover:bg-green-600 flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Platform Statistics - SOLID GREEN CARDS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Platform Statistics</h2>
          <p className="text-center text-gray-500 mb-12 text-sm">Real data metrics from our growing freelancing ecosystem</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-green-500 p-8 rounded-lg shadow-md text-white">
              <div className="text-4xl font-bold mb-1">52,847</div>
              <div className="text-sm opacity-90">Total Users</div>
              <div className="text-xs opacity-75 mt-1">Active on platform</div>
            </div>
            <div className="bg-green-500 p-8 rounded-lg shadow-md text-white">
              <div className="text-4xl font-bold mb-1">14,293</div>
              <div className="text-sm opacity-90">Active Freelancers</div>
              <div className="text-xs opacity-75 mt-1">Skilled & Verified</div>
            </div>
            <div className="bg-green-500 p-8 rounded-lg shadow-md text-white">
              <div className="text-4xl font-bold mb-1">9,847</div>
              <div className="text-sm opacity-90">Completed Projects</div>
              <div className="text-xs opacity-75 mt-1">Successfully delivered</div>
            </div>
            <div className="bg-green-500 p-8 rounded-lg shadow-md text-white">
              <div className="text-4xl font-bold mb-1">$11582K</div>
              <div className="text-sm opacity-90">Platform Earnings</div>
              <div className="text-xs opacity-75 mt-1">In Revenue</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase text-gray-800">Client Reviews</h2>
             <div className="h-1 w-16 bg-green-500 mx-auto mb-6"></div>
             <p className="text-gray-500">Hear what our satisfied clients have to say about our services and expertise.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white p-8 rounded-lg text-center shadow-sm border border-gray-100">
              <div className="flex justify-center mb-4 text-yellow-400 text-lg">★★★★★</div>
              <p className="mb-6 text-gray-600 text-sm italic">“Excellent service! The team delivered beyond our expectations. Professional, creative, and highly responsive to our needs.”</p>
              
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
                  alt="Sarah Johnson"
                  width={50}
                  height={50}
                  className="rounded-full mb-2 object-cover"
                />
                <div className="font-bold text-gray-800 text-sm">Sarah Johnson</div>
                <div className="text-xs text-green-500 font-semibold">CEO, Tech Startup</div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-8 rounded-lg text-center shadow-sm border border-gray-100">
              <div className="flex justify-center mb-4 text-yellow-400 text-lg">★★★★★</div>
              <p className="mb-6 text-gray-600 text-sm italic">“Outstanding quality and timely delivery. They transformed our vision into reality with impressive attention to detail.”</p>
              
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
                  alt="Michael Chen"
                  width={50}
                  height={50}
                  className="rounded-full mb-2 object-cover"
                />
                <div className="font-bold text-gray-800 text-sm">Michael Chen</div>
                <div className="text-xs text-green-500 font-semibold">Project Manager, Digital Agency</div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-8 rounded-lg text-center shadow-sm border border-gray-100">
              <div className="flex justify-center mb-4 text-yellow-400 text-lg">★★★★★</div>
              <p className="mb-6 text-gray-600 text-sm italic">“Fantastic experience working with them. Their expertise and dedication made a real difference to our business success.”</p>
              
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
                  alt="Emma Davis"
                  width={50}
                  height={50}
                  className="rounded-full mb-2 object-cover"
                />
                <div className="font-bold text-gray-800 text-sm">Emma Davis</div>
                <div className="text-xs text-green-500 font-semibold">Founder, E-commerce Business</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f172a] text-gray-400 py-16 px-4 text-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold text-green-500 mb-4">Labora</h3>
            <p className="leading-relaxed mb-4">
               Building exceptional digital experiences for forward-thinking brands.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-500 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-500 transition-colors">Web Design</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">App Development</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">UI/UX Design</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-green-500">Email:</span> <a href="mailto:hello@labora.com" className="hover:text-white">hello@labora.com</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">Phone:</span> <a href="tel:+1234567890" className="hover:text-white">+1 (234) 567-890</a>
              </li>
              <li>
                 <p className="mt-2">123 Innovation Dr, Tech City, USA</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; 2024 Labora. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <a href="#" className="hover:text-white">Terms of Service</a>
             <a href="#" className="hover:text-white">Careers</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;