import React from "react";
import { PauseCircle, PlayCircle } from "lucide-react";
import GlassPanel from "./GlassPanel";

export default function SpotifyWidget({ track }) {
  return (
    <GlassPanel eyebrow="Spotify Presence" title="Now playing">
      <div className="flex gap-4">
        <div className="flex h-24 w-24 shrink-0 items-end rounded-3xl bg-[linear-gradient(145deg,#0f172a,#2563eb,#34d399)] p-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/70">{track.album}</p>
            <p className="mt-1 text-lg font-semibold text-white">SM</p>
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="truncate text-lg font-semibold text-white">{track.title}</h3>
              <p className="mt-1 truncate text-sm text-zinc-400">{track.artist}</p>
            </div>
            {track.isPlaying ? <PauseCircle className="text-emerald-300" /> : <PlayCircle className="text-zinc-400" />}
          </div>

          <div className="mt-5">
            <div className="h-2 rounded-full bg-white/5">
              <div className="h-2 rounded-full bg-emerald-400" style={{ width: `${track.progress}%` }} />
            </div>
            <div className="mt-2 flex justify-between text-xs text-zinc-500">
              <span>{track.currentTime}</span>
              <span>{track.duration}</span>
            </div>
          </div>
        </div>
      </div>
    </GlassPanel>
  );
}
