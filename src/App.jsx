import { useState, useMemo } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import SectionGrid from './components/SectionGrid.jsx';
import ContactForm from './components/ContactForm.jsx';
import ProjectHoverList from './components/ProjectHoverList.jsx';

function App() {
  const [page, setPage] = useState('home');

  const projects = useMemo(() => [
    {
      title: 'Realtime Collaboration Suite',
      excerpt: 'CRDT-powered documents with buttery-smooth interactions and offline sync.',
      image: 'https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSZWFsdGltZSUyMENvbGxhYm9yYXRpb24lMjBTdWl0ZXxlbnwwfDB8fHwxNzYyMjMxODI1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      badge: 'Featured',
      link: '#',
      source: '#',
    },
    {
      title: 'Design Token System',
      excerpt: 'Cross-platform theming pipeline connected to Figma and CI.',
      image: 'https://images.unsplash.com/photo-1642734985159-70a6ab9bb15f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEZXNpZ24lMjBUb2tlbiUyMFN5c3RlbXxlbnwwfDB8fHwxNzYyMjMxODI2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      badge: 'Design + Dev',
      link: '#',
      source: '#',
    },
    {
      title: 'Edge AI Experiments',
      excerpt: 'On-device model inference with web-friendly performance budgets.',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1200&auto=format&fit=crop',
      badge: 'Lab',
      link: '#',
      source: '#',
    },
  ], []);

  const posts = useMemo(() => [
    {
      title: 'Micro‑interactions that don’t tank performance',
      excerpt: 'A measured approach to delight, powered by motion primitives and constraints.',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
      link: '#',
    },
    {
      title: 'Full‑stack patterns for founder‑led teams',
      excerpt: 'From zero to revenue: shipping without the overhead.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
      link: '#',
    },
    {
      title: 'Design tokens: the single source of visual truth',
      excerpt: 'Scaling UI across platforms with confidence.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
      link: '#',
    },
  ], []);

  const products = useMemo(() => [
    {
      title: 'UI Motion Presets',
      excerpt: 'Production‑ready Framer Motion variants for common patterns.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop',
      price: '$19',
      link: '#',
    },
    {
      title: 'Founders’ UI Kit',
      excerpt: 'Minimal, accessible components tuned for speed.',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
      price: '$29',
      link: '#',
    },
    {
      title: 'Workshop: Ship with Motion',
      excerpt: 'Learn to add delightful interactions without hurting performance.',
      image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
      price: '$49',
      link: '#',
    },
  ], []);

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar current={page} onChange={setPage} />

      {page === 'home' && (
        <>
          <Hero onPrimaryAction={() => setPage('projects')} />
          <ProjectHoverList items={projects} />
        </>
      )}

      {page === 'projects' && (
        <SectionGrid
          title="Projects"
          description="From experiments to revenue‑backed products."
          items={projects}
          type="project"
        />
      )}

      {page === 'blog' && (
        <SectionGrid
          title="Blog"
          description="Notes on product, engineering, and design."
          items={posts}
          type="blog"
        />
      )}

      {page === 'shop' && (
        <SectionGrid
          title="Shop"
          description="Simple, practical resources. Instant access."
          items={products}
          type="shop"
        />
      )}

      {page === 'contact' && <ContactForm />}

      <footer className="border-t border-black/10 py-10 mt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-black/60">© {new Date().getFullYear()} • Built with care and performance in mind.</p>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: '#E4F223', color: '#1E4841' }}>Primary</span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: '#1E4841' }}>Secondary</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
