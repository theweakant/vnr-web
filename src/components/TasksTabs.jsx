import React, { useState } from 'react';
import { Button } from './ui';

const tasks = [
  { id: 1, title: 'Xây dựng Đảng và Hệ thống Chính trị', color: 'from-red-400 to-red-600', desc: 'Tiếp tục đẩy mạnh xây dựng, chỉnh đốn Đảng; xây dựng Nhà nước pháp quyền XHCN.' },
  { id: 2, title: 'Phục hồi và phát triển Kinh tế - Xã hội', color: 'from-blue-400 to-blue-600', desc: 'Tập trung phục hồi, thúc đẩy chuyển đổi số và năng suất.' },
  { id: 3, title: 'Quốc phòng, An ninh và Đối ngoại', color: 'from-sky-400 to-sky-600', desc: 'Giữ vững độc lập, tự chủ; nâng cao hiệu quả đối ngoại.' },
  { id: 4, title: 'Văn hóa và Con người', color: 'from-amber-400 to-amber-600', desc: 'Khơi dậy khát vọng phát triển, chú trọng giáo dục và văn hóa.' },
  { id: 5, title: 'Hoàn thiện Dân chủ', color: 'from-violet-400 to-violet-600', desc: 'Hoàn thiện hệ thống pháp luật, phát huy quyền làm chủ của nhân dân.' },
  { id: 6, title: 'Môi trường và Tài nguyên', color: 'from-emerald-400 to-emerald-600', desc: 'Quản lý chặt chẽ đất đai; bảo vệ, cải thiện môi trường.' },
];

export default function TasksTabs() {
  const [active, setActive] = useState(1);

  return (
    <section id="nhiem-vu" aria-label="6 nhiệm vụ trọng tâm" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Sáu Nhiệm Vụ Trọng Tâm (2021–2025)</h2>
          <p className="text-slate-600 mt-2">Những nhiệm vụ then chốt để thực hiện tầm nhìn</p>
        </div>

        <div className="hidden md:block">
          <div className="flex gap-3 mb-6 justify-center" role="tablist" aria-label="Nhiệm vụ chính">
            {tasks.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={active === t.id}
                aria-controls={`task-panel-${t.id}`}
                onClick={() => setActive(t.id)}
                className={`px-4 py-2 rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 ${active===t.id? 'bg-gradient-to-r '+t.color+' text-white shadow-lg':'bg-white text-slate-700 border border-slate-200'}`}
              >
                {t.id}. {t.title}
              </button>
            ))}
          </div>

          <div>
            {tasks.map((t) => (
              <div key={t.id} id={`task-panel-${t.id}`} role="tabpanel" hidden={active!==t.id} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-2">{t.title}</h3>
                <p className="text-slate-700">{t.desc}</p>
                <ul className="mt-4 list-disc pl-5 text-slate-700">
                  <li>Ý chính 1</li>
                  <li>Ý chính 2</li>
                  <li>Ý chính 3</li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: accordion style */}
        <div className="md:hidden space-y-3">
          {tasks.map((t) => (
            <details key={t.id} className="bg-white rounded-xl p-4 shadow-sm">
              <summary className="font-semibold cursor-pointer">{t.id}. {t.title}</summary>
              <div className="mt-3 text-slate-700">
                <p>{t.desc}</p>
                <ul className="mt-3 list-disc pl-5">
                  <li>Ý chính 1</li>
                  <li>Ý chính 2</li>
                </ul>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
