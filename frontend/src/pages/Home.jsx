import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Github, ArrowRight, Code2, Server, Sparkles, Mail } from "lucide-react";
import { motion } from "framer-motion";
import CommandPlayground from "../components/CommandPlayground";

const projects = [
  {
    title: "Interactive Portfolio",
    description: "An online portfolio showcasing my work and projects.",
    tag: "Web / Portfolio",
    link: null,
  },
  {
    title: "Dev Dashboard",
    description: "A frontend command center with mock GitHub activity, live-looking metrics, and polished widgets.",
    tag: "Web / Dashboard",
    link: "/dashboard",
  },
  {
    title: "Work on Roblox",
    description: "Numerous projects and games developed on the Roblox platform, utilizing Lua scripting.",
    tag: "Web / Coding / Gaming",
    link: null,
  },
];

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const [accent, setAccent] = useState("blue");

  const accentStyles = useMemo(() => {
    if (accent === "purple") {
      return {
        accentText: "text-fuchsia-300",
        accentTag: "bg-fuchsia-500/10 text-fuchsia-300",
        accentButton: "hover:text-fuchsia-300",
        glow: "radial-gradient(circle_at_top_right,rgba(217,70,239,0.22),transparent_35%),radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_30%)",
      };
    }

    return {
      accentText: "text-blue-300",
      accentTag: "bg-blue-500/10 text-blue-300",
      accentButton: "hover:text-blue-300",
      glow: "radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_top_left,rgba(168,85,247,0.2),transparent_30%)",
    };
  }, [accent]);

  const themeStyles = useMemo(() => {
    if (theme === "light") {
      return {
        main: "bg-zinc-100 text-zinc-950",
        card: "border-black/10 bg-white/80",
        softCard: "border-black/10 bg-white/70",
        navLogo: "bg-zinc-950 text-white",
        pill: "border-black/10 bg-black/[0.03] text-zinc-700",
        bodyText: "text-zinc-600",
        footerText: "text-zinc-600",
        heroPanel: "bg-zinc-950 text-zinc-100",
      };
    }

    if (theme === "matrix") {
      return {
        main: "bg-[#020a02] text-[#d8ffe1]",
        card: "border-emerald-500/20 bg-emerald-500/[0.05]",
        softCard: "border-emerald-500/20 bg-emerald-500/[0.04]",
        navLogo: "bg-emerald-300 text-[#031403]",
        pill: "border-emerald-500/20 bg-emerald-500/[0.06] text-emerald-100/80",
        bodyText: "text-emerald-100/70",
        footerText: "text-emerald-100/60",
        heroPanel: "bg-[#031403] text-emerald-100",
      };
    }

    return {
      main: "bg-zinc-950 text-white",
      card: "border-white/10 bg-white/5",
      softCard: "border-white/10 bg-white/[0.04]",
      navLogo: "bg-white text-zinc-950",
      pill: "border-white/10 bg-white/5 text-zinc-300",
      bodyText: "text-zinc-300",
      footerText: "text-zinc-400",
      heroPanel: "bg-zinc-900 text-zinc-300",
    };
  }, [theme]);

  return (
    <main className={`min-h-screen transition-colors duration-300 ${themeStyles.main}`}>
      <section className="relative overflow-hidden px-6 py-8 md:px-12 lg:px-20">
        <div className="absolute inset-0 -z-10" style={{ backgroundImage: accentStyles.glow }} />

        <nav className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-4 backdrop-blur ${themeStyles.card}`}>
          <div className="flex items-center gap-2 font-semibold">
            <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${themeStyles.navLogo}`}>H</div>
            <span>HaydenMcVay.com</span>
          </div>
          <Link to="/dashboard" className={`rounded-full px-4 py-2 text-sm transition hover:bg-white/10 ${accentStyles.accentText}`}>
            Open dashboard
          </Link>
        </nav>

        <div className="mx-auto grid max-w-6xl items-center gap-12 py-24 md:grid-cols-2 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-2xl md:mr-8"
          >
            <div className={`mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm ${themeStyles.pill}`}>
              <Sparkles size={16} />
              A virtual portfolio walkthrough
            </div>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Hayden McVay.
              <br />
              <span className="text-4xl align-top md:text-6xl">Software Developer.</span>
            </h1>
            <p className={`mt-6 max-w-xl text-lg leading-8 ${themeStyles.bodyText}`}>
              A modern portfolio starter for showcasing projects, live demos, GitHub repos, and future AI or server-side experiments.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-medium text-zinc-950 transition hover:bg-zinc-200">
                View projects <ArrowRight size={18} />
              </a>
              <Link to="/dashboard" className={`inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium transition hover:bg-white/10 ${themeStyles.card}`}>
                Explore dashboard <ArrowRight size={18} />
              </Link>
              <a href="https://github.com/HaydenMcVay" target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium transition hover:bg-white/10 ${themeStyles.card}`}>
                <Github size={18} /> GitHub
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className={`w-full rounded-3xl p-5 shadow-2xl backdrop-blur ${themeStyles.card}`}>
            <div className={`rounded-2xl p-5 font-mono text-sm transition-colors duration-300 ${themeStyles.heroPanel}`}>
              <div className="mb-4 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <p className="text-blue-300">const portfolio = &#123;</p>
              <p className="ml-4">
                name: <span className="text-green-300">"Hayden"</span>,
              </p>
              <p className="ml-4">
                focus: <span className="text-green-300">"Web Apps + Open Source APIs"</span>,
              </p>
              <p className="ml-4">
                status: <span className="text-green-300">"Deploying"</span>,
              </p>
              <p className="ml-4">
                projects: [<span className="text-purple-300">"Portfolio"</span>, <span className="text-purple-300">"APIs"</span>, <span className="text-purple-300">"Servers"</span>]
              </p>
              <p className="text-blue-300">&#125;;</p>
            </div>
          </motion.div>
        </div>
      </section>

      <CommandPlayground theme={theme} accent={accent} onThemeChange={setTheme} onAccentChange={setAccent} />

      <section id="projects" className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className={`text-sm font-medium uppercase tracking-widest ${accentStyles.accentText}`}>Projects</p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">Featured work</h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className={`rounded-3xl p-6 transition hover:-translate-y-1 hover:bg-white/[0.07] ${themeStyles.softCard}`}>
                <span className={`rounded-full px-3 py-1 text-sm ${accentStyles.accentTag}`}>{project.tag}</span>
                <h3 className="mt-5 text-xl font-semibold">{project.title}</h3>
                <p className={`mt-3 leading-7 ${themeStyles.footerText}`}>{project.description}</p>
                {project.link && (
                  <Link to={project.link} className={`mt-6 inline-flex items-center gap-2 text-sm font-medium ${accentStyles.accentButton}`}>
                    Live demo <ArrowRight size={15} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className={`text-sm font-medium uppercase tracking-widest ${accentStyles.accentText}`}>Experience</p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">What I&apos;ve built</h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className={`rounded-3xl p-6 ${themeStyles.softCard}`}>
              <h3 className="text-xl font-semibold">Web Applications</h3>
              <p className={`mt-3 ${themeStyles.footerText}`}>Built responsive web apps, developer tools, and portfolio experiences using modern full-stack technologies.</p>
            </div>
            <div className={`rounded-3xl p-6 ${themeStyles.softCard}`}>
              <h3 className="text-xl font-semibold">Developer Tools</h3>
              <p className={`mt-3 ${themeStyles.footerText}`}>Created automation utilities, interactive browser-based tools, and CLI-inspired web experiences.</p>
            </div>
            <div className={`rounded-3xl p-6 ${themeStyles.softCard}`}>
              <h3 className="text-xl font-semibold">Systems Programming</h3>
              <p className={`mt-3 ${themeStyles.footerText}`}>Worked with memory interaction, real-time tooling automation systems, and performance-focused software projects.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="stack" className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className={`text-sm font-medium uppercase tracking-widest ${accentStyles.accentText}`}>What I&apos;ve Used</p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">Tools and technologies</h2>
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className={`rounded-3xl p-6 ${themeStyles.softCard}`}>
            <Code2 className="mb-4" />
            <h3 className="text-xl font-semibold">Frontend</h3>
            <p className={`mt-3 ${themeStyles.footerText}`}>React, Next.js, Tailwind, TypeScript</p>
          </div>
          <div className={`rounded-3xl p-6 ${themeStyles.softCard}`}>
            <Server className="mb-4" />
            <h3 className="text-xl font-semibold">Backend</h3>
            <p className={`mt-3 ${themeStyles.footerText}`}>Node.js, APIs, PostgreSQL, Docker</p>
          </div>
          <div className={`rounded-3xl p-6 ${themeStyles.softCard}`}>
            <Sparkles className="mb-4" />
            <h3 className="text-xl font-semibold">Development</h3>
            <p className={`mt-3 ${themeStyles.footerText}`}>Git, GitHub, Linux, VS Code, CLI Tooling</p>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-white/10 px-6 py-10 md:px-12 lg:px-20">
        <div className={`mx-auto flex max-w-6xl flex-col justify-between gap-4 md:flex-row md:items-center ${themeStyles.footerText}`}>
          <p>© 2026 Hayden McVay. Built with React + Tailwind.</p>
          <a href="mailto:hm68s@missouristate.edu" className="inline-flex items-center gap-2 hover:text-white">
            <Mail size={16} /> hm68s@missouristate.edu
          </a>
        </div>
      </footer>
    </main>
  );
}
