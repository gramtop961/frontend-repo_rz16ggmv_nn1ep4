import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectHoverList({ items = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Text list */}
        <ul className="space-y-3">
          {items.map((item, idx) => {
            const active = idx === activeIndex;
            return (
              <li key={idx}>
                <button
                  onMouseEnter={() => setActiveIndex(idx)}
                  onFocus={() => setActiveIndex(idx)}
                  className="w-full text-left group"
                >
                  <div className={`flex items-center justify-between rounded-2xl border transition-colors ${
                    active ? 'bg-white border-black/10' : 'bg-white/70 border-black/10 hover:bg-white'
                  } p-5`}
                  >
                    <div>
                      <h3 className={`font-extrabold tracking-tight leading-tight ${
                        active ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'
                      }`}
                      >
                        {item.title}
                      </h3>
                      {item.excerpt && (
                        <p className="mt-2 text-black/70 max-w-xl text-sm sm:text-base">{item.excerpt}</p>
                      )}
                    </div>
                    <div className="hidden sm:flex items-center gap-2 text-sm font-semibold">
                      <span className="px-3 py-1 rounded-full border border-black/10" style={{ backgroundColor: '#E4F223', color: '#1E4841' }}>
                        View
                      </span>
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Preview panel */}
        <div className="relative rounded-2xl border border-black/10 bg-white overflow-hidden min-h-[320px] lg:min-h-[520px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0"
            >
              {items[activeIndex]?.image ? (
                <img
                  src={items[activeIndex].image}
                  alt={items[activeIndex].title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-black/60">
                  No preview
                </div>
              )}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
