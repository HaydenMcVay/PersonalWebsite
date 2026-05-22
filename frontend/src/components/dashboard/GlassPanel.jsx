import React from "react";

export default function GlassPanel({ title, eyebrow, action, className = "", children }) {
  return (
    <section className={`rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur ${className}`}>
      {(title || eyebrow || action) && (
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            {eyebrow ? <p className="text-xs uppercase tracking-[0.25em] text-blue-300">{eyebrow}</p> : null}
            {title ? <h2 className="mt-2 text-xl font-semibold text-white">{title}</h2> : null}
          </div>
          {action}
        </div>
      )}
      {children}
    </section>
  );
}
