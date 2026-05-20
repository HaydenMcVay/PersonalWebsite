import React, { useMemo, useRef, useState } from "react";

const THEMES = ["dark", "light", "matrix"];
const ACCENTS = ["blue", "purple", "green", "pink"];

const START_LINES = [
  { type: "text", text: "Welcome to Hayden's command playground." },
  { type: "text", text: "Type `help` to see available commands." },
];

const COMMAND_LIST = [
  "help",
  "about",
  "bio",
  "projects",
  "skills",
  "experience",
  "socials",
  "contact",
  "faq",
  "clear",
  "theme dark",
  "theme light",
  "theme matrix",
  "color blue",
  "color purple",
  "color green",
  "color pink",
  "open github",
  "open linkedin",
];

function buildResponse(command) {
  if (command === "help") {
    return [
      { type: "text", text: "Available commands:" },
      ...COMMAND_LIST.map((item) => ({ type: "text", text: `- ${item}` })),
    ];
  }

  if (command === "about") {
    return [{ type: "text", text: "Hayden builds web apps, tools, and AI-flavored experiments with a clean frontend focus." }];
  }

  if (command === "projects") {
    return [
      { type: "text", text: "Featured projects:" },
      { type: "text", text: "- AI Coding Dashboard" },
      { type: "text", text: "- Game API Tracker" },
      { type: "text", text: "- Portfolio Hub" },
    ];
  }

  if (command === "skills") {
    return [{ type: "text", text: "Stack: React, Tailwind, TypeScript, Node.js, APIs, Docker, and automation experiments." }];
  }

  if (command === "bio") {
    return [
      { type: "text", text: "Hayden is a web developer building polished frontends, automation tools, and AI-enhanced workflows." },
      { type: "text", text: "Focus: React, Tailwind, Node.js, APIs, and modern design systems." },
    ];
  }

  if (command === "experience") {
    return [
      { type: "text", text: "Experience includes building portfolio sites, dashboard prototypes, API-connected utilities, and toolchains for dev workflows." },
    ];
  }

  if (command === "socials") {
    return [
      { type: "text", text: "Social links:" },
      { type: "link", text: "GitHub", href: "https://github.com/HaydenMcVay" },
      { type: "link", text: "LinkedIn", href: "https://www.linkedin.com/in/HaydenMcVay" },
      { type: "link", text: "Twitter", href: "https://twitter.com/HaydenMcVay" },
    ];
  }

  if (command === "faq") {
    return [
      { type: "text", text: "FAQ:" },
      { type: "text", text: "- Q: Can I contact you? A: Yes, use socials or contact commands." },
      { type: "text", text: "- Q: Do you build full-stack apps? A: Yes, with React frontends and Node backends." },
    ];
  }

  if (command === "contact") {
    return [
      { type: "text", text: "Reach out here:" },
      { type: "link", text: "GitHub", href: "https://github.com/HaydenMcVay" },
      { type: "text", text: "Email link can be added once a public address is ready." },
    ];
  }

  return [{ type: "error", text: `Command not found: ${command}` }];
}

