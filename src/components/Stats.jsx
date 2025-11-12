import React, { useEffect, useRef, useState } from 'react';

function useCountUp(target, duration = 1400, play) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!play) return;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) window.requestAnimationFrame(step);
      else setValue(target);
    };
    window.requestAnimationFrame(step);
  }, [target, duration, play]);
  return value;
}

export default function Stats() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      });
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const a = useCountUp(35, 1200, visible);
  const b = useCountUp(13, 1200, visible);
  const c = useCountUp(2045, 1200, visible);
  const d = useCountUp(6, 1200, visible);

  const stats = [
    { number: a, label: 'Năm Đổi Mới' },
    { number: b, label: 'Đại Hội' },
    { number: c, label: 'Tầm Nhìn Đến' },
    { number: d, label: 'Nhiệm Vụ' },
  ];

  return (
    <section id="stats" aria-label="Stats" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, idx) => (
            <div key={idx} className="bg-gradient-to-br from-red-50 to-yellow-50 p-6 rounded-xl">
              <div className="text-3xl md:text-4xl font-extrabold text-red-600">{s.number}</div>
              <div className="text-sm text-slate-700 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
