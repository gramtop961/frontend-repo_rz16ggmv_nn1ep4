import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

export default function SectionGrid({ title, description, items, type = 'project' }) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
          {description && <p className="text-black/70 mt-1">{description}</p>}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="group rounded-2xl border border-black/10 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            {item.image && (
              <div className="aspect-video overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" />
              </div>
            )}
            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-lg leading-snug">{item.title}</h3>
                {type === 'project' && item.badge && (
                  <span className="text-xs px-2 py-1 rounded-full border border-black/10" style={{ backgroundColor: '#E4F223', color: '#1E4841' }}>{item.badge}</span>
                )}
                {type === 'shop' && (
                  <span className="text-sm font-semibold" style={{ color: '#1E4841' }}>{item.price}</span>
                )}
              </div>
              {item.excerpt && <p className="text-sm text-black/70 mt-2">{item.excerpt}</p>}

              <div className="mt-4 flex items-center gap-3">
                {type === 'project' && (
                  <>
                    {item.source && (
                      <a href={item.source} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-medium hover:underline" style={{ color: '#1E4841' }}>
                        <Github size={16} /> Source
                      </a>
                    )}
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-medium hover:underline">
                        <ExternalLink size={16} /> Live
                      </a>
                    )}
                  </>
                )}
                {type === 'blog' && (
                  <a href={item.link || '#'} className="inline-flex items-center gap-1 text-sm font-medium" style={{ color: '#1E4841' }}>
                    Read <ArrowRight size={16} />
                  </a>
                )}
                {type === 'shop' && (
                  <a href={item.link || '#contact'} className="inline-flex items-center gap-1 text-sm font-semibold px-3 py-2 rounded-full border border-black/10" style={{ backgroundColor: '#E4F223', color: '#1E4841' }}>
                    Buy <ArrowRight size={16} />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
