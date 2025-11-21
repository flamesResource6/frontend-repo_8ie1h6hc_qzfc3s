export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <p className="text-lg font-bold text-slate-900 dark:text-slate-100">Hulubedeje</p>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">Digital health for everyone. Ethiopian-crafted, globally ready.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Company</p>
          <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
            <li><a href="/about">About</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/terms">Terms</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Product</p>
          <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
            <li><a href="/departments">Departments</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/doctors">Doctors</a></li>
            <li><a href="/faqs">FAQs</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Contact</p>
          <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
            <li>contact@hulubedeje.com</li>
            <li>Addis Ababa, Ethiopia</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 dark:text-slate-400 py-4">© {new Date().getFullYear()} Hulubedeje. All rights reserved.</div>
    </footer>
  )
}
