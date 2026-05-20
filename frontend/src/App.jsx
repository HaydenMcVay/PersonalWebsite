import React from "react";
import { Github, ExternalLink, Mail, ArrowRight, Code2, Server, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Coding Dashboard",
    description: "A concept dashboard for managing local LLM coding agents and project tasks.",
    tag: "AI / Tools",
  },
  {
    title: "Game API Tracker",
    description: "A web app idea for tracking Roblox, Minecraft, or Steam data from public APIs.",
    tag: "APIs / Gaming",
  },
  {
    title: "Portfolio Hub",
    description: "A central place for projects, experiments, notes, and live demos.",
    tag: "Web / Portfolio",
  },
];

export default function App() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="relative overflow-hidden px-6 py-8 md:px-12 lg:px-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_top_left,rgba(168,85,247,0.2),transparent_30%)]" />

        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
          <div className="flex items-center gap-2 font-semibold">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-zinc-950">H</div>
            <span>Hayden.dev</span>
          </div>
          <div className="hidden gap-6 text-sm text-zinc-300 md:flex">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#stack" className="hover:text-white">Stack</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </nav>

        <div className="mx-auto grid max-w-6xl items-center gap-12 py-24 md:grid-cols-2 md:py-32">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
              <Sparkles size={16} />
              Developer portfolio test site
            </div>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">Building useful web apps, tools, and experiments.</h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">A modern portfolio starter for showcasing projects, live demos, GitHub repos, and future AI or server-side experiments.</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-medium text-zinc-950 transition hover:bg-zinc-200">
                View projects <ArrowRight size={18} />
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10">
                <Github size={18} /> GitHub
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur">
            <div className="rounded-2xl bg-zinc-900 p-5 font-mono text-sm text-zinc-300">
              <div className="mb-4 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <p className="text-blue-300">const portfolio = &#123;</p>
              <p className="ml-4">name: <span className="text-green-300">"Hayden"</span>,</p>
              <p className="ml-4">focus: <span className="text-green-300">"Web Apps + AI Tools"</span>,</p>
              <p className="ml-4">status: <span className="text-green-300">"Deploying"</span>,</p>
              <p className="ml-4">projects: [<span className="text-purple-300">"Portfolio"</span>, <span className="text-purple-300">"APIs"</span>, <span className="text-purple-300">"Servers"</span>]</p>
              <p className="text-blue-300">&#125;;</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-blue-300">Projects</p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">Featured work</h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]">
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-300">{project.tag}</span>
                <h3 className="mt-5 text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{project.description}</p>
                <button className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-300">Live demo <ExternalLink size={15} /></button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <Code2 className="mb-4" />
            <h3 className="text-xl font-semibold">Frontend</h3>
            <p className="mt-3 text-zinc-400">React, Next.js, Tailwind, TypeScript</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <Server className="mb-4" />
            <h3 className="text-xl font-semibold">Backend</h3>
            <p className="mt-3 text-zinc-400">Node.js, APIs, PostgreSQL, Docker</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <Sparkles className="mb-4" />
            <h3 className="text-xl font-semibold">Interests</h3>
            <p className="mt-3 text-zinc-400">Local LLMs, coding agents, automation, homelabs</p>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-white/10 px-6 py-10 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-zinc-400 md:flex-row md:items-center">
          <p>© 2026 Hayden.dev. Built with React + Tailwind.</p>
          <a href="mailto:your@email.com" className="inline-flex items-center gap-2 hover:text-white">
            <Mail size={16} /> your@email.com
          </a>
        </div>
      </footer>
    </main>
  );
}
