import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Bell, LayoutDashboard } from "lucide-react";

export default function DashboardTopbar() {
  return (
    <div className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-zinc-950">
          <LayoutDashboard size={18} />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-blue-300">Dev Command Center</p>
          <h1 className="mt-1 text-3xl font-bold text-white md:text-4xl">Dashboard</h1>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
          <Bell size={14} />
          Frontend prototype online
        </div>
        <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-200 transition hover:bg-white/10">
          <ArrowLeft size={15} />
          Home
        </Link>
      </div>
    </div>
  );
}
