import React from "react";
import GlassPanel from "./GlassPanel";

export default function ActivityFeed({ items }) {
  return (
    <GlassPanel eyebrow="Activity Feed" title="Recent timeline" className="h-full">
      <div className="space-y-4">
        {items.map((item) => (
          <div key={`${item.time}-${item.detail}`} className="flex gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 font-mono text-sm text-blue-300">
              {item.time}
            </div>
            <div>
              <p className="font-medium text-white">{item.text}</p>
              <p className="mt-1 text-sm text-zinc-400">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </GlassPanel>
  );
}
