import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

function Home() {
  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Hero />
      <Features />
      <CTA />
    </div>
  )
}

function Placeholder({ title }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="max-w-3xl text-center p-8">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">This page is coming soon with a full experience tailored for Hulubedeje.</p>
      </div>
    </div>
  )
}

function Login() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    const res = await fetch(`${baseUrl}/auth/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    if (res.ok) {
      const data = await res.json()
      localStorage.setItem('hulubedeje_user', JSON.stringify(data.user))
      window.location.href = `/dashboard/${data.user.role}`
    } else {
      alert('Login failed')
    }
  }
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow">
        <h2 className="text-2xl font-bold mb-4">Welcome back</h2>
        <div className="space-y-3">
          <input name="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700" required />
          <input name="password" type="password" placeholder="Password" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700" required />
          <button className="w-full px-4 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold">Sign In</button>
        </div>
        <div className="mt-4 text-sm text-slate-600 dark:text-slate-300 flex justify-between">
          <a href="/forgot">Forgot password?</a>
          <a href="/signup" className="text-sky-600">Create account</a>
        </div>
      </form>
    </div>
  )
}

function Signup() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    const res = await fetch(`${baseUrl}/auth/signup`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    if (res.ok) {
      alert('Signup successful. Please sign in.')
      window.location.href = '/login'
    } else {
      const t = await res.text(); alert(t)
    }
  }
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow">
        <h2 className="text-2xl font-bold mb-4">Create your account</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input name="name" placeholder="Full name" className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700" required />
          <select name="role" className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="nurse">Nurse</option>
            <option value="pharmacist">Pharmacist</option>
            <option value="lab">Lab Staff</option>
            <option value="admin">Admin</option>
          </select>
          <input name="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 col-span-1 md:col-span-2" required />
          <input name="password" type="password" placeholder="Password" className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 col-span-1 md:col-span-2" required />
        </div>
        <button className="mt-4 w-full px-4 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold">Create Account</button>
      </form>
    </div>
  )
}

function Forgot() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold mb-2">Reset password</h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">We will send a link to your email to reset your password.</p>
        <input placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700" />
        <button className="mt-4 w-full px-4 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold">Send Link</button>
      </div>
    </div>
  )
}

function Dashboard({ role }) {
  const user = JSON.parse(localStorage.getItem('hulubedeje_user') || 'null')
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
          <p className="text-sm text-slate-500">Welcome</p>
          <p className="text-xl font-bold">{user?.name || 'Guest'}</p>
          <p className="text-sky-600 font-medium mt-1 capitalize">{role} Dashboard</p>
        </div>
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
          <p className="text-sm text-slate-500">Today</p>
          <p className="text-3xl font-bold">12</p>
          <p className="text-xs text-slate-500">Appointments</p>
        </div>
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
          <p className="text-sm text-slate-500">Revenue</p>
          <p className="text-3xl font-bold">₿ 25,400</p>
          <p className="text-xs text-slate-500">This month</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 min-h-[300px]">Upcoming schedule</div>
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 min-h-[300px]">Quick actions</div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Placeholder title="About Us" />} />
        <Route path="/departments" element={<Placeholder title="Departments" />} />
        <Route path="/doctors" element={<Placeholder title="Doctors" />} />
        <Route path="/services" element={<Placeholder title="Services" />} />
        <Route path="/contact" element={<Placeholder title="Contact Us" />} />
        <Route path="/faqs" element={<Placeholder title="FAQs" />} />
        <Route path="/careers" element={<Placeholder title="Careers" />} />
        <Route path="/privacy" element={<Placeholder title="Privacy Policy" />} />
        <Route path="/terms" element={<Placeholder title="Terms & Conditions" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />

        <Route path="/dashboard/:role" element={<Dashboard role={location.pathname.split('/').pop()} />} />
      </Routes>
      <Footer />
    </div>
  )
}
