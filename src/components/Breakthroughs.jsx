import React from 'react';

const items = [
  { id: 1, title: 'Hoàn thiện Thể chế', desc: 'Hoàn thiện đồng bộ thể chế phát triển; đổi mới quản trị quốc gia.' },
  { id: 2, title: 'Phát triển Nguồn Nhân lực', desc: 'Phát triển nhân lực chất lượng cao; nâng cao chất lượng giáo dục.' },
  { id: 3, title: 'Hạ tầng đồng bộ, hiện đại', desc: 'Chú trọng hạ tầng thông tin, viễn thông làm nền tảng chuyển đổi số.' },
];

export default function Breakthroughs() {
  return (
    <section id="dot-pha" aria-label="3 đột phá chiến lược" className="py-12 md:py-20 bg-gradient-to-r from-yellow-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Ba Đột Phá Chiến Lược</h2>
          <p className="text-slate-600 mt-2">Những đột phá để đưa tầm nhìn thành hiện thực</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <article key={it.id} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition" aria-labelledby={`bp-${it.id}`}>
              <div className="mb-4 h-14 w-14 rounded-lg bg-gradient-to-br from-blue-400 to-violet-500 flex items-center justify-center text-white font-bold">{it.id}</div>
              <h3 id={`bp-${it.id}`} className="text-xl font-semibold mb-2">{it.title}</h3>
              <p className="text-slate-700">{it.desc}</p>
              <div className="mt-4 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-400 to-violet-500 w-3/4 animate-fade-in-up" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
