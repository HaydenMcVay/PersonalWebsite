import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const screenshots = [
  {
    src: "/dugout-dynasty/01-main-menu.png",
    title: "Main Menu",
    description: "The home hub for starting games, managing cards, browsing the market, and moving through a season.",
  },
  {
    src: "/dugout-dynasty/02-team-deck.png",
    title: "Roster Builder",
    description: "A team management screen for organizing starters, relievers, and the rest of your card deck.",
  },
  {
    src: "/dugout-dynasty/03-cards-shop.png",
    title: "Card Shop",
    description: "Pack browsing and league filtering for building out your collection with different player types.",
  },
  {
    src: "/dugout-dynasty/04-league-mode.png",
    title: "League Mode",
    description: "A season flow screen with schedules, rankings, goals, and quick access to your lineup.",
  },
  {
    src: "/dugout-dynasty/05-live-at-bat.png",
    title: "Live At-Bat",
    description: "A zoomed-in gameplay view that frames the pitcher-batter matchup and live inning state.",
  },
  {
    src: "/dugout-dynasty/06-base-hit.png",
    title: "Field Action",
    description: "An on-field view showing defensive positioning, baserunner movement, and live play outcomes.",
  },
];

export default function DugoutDynasty() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-8 text-white md:px-12 lg:px-20">
      <section className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 backdrop-blur-xl md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white">
                <ArrowLeft size={16} />
                Back home
              </Link>
              <p className="mt-6 text-sm font-medium uppercase tracking-[0.35em] text-blue-300">Dugout Dynasty</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">Take A Look</h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
                A quick look through the game&apos;s menus, roster systems, league flow, and on-field action.
              </p>
            </div>

            <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-zinc-200 transition hover:bg-white/10 hover:text-white">
              Explore dashboard <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 grid max-w-6xl gap-8">
        {screenshots.map((shot, index) => (
          <motion.article
            key={shot.src}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_30px_100px_rgba(0,0,0,0.35)]"
          >
            <div className="border-b border-white/10 px-6 py-5">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-300">Screenshot {index + 1}</p>
              <h2 className="mt-2 text-2xl font-semibold">{shot.title}</h2>
              <p className="mt-2 max-w-3xl text-zinc-300">{shot.description}</p>
            </div>

            <div className="bg-zinc-900/70 p-3 md:p-5">
              <img
                src={shot.src}
                alt={`Dugout Dynasty screenshot ${index + 1}: ${shot.title}`}
                className="w-full rounded-[1.5rem] border border-white/10 object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          </motion.article>
        ))}
      </section>
    </main>
  );
}
