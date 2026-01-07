'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";

import { 
  Briefcase, 
  Laptop, 
  CheckCircle2, 
  Handshake, 
  Eye, 
  EyeOff, 
  UserPlus 
} from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();

  const [role, setRole] = useState<'client' | 'freelancer'>('client');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  type usertype={
    username:string,
    password:string,
    last_name:string,
    email:string,
    role:string     
  }

  let data:usertype ={
    "username": username,
    "password": password,
    "last_name": fullName,
    "email": email,
    "role": role
  };

  
    async function SubmitData(){
      let response= await axios.post("http://127.0.0.1:8000/api/register/",data);
      console.log(response.data);
      router.push('/login');

    }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 md:p-8">
      {/* Main Card Container */}
      <div className="max-w-6xl w-full bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[700px]">
        
        {/* Left Section: Branding & Features (Hidden on small mobile if needed, but here it stacks) */}
        <div className="md:w-5/12 bg-[#0f172a] p-8 md:p-12 text-white flex flex-col justify-center relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-slate-800 rounded-full opacity-40"></div>
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-slate-800 rounded-full opacity-20"></div>

          <div className="relative z-10">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-12">
              <div className="bg-[#22c55e] p-2 rounded-xl">
                <Handshake className="text-white w-7 h-7" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Labora</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Join the Future of Freelancing
            </h1>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Connect with global opportunities, secure payments, and build your freelance career with our cutting-edge platform.
            </p>

            {/* Feature List */}
            <ul className="space-y-6">
              {[
                "Blockchain-secured smart contract payments",
                "Real-time messaging and collaboration",
                "AI-powered job matching",
                "Skill verification and portfolio showcase"
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-4">
                  <CheckCircle2 className="text-[#22c55e] w-6 h-6 flex-shrink-0" />
                  <span className="text-sm md:text-base font-medium text-slate-200">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section: Registration Form */}
        <div className="md:w-7/12 p-8 md:p-14 bg-white">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Create Your Account</h2>
            <p className="text-slate-500 mt-2">Join thousands of freelancers and clients worldwide</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {/* Name Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700">Username</label>
                <input 
                  type="text" 
                  placeholder="Enter username" 
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  onChange={(e)=>setUsername(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700">Last Name</label>
                <input 
                  type="text" 
                  placeholder="Enter full name" 
                  onChange={(e)=>setFullName(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700">Email Address</label>
              <input 
                type="email" 
                placeholder="Enter email address" 
                  onChange={(e)=>setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Password Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1 relative">
                <label className="text-sm font-semibold text-slate-700">Password</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Create password" 
                      onChange={(e)=>setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <p className="text-[11px] text-[#22c55e] font-medium flex items-center gap-1 mt-1">
                  <CheckCircle2 size={12} /> Password strength: Strong
                </p>
              </div>

              <div className="space-y-1 relative">
                <label className="text-sm font-semibold text-slate-700">Confirm Password</label>
                <div className="relative">
                  <input 
                    type={showConfirmPassword ? "text" : "password"} 
                    placeholder="Confirm password" 
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Role Selection */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-slate-700">Select Your Role</label>
              <div className="grid grid-cols-2 gap-4">
                <div 
                  onClick={() => setRole('client')}
                  className={`cursor-pointer border-2 p-4 rounded-2xl flex flex-col items-center text-center transition-all duration-200 ${
                    role === 'client' 
                    ? 'border-[#22c55e] bg-green-50 shadow-sm' 
                    : 'border-slate-100 hover:border-slate-200 bg-white'
                  }`}
                >
                  <Briefcase className={`mb-2 ${role === 'client' ? 'text-[#22c55e]' : 'text-slate-400'}`} />
                  <span className="block font-bold text-sm text-slate-800">I'm a Client</span>
                  <span className="text-[11px] text-slate-500">Hire talent for projects</span>
                </div>

                <div 
                  onClick={() => setRole('freelancer')}
                  className={`cursor-pointer border-2 p-4 rounded-2xl flex flex-col items-center text-center transition-all duration-200 ${
                    role === 'freelancer' 
                    ? 'border-[#22c55e] bg-green-50 shadow-sm' 
                    : 'border-slate-100 hover:border-slate-200 bg-white'
                  }`}
                >
                  <Laptop className={`mb-2 ${role === 'freelancer' ? 'text-[#22c55e]' : 'text-slate-400'}`} />
                  <span className="block font-bold text-sm text-slate-800">I'm a Freelancer</span>
                  <span className="text-[11px] text-slate-500">Find work opportunities</span>
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300 text-[#22c55e] focus:ring-[#22c55e]" />
              <p className="text-xs text-slate-500 leading-normal">
                I agree to the <span className="text-[#22c55e] font-bold cursor-pointer">Terms of Service</span> and <span className="text-[#22c55e] font-bold cursor-pointer">Privacy Policy</span>. I understand my data is processed accordingly.
              </p>
            </div>

            {/* Submit Button */}
            <button onClick={SubmitData} className="w-full bg-[#22c55e] hover:bg-green-600 text-white font-bold py-4 rounded-2xl transition duration-300 shadow-lg shadow-green-100 flex items-center justify-center gap-2">
              <UserPlus size={20}  />
              Create Account
            </button>

            {/* Divider */}
            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-slate-100"></div>
              <span className="mx-4 text-slate-400 text-xs font-medium">Or continue with</span>
              <div className="flex-grow border-t border-slate-100"></div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button type="button" className="flex items-center justify-center gap-2 border border-slate-200 py-3 rounded-xl hover:bg-slate-50 transition font-medium text-sm text-slate-700">
                <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-4 h-4" alt="Google" />
                Google
              </button>
              <button type="button" className="flex items-center justify-center gap-2 border border-slate-200 py-3 rounded-xl hover:bg-slate-50 transition font-medium text-sm text-slate-700">
                <img src="https://www.svgrepo.com/show/448234/linkedin.svg" className="w-4 h-4" alt="LinkedIn" />
                LinkedIn
              </button>
            </div>

            <p className="text-center text-sm text-slate-500 pt-2">
              Already have an account? <span className="text-[#22c55e] font-bold cursor-pointer hover:underline">Log In</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}