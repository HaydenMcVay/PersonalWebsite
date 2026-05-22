import React from "react";
import { GitBranch, Star } from "lucide-react";
import GlassPanel from "./GlassPanel";

function HeatCell({ value }) {
  const shades = [
    "bg-white/[0.04]",
    "bg-blue-500/25",
    "bg-blue-400/40",
    "bg-cyan-400/55",
    "bg-emerald-400/70",
  ];
  const index = Math.min(Math.floor(value / 2), shades.length - 1);

  return <div className={`h-4 rounded-sm ${shades[index]}`} />;
}

export default function GitHubPanel({ stats }) {
  return (
    <GlassPanel eyebrow="GitHub Activity" title="Code velocity and recent work" className="lg:col-span-2">
      {stats.error ? (
        <div className="mb-5 rounded-2xl border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-sm text-amber-200">
          GitHub API note: {stats.error}
        </div>
      ) : null}

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="grid gap-3 sm:grid-cols-3">
            {stats.counters.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm text-zinc-400">{item.label}</p>
                <p className="mt-2 text-2xl font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between text-sm text-zinc-400">
              <span>Contribution graph</span>
              <span>Last 6 weeks</span>
            </div>
            <div className="grid grid-cols-7 gap-2 rounded-2xl border border-white/10 bg-black/20 p-4">
              {stats.activity.map((value, index) => (
                <HeatCell key={index} value={value} />
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {stats.repos.length > 0 ? (
              stats.repos.map((repo) => (
                <div key={repo.name} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-white">{repo.name}</h3>
                      <p className="mt-2 text-sm text-zinc-400">{repo.description}</p>
                    </div>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300">{repo.status}</span>
                  </div>
                  <p className="mt-4 inline-flex items-center gap-2 text-sm text-yellow-300">
                    <Star size={14} />
                    {repo.stars} stars
                  </p>
                </div>
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-white/10 bg-black/20 p-4 text-sm text-zinc-500 md:col-span-3">
                Repo cards will appear here when GitHub data loads successfully.
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm text-zinc-400">Recent commits</p>
            <div className="mt-4 space-y-4">
              {stats.commits.length > 0 ? (
                stats.commits.map((commit) => (
                  <div key={commit.hash} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-2 font-mono text-sm text-blue-300">
                        <GitBranch size={14} />
                        {commit.hash}
                      </span>
                      <span className="text-xs text-zinc-500">{commit.time}</span>
                    </div>
                    <p className="mt-2 text-sm text-zinc-200">{commit.message}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-zinc-500">No recent commits available from the current GitHub response.</p>
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm text-zinc-400">Language usage</p>
            <div className="mt-4 space-y-4">
              {stats.languages.length > 0 ? (
                stats.languages.map((language) => (
                  <div key={language.name}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-zinc-200">{language.name}</span>
                      <span className="text-zinc-500">{language.percent}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5">
                      <div className={`h-2 rounded-full ${language.color}`} style={{ width: `${language.percent}%` }} />
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-zinc-500">Language breakdown unavailable right now.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </GlassPanel>
  );
}
