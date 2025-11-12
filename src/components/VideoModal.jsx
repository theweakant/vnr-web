import React, { useEffect } from 'react';

export default function VideoModal({ videoId, title, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!videoId) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray/90" onClick={onClose} aria-hidden />

      {/* Modal Container - Full screen approach */}
      <div className="relative w-full h-full max-w-[95vw] max-h-[90vh] mx-auto flex flex-col">
        <div className="bg-slate-900 rounded-xl shadow-2xl overflow-hidden flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700 bg-slate-800 flex-shrink-0">
            <h3 className="text-xl font-semibold text-white">{title || 'Video'}</h3>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white transition-colors p-1 hover:bg-slate-700 rounded-full"
              aria-label="Đóng video"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Video Frame - Takes remaining space */}
          <div className="flex-1 bg-white relative">
            <iframe
              title={title || 'video'}
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}