export default function CommandPlayground({ accent = "blue", theme = "dark", onThemeChange, onAccentChange }) {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState(START_LINES);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);

  const promptColor = useMemo(() => {
    if (accent === "purple") {
      return "text-fuchsia-300";
    }

    return "text-blue-300";
  }, [accent]);

  const terminalStyles = useMemo(() => {
    if (theme === "light") {
      return {
        shell: "border-black/10 bg-white text-zinc-900",
        muted: "text-zinc-500",
        text: "text-zinc-700",
        input: "text-zinc-950 placeholder:text-zinc-400",
      };
    }

    if (theme === "matrix") {
      return {
        shell: "border-emerald-500/30 bg-[#031403] text-emerald-100",
        muted: "text-emerald-400/70",
        text: "text-emerald-100/90",
        input: "text-emerald-100 placeholder:text-emerald-400/60",
      };
    }

    return {
      shell: "border-white/10 bg-zinc-950/90 text-zinc-200",
      muted: "text-zinc-500",
      text: "text-zinc-300",
      input: "text-zinc-100 placeholder:text-zinc-500",
    };
  }, [theme]);

  function focusInput() {
    inputRef.current?.focus();
  }

  function submitCommand(rawValue) {
    const command = rawValue.trim().toLowerCase().replace(/\s+/g, " ");

    if (!command) {
      return;
    }

    setHistory((current) => [...current, command]);
    setHistoryIndex(-1);

    if (command === "clear") {
      setLines([]);
      setInput("");
      return;
    }

    if (command.startsWith("theme ")) {
      const nextTheme = command.slice("theme ".length);

      if (THEMES.includes(nextTheme)) {
        onThemeChange?.(nextTheme);
        setLines((current) => [
          ...current,
          { type: "command", text: command },
          { type: "success", text: `Theme changed to ${nextTheme}.` },
        ]);
      } else {
        setLines((current) => [
          ...current,
          { type: "command", text: command },
          { type: "error", text: "Theme options: dark, light, matrix" },
        ]);
      }

      setInput("");
      return;
    }

    if (command.startsWith("color ")) {
      const nextColor = command.slice("color ".length);

      if (ACCENTS.includes(nextColor)) {
        onAccentChange?.(nextColor);
        setLines((current) => [
          ...current,
          { type: "command", text: command },
          { type: "success", text: `Accent color changed to ${nextColor}.` },
        ]);
      } else {
        setLines((current) => [
          ...current,
          { type: "command", text: command },
          { type: "error", text: "Color options: blue, purple, green, pink" },
        ]);
      }

      setInput("");
      return;
    }

    if (command === "open github") {
      window.open("https://github.com/HaydenMcVay", "_blank", "noopener,noreferrer");
      setLines((current) => [
        ...current,
        { type: "command", text: command },
        { type: "success", text: "Opened GitHub in a new tab." },
      ]);
      setInput("");
      return;
    }

    if (command === "open linkedin") {
      window.open("https://www.linkedin.com/in/HaydenMcVay", "_blank", "noopener,noreferrer");
      setLines((current) => [
        ...current,
        { type: "command", text: command },
        { type: "success", text: "Opened LinkedIn in a new tab." },
      ]);
      setInput("");
      return;
    }

    setLines((current) => [...current, { type: "command", text: command }, ...buildResponse(command)]);
    setInput("");
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      submitCommand(input);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      if (history.length === 0) {
        return;
      }

      const nextIndex = historyIndex === -1 ? history.length - 1 : Math.max(historyIndex - 1, 0);
      setHistoryIndex(nextIndex);
      setInput(history[nextIndex]);
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (history.length === 0) {
        return;
      }

      if (historyIndex <= 0) {
        setHistoryIndex(-1);
        setInput("");
        return;
      }

      const nextIndex = historyIndex + 1 >= history.length ? -1 : historyIndex + 1;
      setHistoryIndex(nextIndex);
      setInput(nextIndex === -1 ? "" : history[nextIndex]);
    }
  }

  return (
    <section className="px-6 py-8 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className={`text-sm font-medium uppercase tracking-widest ${promptColor}`}>Browser Commands</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Try out the Portfolio Terminal</h2>
          </div>
          <button
            onClick={() => {
              setLines([]);
              focusInput();
            }}
            className={`rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300 ${terminalStyles.muted} hover:${terminalStyles.text} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-blue-500`}
          >
            Clear Terminal
          </button>
        </div>

        <div className={`rounded-3xl border p-5 shadow-2xl transition-colors duration-300 ${terminalStyles.shell}`} onClick={focusInput} role="presentation">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <span className={`text-xs uppercase tracking-[0.3em] ${terminalStyles.muted}`}>browser playground</span>
          </div>

          <div className={`space-y-2 font-mono text-sm ${terminalStyles.text}`}>
            {lines.map((line, index) => (
              <div key={`${line.text}-${index}`}>
                {line.type === "command" && (
                  <p>
                    <span className={promptColor}>visitor@hayden:~$</span> {line.text}
                  </p>
                )}

                {line.type === "text" && <p>{line.text}</p>}
                {line.type === "success" && <p className="text-emerald-300">{line.text}</p>}
                {line.type === "error" && <p className="text-red-300">{line.text}</p>}
                {line.type === "link" && (
                  <a href={line.href} target="_blank" rel="noreferrer" className={`${promptColor} underline decoration-white/20 underline-offset-4`}>
                    {line.text}
                  </a>
                )}
              </div>
            ))}

            <label className="flex items-center gap-3">
              <span className={promptColor}>visitor@hayden:~$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                className={`w-full bg-transparent outline-none ${terminalStyles.input}`}
                placeholder="Try `help`, `theme matrix`, or `open github`"
                aria-label="Command input"
                autoComplete="off"
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck={false}
              />
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
