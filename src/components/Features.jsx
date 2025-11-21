import { ShieldCheck, CalendarCheck, Stethoscope, Pill, FlaskConical, FileText, BarChart3, Banknote, Users, Bell } from 'lucide-react'

const features = [
  { icon: Stethoscope, title: 'Patient & Doctor Management', desc: 'Profiles, history, schedules, and role-based dashboards.' },
  { icon: CalendarCheck, title: 'Appointments', desc: 'Online booking with real-time availability and reminders.' },
  { icon: Banknote, title: 'Billing & Insurance', desc: 'Invoices, payments, and insurance integrations.' },
  { icon: Pill, title: 'Pharmacy', desc: 'Inventory, pricing, expiry tracking, and prescriptions.' },
  { icon: FlaskConical, title: 'Laboratory', desc: 'Test requests, results upload, and digital reports.' },
  { icon: FileText, title: 'EHR', desc: 'Complete medical records, documents, and visit history.' },
  { icon: Users, title: 'Nursing & Wards', desc: 'Vitals charting, bed assignments, and shift planning.' },
  { icon: BarChart3, title: 'Analytics', desc: 'Real-time dashboards, KPIs, and exports.' },
  { icon: Bell, title: 'Notifications', desc: 'Email/SMS alerts and system updates.' },
  { icon: ShieldCheck, title: 'Secure & Multilingual', desc: 'Role-based access, Amharic/English, dark mode.' },
]

export default function Features() {
  return (
    <section id="features" className="py-16 bg-gradient-to-b from-white to-sky-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100">Built for modern healthcare</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Clean, minimal, and fast — with Ethiopian cultural touches.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/90 to-blue-600/90 text-white flex items-center justify-center shadow mb-4">
                <f.icon size={22} />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">{f.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
