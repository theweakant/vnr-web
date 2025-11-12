import React from 'react';

const TimelineItem = ({ year, label, isLast }) => (
  <div className="flex items-start md:items-center md:space-x-4">
    <div className="flex flex-col items-center md:flex-row md:items-center">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-semibold shadow">{year}</div>
      {!isLast && <div className="hidden md:block w-24 h-0.5 bg-slate-200 mx-4" />}
    </div>
    <div className="mt-3 md:mt-0">
      <div className="text-sm md:text-base font-semibold text-slate-900">{label}</div>
    </div>
  </div>
);

export default function TimelineTab({ milestones = [] }) {
  return (
    <div className="w-full">
      {/* Mobile: vertical timeline */}
      <div className="md:hidden space-y-6">
        {milestones.map((m, i) => (
          <div key={m.year} className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">{m.year}</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">{m.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: horizontal timeline */}
      <div className="hidden md:block">
        <div className="flex items-center gap-6 overflow-x-auto py-4 px-2">
          {milestones.map((m, i) => (
            <div key={m.year} className="flex items-center min-w-[220px]">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold mr-4">{m.year}</div>
                <div className="text-sm text-slate-800">{m.label}</div>
              </div>
              {i < milestones.length - 1 && <div className="flex-1 h-px bg-slate-200 ml-6 mr-6" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
