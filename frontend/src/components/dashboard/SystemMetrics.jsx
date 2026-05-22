import React, { useEffect, useState } from "react";
import { Activity } from "lucide-react";
import GlassPanel from "./GlassPanel";

function nextMetricValue(metric) {
  if (metric.label === "Requests") {
    return Math.max(120, Math.min(240, metric.value + Math.round((Math.random() - 0.5) * 24)));
  }

  if (metric.label === "Network") {
    return Math.max(8, Math.min(40, metric.value + Math.round((Math.random() - 0.5) * 6)));
  }

  return Math.max(12, Math.min(95, metric.value + Math.round((Math.random() - 0.5) * 10)));
}

export default function SystemMetrics({ initialMetrics }) {
  const [metrics, setMetrics] = useState(initialMetrics);
  const [uptimeMinutes, setUptimeMinutes] = useState(286);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setMetrics((current) => current.map((metric) => ({ ...metric, value: nextMetricValue(metric) })));
      setUptimeMinutes((current) => current + 1);
    }, 1400);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <GlassPanel eyebrow="System Metrics" title="Live-looking frontend telemetry">
      <div className="grid gap-4 sm:grid-cols-2">
        {metrics.map((metric) => {
          const percent = metric.label === "Requests" ? metric.value / 2.4 : metric.label === "Network" ? metric.value * 2.5 : metric.value;

          return (
            <div key={metric.label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm text-zinc-400">{metric.label}</p>
                <Activity size={14} className="text-blue-300" />
              </div>
              <p className="mt-3 text-2xl font-semibold text-white">
                {metric.value}
                <span className="ml-1 text-base text-zinc-500">{metric.unit}</span>
              </p>
              <div className="mt-3 h-2 rounded-full bg-white/5">
                <div className="h-2 rounded-full bg-blue-400 transition-all duration-700" style={{ width: `${Math.min(percent, 100)}%` }} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
        <p className="text-sm text-zinc-400">Uptime</p>
        <p className="mt-2 text-2xl font-semibold text-white">
          {Math.floor(uptimeMinutes / 60)}h {uptimeMinutes % 60}m
        </p>
        <p className="mt-2 text-sm text-zinc-500">Mock client metrics now, ready to swap to real monitoring data later.</p>
      </div>
    </GlassPanel>
  );
}
