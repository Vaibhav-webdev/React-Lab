// ─── 10 Next.js / React Fix-the-Bug Questions ────────────────────────────────
// Difficulties: 3 EASY · 4 MEDIUM · 3 HARD
// Each question's buggyCode is shown in the editor on start.
// check() functions test the user's edited code as a string.

export const ALL_QUESTIONS = [
  // ─── EASY 1 ────────────────────────────────────────────────────────────────
  {
    id: 1,
    title: "The Missing Key",
    difficulty: "EASY",
    timeLimit: 180,
    tags: ["Lists", "Rendering"],
    bugReport:
      "Adding or removing items from the list causes unexpected re-renders. React throws a console warning about missing keys and list updates are visually glitchy.",
    description:
      "This component renders a list of JavaScript frameworks. When you remove items, React doesn't know which element to unmount. Find and fix the missing key bug so the list renders stably.",
    buggyCode: `function App() {
  const [frameworks, setFrameworks] = useState([
    { id: 1, name: "React" },
    { id: 2, name: "Vue" },
    { id: 3, name: "Angular" },
    { id: 4, name: "Svelte" },
  ]);

  const remove = (id) => {
    setFrameworks(frameworks.filter((f) => f.id !== id));
  };

  return (
    <div className="p-6 bg-[#141414] border border-neutral-800 rounded-xl shadow-sm">
      <h3 className="text-2xl font-semibold mb-6 tracking-tight text-neutral-100">JS Frameworks</h3>
      <ul className="space-y-3">
        {frameworks.map((fw) => (
          <li className="flex items-center justify-between p-4 bg-[#1a1a1a] rounded-lg border border-neutral-800 hover:border-neutral-600 transition-colors">
            <span className="text-lg font-medium text-neutral-200">{fw.name}</span>
            <button
              onClick={() => remove(fw.id)}
              className="px-5 py-2.5 text-sm font-semibold rounded-md bg-[#1a1a1a] text-red-400 border border-neutral-800 hover:bg-red-950/30 hover:border-red-800 transition-all shadow-sm"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
    fixedCode: `function App() {
  const [frameworks, setFrameworks] = useState([
    { id: 1, name: "React" },
    { id: 2, name: "Vue" },
    { id: 3, name: "Angular" },
    { id: 4, name: "Svelte" },
  ]);

  const remove = (id) => {
    setFrameworks(frameworks.filter((f) => f.id !== id));
  };

  return (
    <div className="p-6 bg-[#141414] border border-neutral-800 rounded-xl shadow-sm">
      <h3 className="text-2xl font-semibold mb-6 tracking-tight text-neutral-100">JS Frameworks</h3>
      <ul className="space-y-3">
        {frameworks.map((fw) => (
          <li
            key={fw.id}
            className="flex items-center justify-between p-4 bg-[#1a1a1a] rounded-lg border border-neutral-800 hover:border-neutral-600 transition-colors"
          >
            <span className="text-lg font-medium text-neutral-200">{fw.name}</span>
            <button
              onClick={() => remove(fw.id)}
              className="px-5 py-2.5 text-sm font-semibold rounded-md bg-[#1a1a1a] text-red-400 border border-neutral-800 hover:bg-red-950/30 hover:border-red-800 transition-all shadow-sm"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
    tests: [
      {
        label: "Each list item has a key prop",
        check: (code) =>
          code.includes("key={fw.id}") ||
          code.includes("key={f.id}") ||
          (code.includes("key=") && code.includes(".id")),
      },
      {
        label: "Key uses a unique ID, not array index",
        check: (code) =>
          !code.match(/key=\{[^}]*index[^}]*\}/) &&
          !code.match(/key=\{i\}/) &&
          (code.includes("key={fw.id}") || code.includes("key={f.id}")),
      },
      {
        label: "map() still renders each framework name",
        check: (code) => code.includes("fw.name") || code.includes("f.name"),
      },
    ],
  },

  // ─── EASY 2 ────────────────────────────────────────────────────────────────
  {
    id: 2,
    title: "The Frozen Counter",
    difficulty: "EASY",
    timeLimit: 180,
    tags: ["State", "Immutability"],
    bugReport:
      "Clicking Increment doesn't update the displayed count. The UI stays frozen at 0 even though the handler fires. React is not detecting the state change.",
    description:
      "This counter component mutates state directly before calling setState, which means React sees the same object reference and skips re-rendering. Fix the immutability bug.",
    buggyCode: `function App() {
  const [state, setState] = useState({ count: 0, label: "Counter" });

  const increment = () => {
    state.count += 1;
    setState(state);
  };

  const reset = () => {
    state.count = 0;
    setState(state);
  };

  return (
    <div className="p-8 text-center bg-[#141414] border border-neutral-800 rounded-2xl shadow-sm">
      <p className="text-base font-medium text-neutral-500 mb-1">{state.label}</p>
      <h1 className="text-7xl font-extrabold tracking-tighter text-blue-400 mb-6">{state.count}</h1>
      <div className="flex gap-4 justify-center">
        <button
          onClick={increment}
          className="px-6 py-3 text-lg font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
        >
          Increment
        </button>
        <button
          onClick={reset}
          className="px-6 py-3 text-lg font-semibold rounded-xl bg-neutral-800 text-neutral-200 hover:bg-neutral-700 transition-all"
        >
          Reset
        </button>
      </div>
    </div>
  );
}`,
    fixedCode: `function App() {
  const [state, setState] = useState({ count: 0, label: "Counter" });

  const increment = () => {
    setState({ ...state, count: state.count + 1 });
  };

  const reset = () => {
    setState({ ...state, count: 0 });
  };

  return (
    <div className="p-8 text-center bg-[#141414] border border-neutral-800 rounded-2xl shadow-sm">
      <p className="text-base font-medium text-neutral-500 mb-1">{state.label}</p>
      <h1 className="text-7xl font-extrabold tracking-tighter text-blue-400 mb-6">{state.count}</h1>
      <div className="flex gap-4 justify-center">
        <button
          onClick={increment}
          className="px-6 py-3 text-lg font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
        >
          Increment
        </button>
        <button
          onClick={reset}
          className="px-6 py-3 text-lg font-semibold rounded-xl bg-neutral-800 text-neutral-200 hover:bg-neutral-700 transition-all"
        >
          Reset
        </button>
      </div>
    </div>
  );
}`,
    tests: [
      {
        label: "State is never mutated directly",
        check: (code) =>
          !code.includes("state.count +=") && !code.includes("state.count ="),
      },
      {
        label: "setState receives a new object literal",
        check: (code) => code.includes("setState({") || code.includes("setState( {"),
      },
      {
        label: "Spread operator preserves other state fields",
        check: (code) => code.includes("...state"),
      },
    ],
  },

  // ─── EASY 3 ────────────────────────────────────────────────────────────────
  {
    id: 3,
    title: "The Ghost Input",
    difficulty: "EASY",
    timeLimit: 180,
    tags: ["Forms", "Controlled Components"],
    bugReport:
      "The search input is completely unresponsive. Users can click it and a cursor appears, but typing does nothing. The input is visually frozen.",
    description:
      "A controlled React input requires both a value prop AND an onChange handler. Without onChange, the input is read-only. Add the missing handler to unfreeze the search field.",
    buggyCode: `function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const search = () => {
    const data = ["Next.js", "Nuxt", "Remix", "Astro", "SvelteKit"];
    setResults(
      data.filter((d) => d.toLowerCase().includes(query.toLowerCase()))
    );
  };

  return (
    <div className="p-6 bg-[#141414] border border-neutral-800 rounded-xl shadow-sm">
      <h3 className="text-2xl font-semibold mb-5 tracking-tight text-neutral-100">Framework Search</h3>
      <div className="flex gap-3 mb-6">
        <input
          value={query}
          placeholder="Search frameworks..."
          className="py-3 px-4 flex-1 rounded-lg border border-neutral-600 bg-[#1a1a1a] text-neutral-100 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 text-lg transition-all"
        />
        <button
          onClick={search}
          className="px-6 py-3 text-lg font-semibold rounded-lg bg-violet-600 text-white hover:bg-violet-700 transition-all shadow-md shadow-violet-500/10"
        >
          Search
        </button>
      </div>
      <div className="space-y-3">
        {results.map((r, i) => (
          <div
            key={i}
            className="p-4 bg-[#1a1a1a] rounded-lg border border-neutral-800 font-mono text-lg text-neutral-200"
          >
            • {r}
          </div>
        ))}
      </div>
      {results.length === 0 && query && <p className="text-lg text-neutral-400 italic">No results found.</p>}
    </div>
  );
}`,
    fixedCode: `function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const search = () => {
    const data = ["Next.js", "Nuxt", "Remix", "Astro", "SvelteKit"];
    setResults(
      data.filter((d) => d.toLowerCase().includes(query.toLowerCase()))
    );
  };

  return (
    <div className="p-6 bg-[#141414] border border-neutral-800 rounded-xl shadow-sm">
      <h3 className="text-2xl font-semibold mb-5 tracking-tight text-neutral-100">Framework Search</h3>
      <div className="flex gap-3 mb-6">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search frameworks..."
          className="py-3 px-4 flex-1 rounded-lg border border-neutral-600 bg-[#1a1a1a] text-neutral-100 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 text-lg transition-all"
        />
        <button
          onClick={search}
          className="px-6 py-3 text-lg font-semibold rounded-lg bg-violet-600 text-white hover:bg-violet-700 transition-all shadow-md shadow-violet-500/10"
        >
          Search
        </button>
      </div>
      <div className="space-y-3">
        {results.map((r, i) => (
          <div
            key={i}
            className="p-4 bg-[#1a1a1a] rounded-lg border border-neutral-800 font-mono text-lg text-neutral-200"
          >
            • {r}
          </div>
        ))}
      </div>
      {results.length === 0 && query && <p className="text-lg text-neutral-400 italic">No results found.</p>}
    </div>
  );
}`,
    tests: [
      {
        label: "Input has an onChange handler",
        check: (code) => code.includes("onChange"),
      },
      {
        label: "onChange updates the query state",
        check: (code) => code.includes("setQuery") && code.includes("onChange"),
      },
      {
        label: "Input reads from e.target.value",
        check: (code) =>
          code.includes("e.target.value") || code.includes("event.target.value"),
      },
    ],
  },

  // ─── MEDIUM 1 ──────────────────────────────────────────────────────────────
  {
    id: 4,
    title: "The Stale Closure",
    difficulty: "MEDIUM",
    timeLimit: 300,
    tags: ["Closures", "Functional Updates"],
    bugReport:
      "Clicking 'Add 3' only increments the count by 1 instead of 3. Each individual click works fine, but when increment() is called three times in one handler, only the last update survives.",
    description:
      "All three increment() calls inside addThree() close over the same stale count value. Each call schedules setCount(0 + 1), so they collapse into a single update. Use the functional update form to fix this.",
    buggyCode: `function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const addThree = () => {
    increment();
    increment();
    increment();
  };

  return (
    <div className="p-8 text-center bg-[#141414] border border-neutral-800 rounded-2xl shadow-sm">
      <h1
        id="count"
        className="text-5xl font-extrabold mb-8 tracking-tighter text-emerald-400"
      >
        Count: {count}
      </h1>
      <div className="flex gap-4 justify-center">
        <button
          id="increment"
          onClick={increment}
          className="px-6 py-3 text-lg font-semibold rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-500/20"
        >
          Increment
        </button>
        <button
          id="add-three"
          onClick={addThree}
          className="px-6 py-3 text-lg font-semibold rounded-xl bg-[#1a1a1a] text-emerald-400 border-2 border-emerald-700 hover:bg-emerald-950/30 transition-all shadow-md shadow-emerald-500/10"
        >
          Add 3
        </button>
      </div>
    </div>
  );
}`,
    fixedCode: `function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const addThree = () => {
    increment();
    increment();
    increment();
  };

  return (
    <div className="p-8 text-center bg-[#141414] border border-neutral-800 rounded-2xl shadow-sm">
      <h1
        id="count"
        className="text-5xl font-extrabold mb-8 tracking-tighter text-emerald-400"
      >
        Count: {count}
      </h1>
      <div className="flex gap-4 justify-center">
        <button
          id="increment"
          onClick={increment}
          className="px-6 py-3 text-lg font-semibold rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-500/20"
        >
          Increment
        </button>
        <button
          id="add-three"
          onClick={addThree}
          className="px-6 py-3 text-lg font-semibold rounded-xl bg-[#1a1a1a] text-emerald-400 border-2 border-emerald-700 hover:bg-emerald-950/30 transition-all shadow-md shadow-emerald-500/10"
        >
          Add 3
        </button>
      </div>
    </div>
  );
}`,
    tests: [
      {
        label: "Starts at 0",
        check: (code) => code.includes("useState(0)"),
      },
      {
        label: "Uses functional updater form (prev => ...)",
        check: (code) =>
          code.includes("prev =>") ||
          code.includes("prev=>") ||
          code.includes("p =>") ||
          code.includes("prevCount =>"),
      },
      {
        label: "'Add 3' button adds exactly 3",
        check: (code) =>
          (code.includes("prev =>") || code.includes("p =>") || code.includes("prevCount =>")) &&
          code.includes("+ 1"),
      },
    ],
  },

  // ─── MEDIUM 2 ──────────────────────────────────────────────────────────────
  {
    id: 5,
    title: "The Dark Mode Bug",
    difficulty: "MEDIUM",
    timeLimit: 300,
    tags: ["Context", "Provider"],
    bugReport:
      "The toggle button label updates correctly but the nested Card component always shows 'light' as the theme. Toggling does nothing to the deep UI. The Context value never reaches consumers.",
    description:
      "ThemeContext.Provider is missing its value prop, so all consumers receive the context default ('light') instead of the dynamic state. Pass the theme state as the Provider's value to fix it.",
    buggyCode: `const ThemeContext = createContext("light");

function Card() {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={\`p-6 rounded-xl mt-6 shadow-sm border transition-all duration-300 \${theme === "dark" ? "bg-slate-900 text-white border-slate-700" : "bg-[#1a1a1a] text-neutral-200 border-neutral-700"}\`}
    >
      <p className="text-lg font-medium">
        Current Theme: <strong id="theme-label" className="font-bold underline text-xl">{theme}</strong>
      </p>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider>
      <div className="p-6 bg-[#141414] border border-neutral-800 rounded-xl shadow-sm">
        <button
          onClick={toggleTheme}
          className="px-6 py-3 text-lg font-semibold rounded-xl bg-slate-700 text-white hover:bg-slate-600 transition-all shadow-lg"
        >
          Toggle (currently: {theme})
        </button>
        <Card />
      </div>
    </ThemeContext.Provider>
  );
}`,
    fixedCode: `const ThemeContext = createContext("light");

function Card() {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={\`p-6 rounded-xl mt-6 shadow-sm border transition-all duration-300 \${theme === "dark" ? "bg-slate-900 text-white border-slate-700" : "bg-[#1a1a1a] text-neutral-200 border-neutral-700"}\`}
    >
      <p className="text-lg font-medium">
        Current Theme: <strong id="theme-label" className="font-bold underline text-xl">{theme}</strong>
      </p>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="p-6 bg-[#141414] border border-neutral-800 rounded-xl shadow-sm">
        <button
          onClick={toggleTheme}
          className="px-6 py-3 text-lg font-semibold rounded-xl bg-slate-700 text-white hover:bg-slate-600 transition-all shadow-lg"
        >
          Toggle (currently: {theme})
        </button>
        <Card />
      </div>
    </ThemeContext.Provider>
  );
}`,
    tests: [
      {
        label: "Provider has a value prop",
        check: (code) => code.includes("Provider value=") || code.includes("Provider\n  value="),
      },
      {
        label: "Label shows the initial theme",
        check: (code) => code.includes("ThemeContext") && code.includes("useContext"),
      },
      {
        label: "Toggling updates the deep label",
        check: (code) => code.includes("value={theme}") && code.includes("setTheme"),
      },
    ],
  },

  // ─── MEDIUM 3 ──────────────────────────────────────────────────────────────
  {
    id: 6,
    title: "The Infinite Render",
    difficulty: "MEDIUM",
    timeLimit: 300,
    tags: ["useEffect", "Dependencies"],
    bugReport:
      "The component causes an infinite re-render loop. The loading spinner never disappears and the simulated fetch is called thousands of times per second, freezing the browser tab.",
    description:
      "An object declared inside the component is re-created on every render and placed in useEffect's dependency array. Since it's a new reference each time, React re-runs the effect endlessly. Remove the object from the deps array to fix it.",
    buggyCode: `function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const options = { method: "GET" };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setUsers([
        { id: 1, name: "Alice", role: "Admin" },
        { id: 2, name: "Bob", role: "User" },
        { id: 3, name: "Charlie", role: "User" },
      ]);
      setLoading(false);
    }, 600);
  }, [options]);

  if (loading) return <p className="text-lg text-neutral-400 italic p-6 bg-[#141414] border border-neutral-800 rounded-xl shadow-sm">Loading users...</p>;

  return (
    <div className="p-6 bg-[#141414] border border-neutral-800 rounded-xl shadow-sm">
      <h3 className="text-2xl font-semibold mb-6 tracking-tight text-neutral-100">Team</h3>
      <div className="space-y-4">
        {users.map((u) => (
          <div
            key={u.id}
            className="flex items-center justify-between p-5 bg-[#1a1a1a] rounded-lg border border-neutral-800 hover:border-neutral-600 transition-colors shadow-sm"
          >
            <div>
              <span className="text-lg font-semibold text-neutral-100">{u.name}</span>
              <span className="mx-2 text-neutral-600">—</span>
              <span className="text-md font-medium text-blue-400 bg-blue-950/30 px-3 py-1 rounded-full border border-blue-800">
                {u.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`,
    fixedCode: `function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setUsers([
        { id: 1, name: "Alice", role: "Admin" },
        { id: 2, name: "Bob", role: "User" },
        { id: 3, name: "Charlie", role: "User" },
      ]);
      setLoading(false);
    }, 600);
  }, []);

  if (loading) return <p className="text-lg text-neutral-400 italic p-6 bg-[#141414] border border-neutral-800 rounded-xl shadow-sm">Loading users...</p>;

  return (
    <div className="p-6 bg-[#141414] border border-neutral-800 rounded-xl shadow-sm">
      <h3 className="text-2xl font-semibold mb-6 tracking-tight text-neutral-100">Team</h3>
      <div className="space-y-4">
        {users.map((u) => (
          <div
            key={u.id}
            className="flex items-center justify-between p-5 bg-[#1a1a1a] rounded-lg border border-neutral-800 hover:border-neutral-600 transition-colors shadow-sm"
          >
            <div>
              <span className="text-lg font-semibold text-neutral-100">{u.name}</span>
              <span className="mx-2 text-neutral-600">—</span>
              <span className="text-md font-medium text-blue-400 bg-blue-950/30 px-3 py-1 rounded-full border border-blue-800">
                {u.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`,
    tests: [
      {
        label: "useEffect has an empty dependency array",
        check: (code) => code.includes("}, [])") || code.includes("},\n  [])") || code.includes("},\n[])"),
      },
      {
        label: "options object is not in the dependency array",
        check: (code) => !code.includes("[options]"),
      },
      {
        label: "Component only fetches data once on mount",
        check: (code) => (code.includes("}, [])") || code.includes("}, [ ])")) && !code.includes("[options]"),
      },
    ],
  },

  // ─── MEDIUM 4 ──────────────────────────────────────────────────────────────
  {
    id: 7,
    title: "The Memory Leak",
    difficulty: "MEDIUM",
    timeLimit: 300,
    tags: ["useEffect", "Cleanup", "setInterval"],
    bugReport:
      "After the stopwatch mounts, navigating away produces: 'Warning: Can\\'t perform a React state update on an unmounted component'. The interval keeps firing after the component is gone.",
    description:
      "setInterval is started inside useEffect but its ID is never stored and clearInterval is never called on cleanup. Add a return () => clearInterval(id) to fix the memory leak.",
    buggyCode: `function App() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (running) {
      setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }
  }, [running]);

  const toggle = () => setRunning((r) => !r);
  const reset = () => {
    setRunning(false);
    setSeconds(0);
  };

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div className="p-8 text-center bg-[#141414] border border-neutral-800 rounded-2xl shadow-sm">
      <h1 className="text-8xl font-extrabold tracking-tighter text-neutral-100 font-mono mb-8">
        {mm}:{ss}
      </h1>
      <div className="flex gap-4 justify-center">
        <button
          onClick={toggle}
          className={\`px-6 py-3 text-lg font-semibold rounded-xl transition-all shadow-lg \${running ? "bg-amber-600 text-white hover:bg-amber-700" : "bg-slate-700 text-white hover:bg-slate-600"}\`}
        >
          {running ? "Pause" : "Start"}
        </button>
        <button
          onClick={reset}
          className="px-6 py-3 text-lg font-semibold rounded-xl bg-neutral-800 text-neutral-200 hover:bg-neutral-700 transition-all"
        >
          Reset
        </button>
      </div>
    </div>
  );
}`,
    fixedCode: `function App() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (running) {
      const id = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
      return () => clearInterval(id);
    }
  }, [running]);

  const toggle = () => setRunning((r) => !r);
  const reset = () => {
    setRunning(false);
    setSeconds(0);
  };

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div className="p-8 text-center bg-[#141414] border border-neutral-800 rounded-2xl shadow-sm">
      <h1 className="text-8xl font-extrabold tracking-tighter text-neutral-100 font-mono mb-8">
        {mm}:{ss}
      </h1>
      <div className="flex gap-4 justify-center">
        <button
          onClick={toggle}
          className={\`px-6 py-3 text-lg font-semibold rounded-xl transition-all shadow-lg \${running ? "bg-amber-600 text-white hover:bg-amber-700" : "bg-slate-700 text-white hover:bg-slate-600"}\`}
        >
          {running ? "Pause" : "Start"}
        </button>
        <button
          onClick={reset}
          className="px-6 py-3 text-lg font-semibold rounded-xl bg-neutral-800 text-neutral-200 hover:bg-neutral-700 transition-all"
        >
          Reset
        </button>
      </div>
    </div>
  );
}`,
    tests: [
      {
        label: "setInterval result is stored in a variable",
        check: (code) => code.includes("= setInterval") || code.includes("=setInterval"),
      },
      {
        label: "useEffect returns a cleanup function",
        check: (code) => code.includes("return () =>") || code.includes("return function"),
      },
      {
        label: "clearInterval is called in the cleanup",
        check: (code) => code.includes("clearInterval"),
      },
    ],
  },

  // ─── HARD 1 ────────────────────────────────────────────────────────────────
  {
    id: 8,
    title: "The Async Race",
    difficulty: "HARD",
    timeLimit: 480,
    tags: ["async", "useEffect", "Race Condition"],
    bugReport:
      "Switching tabs quickly causes wrong post content to appear. If you click Post 1 → Post 2 rapidly, Post 1's response sometimes renders under Post 2's tab — a classic async race condition.",
    description:
      "Both effects run concurrently. The slower response overwrites the faster one. Use a cancelled flag (or AbortController) to discard stale responses after the component re-renders with a new selectedId.",
    buggyCode: `const POSTS = {
  1: {
    title: "Next.js 14 Features",
    body: "App Router, Server Actions, and more come to Next.js 14.",
  },
  2: {
    title: "React Server Components",
    body: "A new paradigm for server-side rendering in React.",
  },
  3: {
    title: "TypeScript Best Practices",
    body: "Advanced patterns for safer, more expressive code.",
  },
};

function App() {
  const [selectedId, setSelectedId] = useState(1);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setPost(null);

    setTimeout(() => {
      setPost(POSTS[selectedId]);
      setLoading(false);
    }, 800);
  }, [selectedId]);

  return (
    <div className="p-6 bg-[#141414] border border-neutral-800 rounded-xl shadow-sm">
      <div className="flex gap-3 mb-6 border-b border-neutral-800 pb-4">
        {[1, 2, 3].map((id) => (
          <button
            key={id}
            onClick={() => setSelectedId(id)}
            className={\`px-5 py-2.5 text-md font-semibold rounded-full transition-all \${selectedId === id ? "bg-violet-600 text-white shadow-md shadow-violet-500/20" : "text-violet-400 bg-violet-950/30 hover:bg-violet-950/40"}\`}
          >
            Post {id}
          </button>
        ))}
      </div>
      {loading && <p className="text-lg text-neutral-400 italic">Loading...</p>}
      {post && (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold tracking-tight text-neutral-100">{post.title}</h3>
          <p className="text-lg text-neutral-300 leading-relaxed">{post.body}</p>
        </div>
      )}
    </div>
  );
}`,
    fixedCode: `const POSTS = {
  1: {
    title: "Next.js 14 Features",
    body: "App Router, Server Actions, and more come to Next.js 14.",
  },
  2: {
    title: "React Server Components",
    body: "A new paradigm for server-side rendering in React.",
  },
  3: {
    title: "TypeScript Best Practices",
    body: "Advanced patterns for safer, more expressive code.",
  },
};

function App() {
  const [selectedId, setSelectedId] = useState(1);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setPost(null);

    setTimeout(() => {
      if (!cancelled) {
        setPost(POSTS[selectedId]);
        setLoading(false);
      }
    }, 800);

    return () => {
      cancelled = true;
    };
  }, [selectedId]);

  return (
    <div className="p-6 bg-[#141414] border border-neutral-800 rounded-xl shadow-sm">
      <div className="flex gap-3 mb-6 border-b border-neutral-800 pb-4">
        {[1, 2, 3].map((id) => (
          <button
            key={id}
            onClick={() => setSelectedId(id)}
            className={\`px-5 py-2.5 text-md font-semibold rounded-full transition-all \${selectedId === id ? "bg-violet-600 text-white shadow-md shadow-violet-500/20" : "text-violet-400 bg-violet-950/30 hover:bg-violet-950/40"}\`}
          >
            Post {id}
          </button>
        ))}
      </div>
      {loading && <p className="text-lg text-neutral-400 italic">Loading...</p>}
      {post && (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold tracking-tight text-neutral-100">{post.title}</h3>
          <p className="text-lg text-neutral-300 leading-relaxed">{post.body}</p>
        </div>
      )}
    </div>
  );
}`,
    tests: [
      {
        label: "A cancellation flag or AbortController is declared",
        check: (code) =>
          code.includes("cancelled") || code.includes("AbortController") || code.includes("ignore"),
      },
      {
        label: "State is only set when not cancelled",
        check: (code) =>
          code.includes("!cancelled") || code.includes("!ignore") || code.includes("signal.aborted"),
      },
      {
        label: "useEffect returns a cleanup that sets the flag",
        check: (code) =>
          code.includes("return () =>") &&
          (code.includes("cancelled = true") || code.includes("ignore = true") || code.includes(".abort()")),
      },
    ],
  },

  // ─── HARD 2 ────────────────────────────────────────────────────────────────
  {
    id: 9,
    title: "The Wrong Ref",
    difficulty: "HARD",
    timeLimit: 480,
    tags: ["useRef", "useState", "Reactivity"],
    bugReport:
      "The click counter always shows 0 even after many clicks. The value increments correctly in the console, but the UI is frozen. Only the 'Last clicked' label updates.",
    description:
      "useRef stores a mutable value that doesn't trigger re-renders. Using it for the count means React never re-paints the total. Switch count to useState so React knows to update the display.",
    buggyCode: `function App() {
  const count = useRef(0);
  const [lastClicked, setLastClicked] = useState(null);

  const handleClick = (label) => {
    count.current += 1;
    setLastClicked(label);
  };

  return (
    <div className="p-8 text-center bg-[#141414] border border-neutral-800 rounded-2xl shadow-sm">
      <h2 className="text-2xl font-semibold mb-2 tracking-tight text-neutral-100">Click Counter</h2>
      <p className="text-2xl font-medium text-neutral-400 mb-6">
        Total Clicks: <strong className="text-6xl font-extrabold tracking-tighter text-blue-400 ml-1.5">{count.current}</strong>
      </p>
      <p className="text-lg font-medium text-neutral-400 mb-8 bg-[#1a1a1a] px-4 py-2 rounded-lg inline-block border border-neutral-800">
        Last clicked: {lastClicked ?? "None"}
      </p>
      <div className="flex gap-4 justify-center">
        {["Alpha", "Beta", "Gamma"].map((label) => (
          <button
            key={label}
            onClick={() => handleClick(label)}
            className="px-6 py-3 text-lg font-semibold rounded-xl bg-slate-700 text-white hover:bg-slate-600 transition-all shadow-lg"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}`,
    fixedCode: `function App() {
  const [count, setCount] = useState(0);
  const [lastClicked, setLastClicked] = useState(null);

  const handleClick = (label) => {
    setCount((c) => c + 1);
    setLastClicked(label);
  };

  return (
    <div className="p-8 text-center bg-[#141414] border border-neutral-800 rounded-2xl shadow-sm">
      <h2 className="text-2xl font-semibold mb-2 tracking-tight text-neutral-100">Click Counter</h2>
      <p className="text-2xl font-medium text-neutral-400 mb-6">
        Total Clicks: <strong className="text-6xl font-extrabold tracking-tighter text-blue-400 ml-1.5">{count}</strong>
      </p>
      <p className="text-lg font-medium text-neutral-400 mb-8 bg-[#1a1a1a] px-4 py-2 rounded-lg inline-block border border-neutral-800">
        Last clicked: {lastClicked ?? "None"}
      </p>
      <div className="flex gap-4 justify-center">
        {["Alpha", "Beta", "Gamma"].map((label) => (
          <button
            key={label}
            onClick={() => handleClick(label)}
            className="px-6 py-3 text-lg font-semibold rounded-xl bg-slate-700 text-white hover:bg-slate-600 transition-all shadow-lg"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}`,
    tests: [
      {
        label: "count is declared with useState, not useRef",
        check: (code) =>
          code.includes("useState(0)") &&
          !code.match(/const count\s*=\s*React\.useRef/) &&
          !code.match(/const count\s*=\s*useRef/),
      },
      {
        label: "count is updated via setState (no direct mutation)",
        check: (code) => code.includes("setCount") && !code.includes("count.current"),
      },
      {
        label: "UI renders the reactive count value",
        check: (code) => code.includes("{count}") && !code.includes("count.current"),
      },
    ],
  },

  // ─── HARD 3 ────────────────────────────────────────────────────────────────
  {
    id: 10,
    title: "The Broken Reducer",
    difficulty: "HARD",
    timeLimit: 600,
    tags: ["useReducer", "Immutability"],
    bugReport:
      "Adding items to the cart is inconsistent — sometimes quantity goes up, sometimes the item doesn't appear at all. Cart total flickers. Removing items occasionally leaves ghost entries.",
    description:
      "The reducer mutates the existing state object and returns the same reference. React uses reference equality to detect changes, so it skips re-renders entirely. Rewrite the reducer to always return a new state object.",
    buggyCode: `const PRODUCTS = [
  { id: 1, name: "Next.js Course", price: 49 },
  { id: 2, name: "React Masterclass", price: 79 },
  { id: 3, name: "TypeScript Guide", price: 39 },
];

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const existing = state.items.find((i) => i.id === action.product.id);
      if (existing) {
        existing.qty += 1;
        return state;
      }
      state.items.push({ ...action.product, qty: 1 });
      return state;
    }
    case "REMOVE": {
      state.items = state.items.filter((i) => i.id !== action.id);
      return state;
    }
    default:
      return state;
  }
}

function App() {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] });
  const total = cart.items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div className="p-6 bg-[#141414] border border-neutral-800 rounded-xl shadow-sm">
      <h3 className="text-2xl font-semibold mb-5 tracking-tight text-neutral-100">Products</h3>
      <div className="space-y-3">
        {PRODUCTS.map((p) => (
          <div
            key={p.id}
            className="flex justify-between items-center p-4 bg-[#1a1a1a] rounded-lg border border-neutral-800 hover:border-neutral-600 transition-colors shadow-sm"
          >
            <span className="text-lg font-medium text-neutral-200">{p.name} — {p.price} USD</span>
            <button
              onClick={() => dispatch({ type: "ADD", product: p })}
              className="px-5 py-2.5 text-sm font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md shadow-blue-500/10"
            >
              Add
            </button>
          </div>
        ))}
      </div>
      <hr className="my-8 border-t border-neutral-800" />
      <h3 className="text-2xl font-semibold mb-5 tracking-tight text-neutral-100">
        Cart ({cart.items.reduce((s, i) => s + i.qty, 0)} items)
      </h3>
      <div className="space-y-2.5">
        {cart.items.map((i) => (
          <div
            key={i.id}
            className="flex justify-between items-center p-4 bg-[#1a1a1a] rounded-lg border border-neutral-800"
          >
            <span className="text-lg font-medium text-neutral-200">{i.name} x{i.qty}</span>
            <button
              onClick={() => dispatch({ type: "REMOVE", id: i.id })}
              className="px-5 py-2.5 text-sm font-semibold rounded-md bg-[#1a1a1a] text-red-400 border border-neutral-800 hover:bg-red-950/30 hover:border-red-800 transition-all shadow-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <p className="mt-8 p-5 bg-[#1a1a1a] rounded-xl border border-neutral-800 flex items-center justify-between text-2xl font-semibold text-neutral-100">
        <span className="text-lg text-neutral-400">Total:</span>
        <strong className="text-blue-400 text-3xl font-bold ml-3">{total} USD</strong>
      </p>
    </div>
  );
}`,
    fixedCode: `const PRODUCTS = [
  { id: 1, name: "Next.js Course", price: 49 },
  { id: 2, name: "React Masterclass", price: 79 },
  { id: 3, name: "TypeScript Guide", price: 39 },
];

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const existing = state.items.find((i) => i.id === action.product.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.product.id ? { ...i, qty: i.qty + 1 } : i
          ),
        };
      }
      return { ...state, items: [...state.items, { ...action.product, qty: 1 }] };
    }
    case "REMOVE":
      return { ...state, items: state.items.filter((i) => i.id !== action.id) };
    default:
      return state;
  }
}

function App() {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] });
  const total = cart.items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div className="p-6 bg-[#141414] border border-neutral-800 rounded-xl shadow-sm">
      <h3 className="text-2xl font-semibold mb-5 tracking-tight text-neutral-100">Products</h3>
      <div className="space-y-3">
        {PRODUCTS.map((p) => (
          <div
            key={p.id}
            className="flex justify-between items-center p-4 bg-[#1a1a1a] rounded-lg border border-neutral-800 hover:border-neutral-600 transition-colors shadow-sm"
          >
            <span className="text-lg font-medium text-neutral-200">{p.name} — {p.price} USD</span>
            <button
              onClick={() => dispatch({ type: "ADD", product: p })}
              className="px-5 py-2.5 text-sm font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md shadow-blue-500/10"
            >
              Add
            </button>
          </div>
        ))}
      </div>
      <hr className="my-8 border-t border-neutral-800" />
      <h3 className="text-2xl font-semibold mb-5 tracking-tight text-neutral-100">
        Cart ({cart.items.reduce((s, i) => s + i.qty, 0)} items)
      </h3>
      <div className="space-y-2.5">
        {cart.items.map((i) => (
          <div
            key={i.id}
            className="flex justify-between items-center p-4 bg-[#1a1a1a] rounded-lg border border-neutral-800"
          >
            <span className="text-lg font-medium text-neutral-200">{i.name} x{i.qty}</span>
            <button
              onClick={() => dispatch({ type: "REMOVE", id: i.id })}
              className="px-5 py-2.5 text-sm font-semibold rounded-md bg-[#1a1a1a] text-red-400 border border-neutral-800 hover:bg-red-950/30 hover:border-red-800 transition-all shadow-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <p className="mt-8 p-5 bg-[#1a1a1a] rounded-xl border border-neutral-800 flex items-center justify-between text-2xl font-semibold text-neutral-100">
        <span className="text-lg text-neutral-400">Total:</span>
        <strong className="text-blue-400 text-3xl font-bold ml-3">{total} USD</strong>
      </p>
    </div>
  );
}`,
    tests: [
      {
        label: "Reducer returns a new state object using spread",
        check: (code) => code.includes("return {") && code.includes("...state"),
      },
      {
        label: "ADD updates existing items with map(), not mutation",
        check: (code) =>
          code.includes(".map(") && (code.includes("qty + 1") || code.includes("qty: i.qty + 1")),
      },
      {
        label: "REMOVE returns a new filtered array",
        check: (code) => code.includes(".filter(") && (code.includes("return {") || code.includes("return {")),
      },
    ],
  },
];

/** Pick one question from each difficulty tier */
export function pickRandomQuestions() {
  const easy = ALL_QUESTIONS.filter((q) => q.difficulty === "EASY");
  const medium = ALL_QUESTIONS.filter((q) => q.difficulty === "MEDIUM");
  const hard = ALL_QUESTIONS.filter((q) => q.difficulty === "HARD");
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  return [pick(easy), pick(medium), pick(hard)];
}

export const DIFFICULTY_STYLES = {
  EASY: {
    bg: "bg-green-500/15",
    text: "text-green-400",
    border: "border-green-500/30",
    dot: "bg-green-400",
    label: "EASY",
  },
  MEDIUM: {
    bg: "bg-amber-500/15",
    text: "text-amber-400",
    border: "border-amber-500/30",
    dot: "bg-amber-400",
    label: "MEDIUM",
  },
  HARD: {
    bg: "bg-red-500/15",
    text: "text-red-400",
    border: "border-red-500/30",
    dot: "bg-red-400",
    label: "HARD",
  },
};