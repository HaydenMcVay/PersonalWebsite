import React, { useState } from "react";
import GlassPanel from "./GlassPanel";

const INITIAL_LINES = [
  "$ help",
  "Commands: help, status, projects, clear",
];

function getReply(command) {
  if (command === "help") {
    return ["Commands: help, status, projects, clear"];
  }

  if (command === "status") {
    return ["Portfolio: deploying", "Dashboard: prototype", "APIs: mocked"];
  }

  if (command === "projects") {
    return ["- PersonalWebsite", "- Command Playground", "- Future AI Tools"];
  }

  return [`Unknown command: ${command}`];
}

export default function MiniTerminalWidget() {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState(INITIAL_LINES);

  function submit(event) {
    event.preventDefault();
    const command = input.trim().toLowerCase();

    if (!command) {
      return;
    }

    if (command === "clear") {
      setLines([]);
      setInput("");
      return;
    }

    setLines((current) => [...current, `$ ${command}`, ...getReply(command)]);
    setInput("");
  }

  return (
    <GlassPanel eyebrow="Mini Terminal" title="Quick mock controls">
      <div className="rounded-3xl border border-white/10 bg-zinc-950/90 p-4 font-mono text-sm text-zinc-300">
        <div className="mb-4 flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        <div className="space-y-2">
          {lines.map((line, index) => (
            <p key={`${line}-${index}`} className={line.startsWith("$") ? "text-blue-300" : "text-zinc-300"}>
              {line}
            </p>
          ))}
        </div>

        <form onSubmit={submit} className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
          <span className="text-emerald-300">$</span>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="type status"
            className="w-full bg-transparent text-zinc-100 outline-none placeholder:text-zinc-500"
          />
        </form>
      </div>
    </GlassPanel>
  );
}
