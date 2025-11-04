import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero({ onPrimaryAction }) {
  return (
    <section className="relative">
      <div className="relative h-[72vh] w-full overflow-hidden rounded-b-3xl">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="-mt-16 sm:-mt-20 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-xl border border-black/10 rounded-2xl p-6 sm:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                  Building playful, performant products
                </h1>
                <p className="mt-3 text-black/70 max-w-2xl">
                  I’m a founder, full‑stack developer and UI/UX designer crafting useful products with delightful micro‑interactions.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onPrimaryAction}
                  className="px-5 py-3 rounded-full font-semibold shadow-sm border border-black/10"
                  style={{ backgroundColor: '#E4F223', color: '#1E4841' }}
                >
                  Explore Projects
                </motion.button>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-3 rounded-full font-semibold bg-black text-white"
                  style={{ backgroundColor: '#1E4841' }}
                >
                  Get in touch
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
