import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui';

// Hero tailored to Đại hội XIII design: red->yellow gradient, star motif, CTA to timeline
export default function Hero() {
  return (
    <header
      role="banner"
      className="relative min-h-[70vh] md:min-h-[85vh] flex items-center"
      aria-label="Hero - Đại hội XIII"
    >
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #DC2626 0%, #EF4444 50%, #FBBF24 100%)',
        }}
        aria-hidden
      />

      {/* decorative star pattern */}
      <svg
        className="absolute left-4 top-6 opacity-10 w-96 h-96 pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="g" x1="0%" x2="100%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#EF4444" />
          </linearGradient>
        </defs>
        <g fill="url(#g)">
          <circle cx="40" cy="40" r="6" />
          <circle cx="80" cy="20" r="4" />
          <circle cx="120" cy="60" r="8" />
          <circle cx="160" cy="30" r="5" />
          <circle cx="30" cy="120" r="7" />
        </g>
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-white/12 backdrop-blur rounded-full px-3 py-1 mb-6"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            aria-hidden
          >
            <span className="text-sm font-semibold">Đại hội Đảng XIII • 2021</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Khát Vọng Phát Triển
            <br />
            <span className="gradient-text">Việt Nam Phồn Vinh</span>
          </h1>

          <p className="text-lg md:text-2xl opacity-95 mb-6">
            35 năm Đổi Mới • Tầm nhìn 2045
          </p>

          <div className="flex items-center justify-center gap-4">
            <p className="text-sm md:text-base" aria-hidden>
              25/1 - 1/2/2021 | Hà Nội
            </p>
            <a href="#timeline" className="inline-block" aria-label="Chuyển đến timeline">
              <Button size="lg" variant="outline" className="text-white border-white/40">
                Khám phá ngay ↓
              </Button>
            </a>
          </div>

          <div className="mt-8" aria-hidden>
            <span className="inline-block w-10 h-10 rounded-full bg-white/20 animate-float" />
          </div>
        </motion.div>
      </div>
    </header>
  );
}
