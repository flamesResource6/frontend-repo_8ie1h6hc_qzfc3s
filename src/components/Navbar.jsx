import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, X, Stethoscope, Moon, Sun } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const pref = localStorage.getItem('theme')
    if (pref === 'dark') setDark(true)
  }, [])

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  const user = JSON.parse(localStorage.getItem('hulubedeje_user') || 'null')

  const logout = () => {
    localStorage.removeItem('hulubedeje_user')
    navigate('/')
  }

  const navItem = (to, label) => (
    <NavLink
      to={to}
      className={({ isActive }) => `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'text-sky-600 dark:text-sky-400' : 'text-slate-700/80 dark:text-slate-200/80 hover:text-sky-600 dark:hover:text-sky-400'}`}
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-700/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 via-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-sm">
              <Stethoscope size={20} />
            </div>
            <div className="leading-tight">
              <p className="font-bold text-slate-800 dark:text-slate-100">Hulubedeje</p>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400">Hospital Cloud</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItem('/', 'Home')}
            {navItem('/about', 'About')}
            {navItem('/departments', 'Departments')}
            {navItem('/doctors', 'Doctors')}
            {navItem('/services', 'Services')}
            {navItem('/contact', 'Contact')}
            {navItem('/faqs', 'FAQs')}
            {navItem('/careers', 'Careers')}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <button aria-label="Toggle theme" onClick={() => setDark(v => !v)} className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            {user ? (
              <div className="flex items-center gap-2">
                <Link to={`/dashboard/${user.role}`} className="px-3 py-2 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-sm">Dashboard</Link>
                <button onClick={logout} className="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm">Logout</button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login" className="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm">Login</Link>
                <Link to="/signup" className="px-3 py-2 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-sm">Sign Up</Link>
              </div>
            )}
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-2">
            {navItem('/', 'Home')}
            {navItem('/about', 'About')}
            {navItem('/departments', 'Departments')}
            {navItem('/doctors', 'Doctors')}
            {navItem('/services', 'Services')}
            {navItem('/contact', 'Contact')}
            {navItem('/faqs', 'FAQs')}
            {navItem('/careers', 'Careers')}
            <div className="flex items-center gap-2 pt-2">
              <button onClick={() => setDark(v => !v)} className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 w-full flex items-center justify-center gap-2">
                {dark ? <Sun size={16} /> : <Moon size={16} />} Toggle Theme
              </button>
              {user ? (
                <>
                  <Link to={`/dashboard/${user.role}`} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg bg-sky-600 text-white text-sm w-full text-center">Dashboard</Link>
                  <button onClick={() => { logout(); setOpen(false) }} className="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm w-full">Logout</button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm w-full text-center">Login</Link>
                  <Link to="/signup" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg bg-sky-600 text-white text-sm w-full text-center">Sign Up</Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
