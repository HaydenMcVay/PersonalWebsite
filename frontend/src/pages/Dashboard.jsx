import React from "react";
import { motion } from "framer-motion";
import DashboardTopbar from "../components/dashboard/DashboardTopbar";
import GitHubPanel from "../components/dashboard/GitHubPanel";
import { fetchGitHubStats } from "../components/dashboard/mockData";
import { useEffect, useState } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55 },
};

export default function Dashboard() {
  const [githubStats, setGithubStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGitHubStats().then((data) => {
      setGithubStats(data);
      setLoading(false);
    });
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-zinc-950 px-6 py-8 text-white md:px-12 lg:px-20">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_bottom_center,rgba(34,197,94,0.1),transparent_30%)",
        }}
      />

      <div className="mx-auto max-w-7xl space-y-6">
        <motion.div {...fadeUp}>
          <DashboardTopbar />
        </motion.div>

        <motion.div {...fadeUp} transition={{ duration: 0.55, delay: 0.08 }}>
          {loading || !githubStats ? (
            <div className="rounded-3xl border border-white/10 bg-black/20 p-8 text-center text-lg text-zinc-400">Loading GitHub data...</div>
          ) : (
            <GitHubPanel stats={githubStats} />
          )}
        </motion.div>
      </div>
    </main>
  );
}
