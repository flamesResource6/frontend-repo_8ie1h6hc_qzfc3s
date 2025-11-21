import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-white/0 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur text-sky-700 text-xs font-medium shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Trusted • Innovative • Ethiopian
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(56,189,248,0.35)]">
            Hulubedeje (ሁሉ በደጄ)
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-sky-100/90">
            A modern, cloud-first Hospital Management Platform for patients and staff. Fast, reliable, and culturally grounded.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#features" className="px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold shadow-lg shadow-sky-500/20">Explore Features</a>
            <a href="/signup" className="px-5 py-3 rounded-xl bg-white/90 hover:bg-white text-sky-700 font-semibold shadow-lg">Create Account</a>
          </div>
        </div>
      </div>
    </section>
  )
}
