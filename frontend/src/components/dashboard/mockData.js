const FALLBACK_STATS = {
  counters: [
    { label: "This Week", value: "n/a" },
    { label: "Public Repos", value: "n/a" },
    { label: "Top Repo Stars", value: "n/a" },
  ],
  languages: [],
  commits: [],
  repos: [],
  activity: Array(42).fill(0),
  source: "fallback",
  error: "GitHub data unavailable right now.",
};

function languageColor(name) {
  if (name === "JavaScript") {
    return "bg-blue-400";
  }

  if (name === "TypeScript") {
    return "bg-cyan-400";
  }

  if (name === "Lua") {
    return "bg-emerald-400";
  }

  return "bg-fuchsia-400";
}

function formatRelativeTime(dateString) {
  const diffMs = Date.now() - new Date(dateString).getTime();
  const diffMinutes = Math.max(1, Math.round(diffMs / 60000));

  if (diffMinutes < 60) {
    return `${diffMinutes} min ago`;
  }

  const diffHours = Math.round(diffMinutes / 60);
  if (diffHours < 24) {
    return `${diffHours} hr ago`;
  }

  const diffDays = Math.round(diffHours / 24);
  return `${diffDays} day${diffDays === 1 ? "" : "s"} ago`;
}

function buildActivityFromCommits(commits) {
  const days = Array(42).fill(0);

  commits.forEach((commit) => {
    const commitDate = new Date(commit.commit.author?.date || commit.commit.committer?.date);
    const diffDays = Math.floor((Date.now() - commitDate.getTime()) / 86400000);

    if (diffDays >= 0 && diffDays < 42) {
      const index = 41 - diffDays;
      days[index] = Math.min(days[index] + 1, 7);
    }
  });

  return days;
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    const message = typeof data?.message === "string" ? data.message : "GitHub request failed";
    throw new Error(message);
  }

  return data;
}

// Fetch live GitHub stats for HaydenMcVay with a repo-specific commit source.
export async function fetchGitHubStats() {
  const username = "HaydenMcVay";
  const repoName = "PersonalWebsite";

  try {
    const [repos, repoCommits] = await Promise.all([
      fetchJson(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`),
      fetchJson(`https://api.github.com/repos/${username}/${repoName}/commits?per_page=100`),
    ]);

    if (!Array.isArray(repos) || !Array.isArray(repoCommits)) {
      throw new Error("Unexpected GitHub response shape");
    }

    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);

    const recentRepoCommits = repoCommits.filter((commit) => {
      const commitDate = commit.commit.author?.date || commit.commit.committer?.date;
      return commitDate && new Date(commitDate) > weekAgo;
    });

    const recentCommits = repoCommits.slice(0, 3).map((commit) => ({
      hash: commit.sha.substring(0, 7),
      message: commit.commit.message.split("\n")[0],
      time: formatRelativeTime(commit.commit.author?.date || commit.commit.committer?.date),
    }));

    const topRepos = [...repos]
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 3)
      .map((repo) => ({
        name: repo.name,
        description: repo.description || "",
        stars: repo.stargazers_count,
        status: repo.archived ? "Archived" : repo.name === repoName ? "Active" : "Live",
      }));

    const languageCounts = {};
    repos.forEach((repo) => {
      if (repo.language) {
        languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
      }
    });

    const totalLanguages = Object.values(languageCounts).reduce((sum, count) => sum + count, 0);
    const languages = Object.entries(languageCounts)
      .map(([name, count]) => ({
        name,
        percent: totalLanguages > 0 ? Math.round((count / totalLanguages) * 100) : 0,
        color: languageColor(name),
      }))
      .sort((a, b) => b.percent - a.percent)
      .slice(0, 4);

    return {
      counters: [
        { label: "This Week", value: `${recentRepoCommits.length} commits` },
        { label: "Public Repos", value: repos.length },
        { label: "Top Repo Stars", value: topRepos[0] ? topRepos[0].stars : 0 },
      ],
      languages,
      commits: recentCommits,
      repos: topRepos,
      activity: buildActivityFromCommits(repoCommits),
      source: "live",
      error: "",
    };
  } catch (error) {
    return {
      ...FALLBACK_STATS,
      error: error instanceof Error ? error.message : FALLBACK_STATS.error,
    };
  }
}

export const spotifyNow = {
  title: "Afterglow Protocol",
  artist: "Static Memory",
  album: "Night Shift Vol. 2",
  progress: 68,
  isPlaying: true,
  duration: "3:42",
  currentTime: "2:31",
};

export const initialMetrics = [
  { label: "CPU Usage", value: 38, unit: "%" },
  { label: "Memory", value: 64, unit: "%" },
  { label: "Network", value: 22, unit: "MB/s" },
  { label: "Requests", value: 184, unit: "/min" },
];

export const projects = [
  { name: "Portfolio", summary: "Refreshing the landing experience and navigation.", status: "Deploying" },
  { name: "Command Playground", summary: "Keeping the fake terminal smooth and beginner-friendly.", status: "Active" },
  { name: "Dashboard", summary: "Frontend prototype with modular widgets and mock data.", status: "Prototype" },
  { name: "Future AI Tools", summary: "Reserved for GitHub, Spotify, AI, and server integrations later.", status: "Planning" },
];

export const activityFeed = [
  { time: "12:41", text: "pushed commit", detail: "dashboard/glass-panels" },
  { time: "12:44", text: "deployed update", detail: "portfolio-preview" },
  { time: "12:51", text: "edited dashboard", detail: "system metrics widget" },
  { time: "12:56", text: "reviewed project plan", detail: "future api hooks" },
  { time: "13:03", text: "queued next idea", detail: "spotify oauth prototype" },
];
