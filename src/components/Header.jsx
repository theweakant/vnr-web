import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, BookOpen } from 'lucide-react';
import { Button, Container } from './ui';
import useActiveSection from '../hooks/useActiveSection';
import { useNavigate } from 'react-router-dom';
import vnrLogo from '../assets/vnr_logo.jpg'; 

const navSections = [
  { id: 'hero', label: 'Trang Chủ' },
  { id: 'timeline', label: 'Bối cảnh' },
  { id: 'quan-diem', label: 'Quan điểm' },
  { id: 'nhiem-vu', label: 'Nhiệm vụ' },
  { id: 'dot-pha', label: 'Đột phá' },
  { id: 'stats', label: 'Số liệu' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const active = useActiveSection(navSections.map(s => s.id));

  const navigate = useNavigate();

  const handleScrollTo = (id) => {
    setIsOpen(false);
    // If the timeline/tab is requested, navigate to dedicated route
    if (id === 'timeline') {
      navigate('/timeline');
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // If not on the homepage, navigate to home with hash
      navigate('/');
      // small delay to allow route change then scroll
      setTimeout(() => {
        const target = document.getElementById(id);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <Container className="py-3 flex justify-between items-center">
        <button 
          onClick={() => navigate('/')} 
          className="flex items-center gap-3 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 rounded-lg"
          aria-label="Về trang chủ"
        >
          {/* Logo Image */}
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="w-6 h-6 rounded-lg overflow-hidden shadow-md flex-shrink-0"
          >
            <img 
              src={vnrLogo} 
              alt="VNR202 Logo" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Text */}
          <div>
            <div className="text-lg font-bold text-slate-900">Đại hội XIII</div>
            <div className="text-xs text-slate-500">Khát vọng phát triển Việt Nam</div>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-2" aria-label="Main navigation">
          {navSections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleScrollTo(s.id)}
              className={`px-3 py-2 rounded-md text-sm font-medium focus:outline-none ${active === s.id ? 'text-red-700 bg-red-50' : 'text-slate-700 hover:bg-slate-50'}`}
              aria-current={active === s.id ? 'page' : undefined}
            >
              {s.label}
            </button>
          ))}
        </nav>

        <div className="md:hidden">
          <motion.button onClick={() => setIsOpen(!isOpen)} whileTap={{ scale: 0.95 }} aria-expanded={isOpen} aria-controls="mobile-menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </Container>

      {isOpen && (
        <nav id="mobile-menu" className="md:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-4 space-y-2">
            {navSections.map((s) => (
              <button key={s.id} onClick={() => handleScrollTo(s.id)} className="w-full text-left px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-50">
                {s.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;