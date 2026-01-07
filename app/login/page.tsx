'use client';
import React, { useState } from 'react';
import { 
  Handshake, 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  HelpCircle, 
  Smartphone,
  ArrowRight
} from 'lucide-react';
import axios from 'axios';
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");



  type usertype={
    username:string,
    password:string,
   
  }

  let data:usertype ={
    "username": username,
    "password": password,
 
  };

async function SubmitData(e: React.FormEvent) {
  e.preventDefault();

  if (!username.trim() || !password.trim()) {
    alert("Please enter both username and password");
    return;
  }

  try {
    console.log("hello worldd..................")
    const response = await axios.post(
      "http://localhost:3000/api/login/",
      data,
      { withCredentials: true }
    );

    console.log(response.data);

    if (response.data.role === "client") {
      router.push("/client");
    } else if (response.data.role === "freelancer") {
      router.push("/freelancer");
    }
  } catch (err) {
    console.error("Login failed:", err);
  }
}


  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      {/* Main Container */}
      <div className="max-w-4xl w-full bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[650px]">
        
        {/* Left Side: Welcome Section */}
        <div className="md:w-1/2 bg-[#0f172a] p-10 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-slate-800 rounded-full opacity-50"></div>
          <div className="absolute bottom-20 right-0 w-32 h-32 bg-slate-800 rounded-full opacity-30"></div>

          <div className="relative z-10">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-12">
              <div className="bg-[#22c55e] p-2 rounded-lg">
                <Handshake className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Labora</span>
            </div>

            {/* Profile Avatar & Greeting */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#22c55e] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-900/20 transition-transform hover:scale-105">
                <User className="text-white w-10 h-10" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Welcome <span className="text-[#22c55e]">Back!</span></h1>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                Log in to access your projects, messages, and continue building your freelance career with our secure platform.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="mt-10 space-y-4">
              {[
                "Secure JWT authentication",
                "Last login tracking",
                "Active status monitoring",
                "Role-based access control"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-xs">
                  <CheckCircle2 className="text-[#22c55e] w-4 h-4" />
                  <span className="text-slate-200">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Support Links */}
          <div className="relative z-10 flex flex-wrap gap-3 mt-8">
            <button className="bg-slate-800/50 hover:bg-slate-800 px-4 py-2 rounded-full text-[10px] flex items-center gap-2 border border-slate-700 transition">
              <HelpCircle className="text-[#22c55e] w-3 h-3" /> Need Help?
            </button>
            <button className="bg-slate-800/50 hover:bg-slate-800 px-4 py-2 rounded-full text-[10px] flex items-center gap-2 border border-slate-700 transition">
              <Smartphone className="text-[#22c55e] w-3 h-3" /> Mobile App
            </button>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="md:w-1/2 p-8 md:p-12 bg-white flex flex-col justify-center">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-800">Sign In to Your Account</h2>
            <p className="text-slate-500 text-sm mt-2">
              Don't have an account? <span className="text-[#22c55e] font-bold cursor-pointer hover:underline">Create one now</span>
            </p>
          </div>

          <form className="space-y-6" onSubmit={SubmitData}>
            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Email or  Username</label>
              <div className="relative group">

                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400 group-focus-within:text-[#22c55e] transition-colors">
                  <Mail size={18} />
                </span>
                <input 
                  type="text" 
                  placeholder="Enter your email" 
                      onChange={(e)=>setUsername(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-green-500/20 focus:border-[#22c55e] outline-none transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Password</label>
              <div className="relative group">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400 group-focus-within:text-[#22c55e] transition-colors">
                  <Lock size={18} />
                </span>
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  className="w-full pl-11 pr-12 py-3.5 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-green-500/20 focus:border-[#22c55e] outline-none transition-all"
                  onChange={(e)=>setPassword(e.target.value)}
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Options Row */}
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 cursor-pointer text-slate-600 group">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#22c55e] focus:ring-[#22c55e] cursor-pointer" />
                <span className="group-hover:text-slate-900 transition-colors">Remember me</span>
              </label>
              <span className="text-[#22c55e] font-semibold hover:underline cursor-pointer">Forgot password?</span>
            </div>

            {/* Sign In Button */}
          <button 
  type='submit' 
  disabled={!username.trim() || !password.trim()}
  className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-green-100
    ${!username.trim() || !password.trim()
      ? "bg-slate-300 cursor-not-allowed"
      : "bg-[#22c55e] hover:bg-green-600 text-white active:scale-[0.98]"
    }`
  }
>
  Sign In
  <ArrowRight size={18} />
</button>


            {/* Divider */}
            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-slate-100"></div>
              <span className="flex-shrink mx-4 text-slate-400 text-[10px] uppercase tracking-wider font-bold">Or sign in with</span>
              <div className="flex-grow border-t border-slate-100"></div>
            </div>

            {/* Social Authentication */}
            <div className="grid grid-cols-2 gap-4">
              <button type="button" className="flex items-center justify-center gap-2 border border-slate-100 py-3 rounded-xl hover:bg-slate-50 transition-colors text-sm font-semibold text-slate-700 shadow-sm">
                <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-4 h-4" alt="Google" />
                Google
              </button>
              <button type="button" className="flex items-center justify-center gap-2 border border-slate-100 py-3 rounded-xl hover:bg-slate-50 transition-colors text-sm font-semibold text-slate-700 shadow-sm">
                <img src="https://www.svgrepo.com/show/448234/linkedin.svg" className="w-4 h-4" alt="LinkedIn" />
                LinkedIn
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}