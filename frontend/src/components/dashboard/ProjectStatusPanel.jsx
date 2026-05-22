import React from "react";
import GlassPanel from "./GlassPanel";

const statusStyles = {
  Active: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
  Planning: "border-amber-400/20 bg-amber-400/10 text-amber-300",
  Prototype: "border-blue-400/20 bg-blue-400/10 text-blue-300",
  Deploying: "border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-300",
};

export default function ProjectStatusPanel({ projects }) {
  return (
    <GlassPanel eyebrow="Project Status" title="Current build lanes">
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.name} className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-semibold text-white">{project.name}</h3>
              <span className={`rounded-full border px-3 py-1 text-xs ${statusStyles[project.status]}`}>{project.status}</span>
            </div>
            <p className="mt-2 text-sm text-zinc-400">{project.summary}</p>
          </div>
        ))}
      </div>
    </GlassPanel>
  );
}
