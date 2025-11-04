import { motion } from 'framer-motion';

export default function ContactForm() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-sm"
      >
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Let’s build something great</h2>
        <p className="text-black/70 mt-2">Send a quick note and I’ll get back within 24 hours.</p>
        <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Name</label>
            <input className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 focus:outline-none focus:ring-2" style={{ focusRingColor: '#1E4841' }} placeholder="Your name" />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input type="email" className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 focus:outline-none focus:ring-2" placeholder="you@example.com" />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm font-medium">Message</label>
            <textarea rows={5} className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 focus:outline-none focus:ring-2" placeholder="What are we building?" />
          </div>
          <div className="sm:col-span-2 flex items-center justify-between">
            <p className="text-xs text-black/60">No spam. Just humans.</p>
            <motion.button whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }} className="px-5 py-2.5 rounded-full font-semibold border border-black/10" style={{ backgroundColor: '#1E4841', color: '#E4F223' }}>
              Send message
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
