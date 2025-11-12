import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Star } from 'lucide-react';

const milestones = [
  { year: 1986, title: 'Khởi đầu Đổi Mới', desc: 'Đại hội VI mở ra đường lối đổi mới, khởi động chuyển đổi kinh tế xã hội.' },
  { year: 1991, title: 'Đại hội VII', desc: 'Khẳng định kinh tế thị trường định hướng XHCN.' },
  { year: 2006, title: 'Đại hội X', desc: 'Đẩy mạnh công nghiệp hóa, hiện đại hóa.' },
  { year: 2011, title: 'Đại hội XI', desc: 'Tập trung phát triển bền vững.' },
  { year: 2016, title: 'Đại hội XII', desc: 'Hội nhập quốc tế, nâng cao chất lượng tăng trưởng.' },
  { year: 2021, title: 'Đại hội XIII', desc: 'Tầm nhìn đến 2045; 6 nhiệm vụ trọng tâm.' },
  { year: 2030, title: 'Mục tiêu trung hạn', desc: 'Mốc phát triển tiếp theo.' },
  { year: 2045, title: 'Tầm nhìn 100 năm', desc: 'Đến năm 2045 đạt mục tiêu phát triển nền kinh tế xã hội.' },
];

export default function Timeline() {
  const [active, setActive] = useState(5);

  return (
    <section id="timeline" aria-label="Timeline" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Hành Trình 35 Năm Đổi Mới</h2>
          <p className="text-slate-600 mt-2">Từ 1986 đến tầm nhìn 2045 — điểm mốc quan trọng của lịch sử</p>
        </div>

        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-slate-200 h-full" />

            <div className="space-y-12">
              {milestones.map((m, idx) => (
                <motion.div
                  key={m.year}
                  className={`flex items-center w-full ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="w-1/2 px-6">
                    {idx % 2 === 0 && (
                      <motion.div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer" onClick={() => setActive(idx)}>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-red-50 text-red-600 font-bold">{m.year}</div>
                          <h3 className="text-lg font-semibold">{m.title}</h3>
                        </div>
                        <p className="text-sm text-slate-600">{m.desc}</p>
                      </motion.div>
                    )}
                  </div>

                  <div className="w-12 flex items-center justify-center z-10">
                    <div className={`rounded-full w-6 h-6 ${idx === active ? 'bg-red-600 shadow-glow' : 'bg-white border border-slate-200'}`} aria-hidden>
                    </div>
                  </div>

                  <div className="w-1/2 px-6">
                    {idx % 2 !== 0 && (
                      <motion.div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer" onClick={() => setActive(idx)}>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-red-50 text-red-600 font-bold">{m.year}</div>
                          <h3 className="text-lg font-semibold">{m.title}</h3>
                        </div>
                        <p className="text-sm text-slate-600">{m.desc}</p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-bold">{milestones[active].title} — {milestones[active].year}</h4>
              <p className="text-slate-700 mt-2">{milestones[active].desc}</p>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="overflow-x-auto py-4 -mx-4 px-4">
            <div className="flex gap-4 w-max">
              {milestones.map((m, idx) => (
                <div key={m.year} className={`min-w-[160px] bg-white p-4 rounded-xl shadow-md cursor-pointer ${idx===active? 'ring-2 ring-red-400':'ring-0'}`} onClick={() => setActive(idx)} role="button" tabIndex={0} aria-pressed={idx===active}>
                  <div className="text-sm text-red-600 font-bold mb-1">{m.year}</div>
                  <div className="font-semibold">{m.title}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-white p-4 rounded-xl shadow-md">
              <h4 className="font-bold">{milestones[active].title} — {milestones[active].year}</h4>
              <p className="text-slate-700 mt-2">{milestones[active].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
