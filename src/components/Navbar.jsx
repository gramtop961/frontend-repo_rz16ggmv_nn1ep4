import { motion } from 'framer-motion';
import { Home, Code, PenTool, ShoppingBag, Mail } from 'lucide-react';

const navItems = [
  { key: 'home', label: 'Home', icon: Home },
  { key: 'projects', label: 'Projects', icon: Code },
  { key: 'blog', label: 'Blog', icon: PenTool },
  { key: 'shop', label: 'Shop', icon: ShoppingBag },
  { key: 'contact', label: 'Contact', icon: Mail },
];

export default function Navbar({ current, onChange }) {
  return (
    <div className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/70 border-b border-black/10">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-semibold tracking-tight text-lg"
          style={{ color: '#1E4841' }}
        >
          <span className="mr-2">⚡</span> Founder • Full‑stack • UI/UX
        </motion.div>
        <ul className="flex items-center gap-1">
          {navItems.map(({ key, label, icon: Icon }) => {
            const active = current === key;
            return (
              <motion.li key={key} whileHover={{ y: -2 }}>
                <button
                  onClick={() => onChange(key)}
                  className={`group relative px-3 sm:px-4 py-2 rounded-full flex items-center gap-2 transition-colors ${
                    active ? 'text-black' : 'text-black/70'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="pill"
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: '#E4F223' }}
                      transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                    />
                  )}
                  <span className="relative z-10">
                    <Icon size={18} />
                  </span>
                  <span className="relative z-10 hidden sm:inline-block font-medium">{label}</span>
                </button>
              </motion.li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
