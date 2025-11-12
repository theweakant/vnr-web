import React from 'react';
import { Target, Network, Users, Zap } from 'lucide-react';

const items = [
  { icon: Target, title: 'Kiên định Nguyên tắc', desc: 'Kiên định và vận dụng chủ nghĩa Mác-Lênin, tư tưởng Hồ Chí Minh.' },
  { icon: Network, title: 'Mối quan hệ', desc: 'Gắn kết phát triển kinh tế - xã hội với xây dựng Đảng và văn hóa.' },
  { icon: Users, title: 'Nguồn lực', desc: 'Kết hợp sức mạnh dân tộc và sức mạnh thời đại; con người là trọng tâm.' },
  { icon: Zap, title: 'Động lực mới', desc: 'Ứng dụng CMCN 4.0, phát triển kinh tế số và chuyển đổi số.' },
];

export default function InfoGrid() {
  return (
    <section id="quan-diem" aria-label="4 Quan Điểm" className="py-12 md:py-20 bg-gradient-to-r from-red-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">4 Quan Điểm Chỉ Đạo</h2>
          <p className="text-slate-600 mt-2">Những quan điểm cốt lõi chỉ đạo Đại hội XIII</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => {
            const Icon = it.icon;
            return (
              <article key={idx} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition" aria-labelledby={`qd-${idx}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-red-100 text-red-600 flex items-center justify-center">
                    <Icon className="w-6 h-6" aria-hidden/>
                  </div>
                  <h3 id={`qd-${idx}`} className="text-lg font-semibold">{it.title}</h3>
                </div>
                <p className="text-slate-600 text-sm">{it.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li>• Mô tả ngắn gọn và dễ hiểu</li>
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
