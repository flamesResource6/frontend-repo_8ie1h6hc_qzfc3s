export default function CTA() {
  return (
    <section className="py-16 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-sky-600 via-cyan-600 to-blue-700 text-white shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-bold">Bring your hospital to the cloud</h3>
              <p className="mt-2 text-sky-100">Start with a unified portal for patients and staff — secure, scalable, and delightful.</p>
            </div>
            <div className="flex gap-3">
              <a href="/signup" className="px-5 py-3 rounded-xl bg-white text-sky-700 font-semibold w-full text-center">Get Started</a>
              <a href="/login" className="px-5 py-3 rounded-xl bg-sky-900/30 text-white border border-white/30 font-semibold w-full text-center">Sign In</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
