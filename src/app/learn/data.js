import {
  Layout,
  Compass,
  Cpu,
  RefreshCw,
  Zap,
  Network,
  Database,
  Shield,
  Code,
  Gauge,
  Globe,
  CheckCircle2,
  AlertTriangle,
  Rocket,
} from "lucide-react";

export const DIFFICULTY_MAP = {
  Easy: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/20",
    dot: "bg-emerald-400",
    label: "Easy",
  },
  Medium: {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    border: "border-amber-500/20",
    dot: "bg-amber-400",
    label: "Medium",
  },
  Hard: {
    bg: "bg-red-500/10",
    text: "text-red-400",
    border: "border-red-500/20",
    dot: "bg-red-400",
    label: "Hard",
  },
  Beginner: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/20",
    dot: "bg-blue-400",
    label: "Beginner",
  },
  Intermediate: {
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    border: "border-purple-500/20",
    dot: "bg-purple-400",
    label: "Intermediate",
  },
  Advanced: {
    bg: "bg-red-500/10",
    text: "text-red-400",
    border: "border-red-500/20",
    dot: "bg-red-400",
    label: "Advanced",
  },
};

// ═══════════════════════════════════════════════════════════════
// LEARNING TOPICS
// ═══════════════════════════════════════════════════════════════
export const learningTopics = [
  {
    "id": "01",
    "slug": "intro-architecture",
    "title": "Intro & Project Architecture",
    "icon": "Layout",
    "overview": "Understand Next.js project structure, the app directory, and how files map to routes.",
    "explanation": "## What is Next.js?\n\nNext.js is a production-grade React framework built by Vercel that extends React with powerful full-stack capabilities. Unlike a traditional Create React App setup where everything runs in the browser, Next.js introduces a hybrid rendering model — meaning your pages can be rendered on the server, at build time, or on the client, depending on what each page needs.\n\n## Why Does Project Architecture Matter?\n\nIn Next.js, your file structure IS your routing system. There's no separate router configuration file — the framework automatically maps folders inside `app/` to URL paths. This convention-over-configuration approach means that understanding the project structure is the single most important foundational skill. If you don't understand how files map to routes, everything else (data fetching, middleware, layouts) becomes confusing.\n\n## The App Directory Structure\n\n- **`app/`** — This is the router. Every folder inside it becomes a URL segment. For example, `app/dashboard/settings/` maps to `/dashboard/settings`.\n- **`app/page.jsx`** — This is the homepage (`/`). Every route segment needs a `page.jsx` to be publicly accessible. Without it, the route exists but returns a 404.\n- **`app/layout.jsx`** — This is the root layout that wraps ALL pages. It's where you put your `<html>`, `<body>` tags, global providers, and fonts. Every layout also receives a `children` prop.\n- **`app/loading.jsx`** — Automatically shown as a loading UI while the page's data is being fetched.\n- **`app/error.jsx`** — Catches runtime errors for the route segment and shows a fallback UI.\n- **`app/not-found.jsx`** — Custom 404 page for unmatched routes.\n- **`app/globals.css`** — Global styles imported in the root layout.\n- **`public/`** — Static assets (images, fonts, icons) served directly at the root URL.\n- **`next.config.js`** — Configuration for Webpack, redirects, rewrites, environment variables, and image domains.\n- **`package.json`** — Dependencies and scripts (`dev`, `build`, `start`, `lint`).\n\n## Server Components vs Client Components\n\nBy default, every component inside `app/` is a **Server Component** — it runs on the server, never ships JavaScript to the browser, and can directly access databases and file systems. To make a component interactive (use state, effects, event handlers, browser APIs), you must add `'use client'` at the very top of the file. This creates a clear boundary between server and client code.\n\n## Key Takeaway\n\nThe architecture is designed so that the framework handles the hard parts (routing, code-splitting, rendering) while you focus on building UI and logic. Understanding this structure before writing any code saves hours of debugging later.",
    "keyRules": [
      "The 'app/' directory is the router — each folder is a route",
      "page.jsx inside a folder makes it a publicly accessible route",
      "layout.jsx wraps all pages in that segment",
      "Use 'use client' directive for client-side components",
      "Server Components are the default — no JS shipped to browser",
      "loading.jsx, error.jsx, not-found.jsx are special reserved files"
    ],
    "task": "Create a simple App component that renders a heading 'Welcome to Next.js' and a paragraph describing what you'll learn.",
    "hint": "This is a basic JSX exercise — just return a div with h1 and p tags.",
    "learnings": [
      { "title": "Dynamic & Catch-all Routes", "desc": "Implementing slug-based routing, optional catch-all parameters, and generating static paths." },
      { "title": "Route Groups & Parallel Routes", "desc": "Organizing code without affecting URL structure, building simultaneous multi-view dashboards." },
      { "title": "Intercepting Routes (Modals)", "desc": "Creating rich, shareable URLs for overlays and modals that load seamlessly in-context." },
      { "title": "Link Component & Programmatic Routing", "desc": "Optimizing client-side navigation using next/link, useRouter hook, and prefetching behaviors." }
    ],
    "starterCode": `function App() {
    return (
    <div>\n      \n    </div>\n  );\n}`,
    "solutionCode": "function App() {\n  return (\n    <div>\n      <h1>Welcome to Next.js</h1>\n      <p>I will learn server-side rendering, routing, and more!</p>\n    </div>\n  );\n}",
    "exampleCode": "// 📁 Typical Next.js App Directory Structure\n\napp/\n├── layout.jsx          // Root layout (html, body, fonts, providers)\n├── page.jsx            // Homepage → /\n├── globals.css         // Global styles\n├── loading.jsx         // Root loading spinner\n├── error.jsx           // Root error boundary\n├── not-found.jsx       // Custom 404 page\n├── blog/\n│   ├── page.jsx        // Blog listing → /blog\n│   └── [slug]/\n│       └── page.jsx    // Blog post → /blog/my-post\n├── dashboard/\n│   ├── layout.jsx      // Dashboard layout (sidebar, auth guard)\n│   ├── page.jsx        // Dashboard home → /dashboard\n│   └── settings/\n│       └── page.jsx    // Settings → /dashboard/settings\n└── api/\n    └── users/\n        └── route.js    // API endpoint → /api/users\n\npublic/\n├── logo.png\n└── favicon.ico\n\nnext.config.js          // Framework configuration\npackage.json            // Dependencies & scripts",
    "tests": [
      { "description": "Renders an <h1> element", "check": "code => /<h1>[\\s\\S]*?<\\/h1>/.test(code)" },
      { "description": "h1 contains 'Next.js'", "check": "code => /<h1>[\\s\\S]*?Next\\.js[\\s\\S]*?<\\/h1>/.test(code)" },
      { "description": "Renders a <p> element", "check": "code => /<p>[\\s\\S]*?<\\/p>/.test(code)" }
    ]
  },
  {
    "id": "02",
    "slug": "routing-navigation",
    "title": "Routing & Navigation Deep Dive",
    "icon": "Compass",
    "overview": "Master complex layout patterns, dynamic navigation pipelines, and advanced routing architectures for modern web apps.",
    "explanation": "## How Next.js Routing Works\n\nNext.js uses a **file-system based router** — there are no route configuration files. Every folder inside `app/` automatically becomes a URL segment. This means your file explorer IS your route map. The depth of nesting in folders directly translates to the depth of URL paths.\n\n## Static Routes\n\nThe simplest form of routing. A folder like `app/about/page.jsx` automatically maps to `/about`. No configuration needed. These are ideal for pages that don't change based on user input — like an About page, Contact page, or Pricing page.\n\n## Dynamic Routes\n\nWhen you need URLs that change based on data (like blog posts, user profiles, product pages), you use **dynamic segments** with square bracket notation:\n\n- `app/blog/[slug]/page.jsx` → matches `/blog/hello-world`, `/blog/nextjs-tutorial`, etc.\n- The value inside `[]` is accessible via the `params` prop: `params.slug`\n- Multiple dynamic segments: `app/shop/[category]/[productId]/page.jsx`\n\n## Catch-All Routes\n\nFor deeply nested or unpredictable URL structures, use catch-all segments with `...`:\n\n- `app/docs/[...slug]/page.jsx` → matches `/docs/a`, `/docs/a/b`, `/docs/a/b/c`\n- The `params.slug` becomes an array: `['a', 'b', 'c']`\n- Optional catch-all with double brackets: `app/docs/[[...slug]]/page.jsx` — also matches `/docs` itself (slug is undefined)\n\n## Route Groups\n\nSometimes you want to organize code without affecting the URL. Use parentheses:\n\n- `app/(marketing)/about/page.jsx` → still maps to `/about` (the `marketing` folder is invisible in the URL)\n- This is perfect for grouping pages that share a layout: `app/(dashboard)/layout.jsx` wraps all dashboard pages\n- You can even have multiple route groups at the same level with different layouts\n\n## Parallel Routes\n\nParallel routes let you render multiple pages in the same layout simultaneously using `@` notation:\n\n- `app/dashboard/@overview/page.jsx` and `app/dashboard/@analytics/page.jsx`\n- In the parent layout: `children` becomes `{ overview, analytics }` slots\n- Perfect for split-view dashboards, side panels, or multi-tab interfaces\n- Each slot can independently load, error, and have its own loading state\n\n## Intercepting Routes\n\nThis is Next.js's secret weapon for modal patterns. By using `(.)` notation, you can \"intercept\" a navigation and show it in a modal instead of a full page:\n\n- `app/dashboard/@modal/(.)photos/[id]/page.jsx` — intercepts navigation to `/photos/123`\n- When the user clicks a photo link, it opens in a modal overlay\n- When the user directly visits `/photos/123` (refresh), it loads as a full page\n- The modal is shareable, bookmarkable, and works without JavaScript\n\n## The Link Component\n\nAlways use `next/link` instead of `<a>` tags. It provides:\n- **Automatic prefetching** — Next.js fetches the linked page's code when the link enters the viewport\n- **Client-side navigation** — No full page reload, instant transitions\n- **Scroll preservation** — Maintains scroll position on back/forward\n- **Automatic code-splitting** — Only loads the JS for the page you're navigating to",
    "keyRules": [
      "Folders inside app/ map directly to URL paths",
      "Dynamic segments use [param] — e.g., blog/[slug]",
      "Catch-all segments use [...slug] for nested paths",
      "Route groups (folder) don't affect the URL structure",
      "Parallel routes use @folder for simultaneous views",
      "Intercepting routes use (.) for modal patterns",
      "Use next/link for client-side navigation with prefetch"
    ],
    "task": "Create a component that renders a list of route paths including a dynamic route [slug], and highlights the currently selected path. Use useState to track the active route.",
    "hint": "Create an array of route objects with path and label. Use useState to track which is active, and apply conditional styles.",
    "starterCode": "function App() {\n  \n  return (\n    <div>\n      \n    </div>\n  );\n}",
    "solutionCode": "function App() {\n  const [currentPath, setCurrentPath] = useState(\"/dashboard\");\n  const routes = [\n    { path: \"/dashboard\", label: \"Dashboard\" },\n    { path: \"/dashboard/settings\", label: \"Settings\" },\n    { path: \"/dashboard/profile\", label: \"Profile\" },\n    { path: \"/blog/[slug]\", label: \"Blog Post (Dynamic)\" },\n  ];\n  const params = { slug: \"my-first-post\" };\n\n  function resolvePath(template, p) {\n    return template.replace(/\\[([^\\]]+)\\]/, (_, key) => p[key] || key);\n  }\n\n  return (\n    <div style={{ fontFamily: \"system-ui\", padding: 20 }}>\n      <h1 style={{ color: \"#e2e8f0\", marginBottom: 4 }}>Dynamic Routing Demo</h1>\n      <p style={{ color: \"#94a3b8\", marginBottom: 16, fontSize: 13 }}>Click routes to navigate (simulated)</p>\n      <div style={{ display: \"flex\", flexDirection: \"column\", gap: 6, marginBottom: 20 }}>\n        {routes.map((r) => (\n          <button key={r.path} onClick={() => setCurrentPath(r.path)} style={{ padding: \"8px 14px\", borderRadius: 6, border: \"none\", cursor: \"pointer\", background: currentPath === r.path ? \"rgba(139,92,246,0.2)\" : \"rgba(255,255,255,0.04)\", color: currentPath === r.path ? \"#a78bfa\" : \"#94a3b8\", fontSize: 13, textAlign: \"left\", fontWeight: currentPath === r.path ? 600 : 400, borderLeft: currentPath === r.path ? \"3px solid #8b5cf6\" : \"3px solid transparent\" }}>\n            {r.label}\n          </button>\n        ))}\n      </div>\n      <div style={{ padding: 14, borderRadius: 8, background: \"rgba(96,165,250,0.08)\", border: \"1px solid rgba(96,165,250,0.15)\" }}>\n        <span style={{ color: \"#60a5fa\", fontSize: 12, fontWeight: 600 }}>CURRENT PATH:</span>\n        <code style={{ color: \"#e2e8f0\", marginLeft: 8, fontSize: 14 }}>{resolvePath(currentPath, params)}</code>\n      </div>\n    </div>\n  );\n}",
    "exampleCode": "// 📁 Routing Patterns in Next.js\n\n// 1️⃣ Static Route\n// app/about/page.jsx → /about\nexport default function AboutPage() {\n  return <h1>About Us</h1>;\n}\n\n// 2️⃣ Dynamic Route\n// app/blog/[slug]/page.jsx → /blog/my-first-post\nexport default function BlogPost({ params }) {\n  return <h1>Post: {params.slug}</h1>;\n}\n\n// 3️⃣ Catch-All Route\n// app/docs/[...slug]/page.jsx → /docs/a/b/c\nexport default function DocsPage({ params }) {\n  // params.slug = ['a', 'b', 'c']\n  return <h1>Path: {params.slug.join(' > ')}</h1>;\n}\n\n// 4️⃣ Route Group (no URL impact)\n// app/(marketing)/about/page.jsx → /about\n// app/(marketing)/contact/page.jsx → /contact\n// Both share: app/(marketing)/layout.jsx\n\n// 5️⃣ Parallel Routes\n// app/dashboard/@overview/page.jsx\n// app/dashboard/@analytics/page.jsx\n// Parent layout receives: { overview, analytics }\n\n// 6️⃣ Intercepting Route (Modal pattern)\n// app/@modal/(.)photos/[id]/page.jsx\n// Intercepts /photos/123 → shows in modal\n// Direct visit to /photos/123 → full page\n\n// 7️⃣ Navigation with next/link\nimport Link from 'next/link';\n\nexport default function Nav() {\n  return (\n    <nav>\n      <Link href=\"/\" prefetch>Home</Link>\n      <Link href=\"/blog/[slug]\" as=\"/blog/hello\">Post</Link>\n      <Link href={{ pathname: '/search', query: { q: 'nextjs' } }}>\n        Search\n      </Link>\n    </nav>\n  );\n}\n\n// 8️⃣ Programmatic Navigation\n'use client';\nimport { useRouter, usePathname } from 'next/navigation';\n\nfunction SearchBar() {\n  const router = useRouter();\n  const pathname = usePathname(); // e.g. \"/dashboard\"\n\n  function handleSearch(query) {\n    router.push(`/search?q=${query}`);\n    // router.replace() — no history entry\n    // router.back() — go back\n    // router.refresh() — re-fetch server data\n  }\n}",
    "learnings": [
      { "title": "Dynamic & Catch-all Routes", "desc": "Implementing slug-based routing, optional catch-all parameters, and generating static paths." },
      { "title": "Route Groups & Parallel Routes", "desc": "Organizing code without affecting URL structure, building simultaneous multi-view dashboards." },
      { "title": "Intercepting Routes (Modals)", "desc": "Creating rich, shareable URLs for overlays and modals that load seamlessly in-context." },
      { "title": "Link Component & Programmatic Routing", "desc": "Optimizing client-side navigation using next/link, useRouter hook, and prefetching behaviors." }
    ],
    "tests": [
      { "id": "t1", "description": "Should use useState for current path", "check": "code => /useState\\s*\\(/.test(code)" },
      { "id": "t2", "description": "Should have dynamic route pattern [slug]", "check": "code => code.includes(\"[slug]\")" },
      { "id": "t3", "description": "Should have route resolution logic", "check": "code => /replace\\s*\\(/.test(code) && /\\[/.test(code)" },
      { "id": "t4", "description": "Should render Dashboard route", "check": "code => code.includes(\"Dashboard\")" },
      { "id": "t5", "description": "Should render at least 4 routes", "check": "code => (code.match(/path:\\s*\"/g) || []).length >= 4" }
    ]
  },
  {
    "id": "03",
    "slug": "server-components-rendering",
    "title": "Server Components & Rendering Strategies",
    "icon": "Cpu",
    "overview": "Architect ultra-fast web pages by leveraging Next.js rendering runtimes — SSR, SSG, ISR, and Partial Prerendering.",
    "explanation": "## The Rendering Problem\n\nIn traditional React (Client-Side Rendering / CSR), the server sends a nearly empty HTML file with a `<script>` tag. The browser downloads the JavaScript, parses it, executes it, makes API calls, and THEN renders the UI. Users see a blank page or loading spinner during all of this. This is terrible for SEO, slow on weak devices, and creates a poor First Contentful Paint (FCP).\n\nNext.js solves this by offering **multiple rendering strategies** — you choose the right one for each page based on its data requirements.\n\n## Server-Side Rendering (SSR)\n\n**What:** The server generates the complete HTML for every single request. The user receives a fully rendered page immediately.\n\n**How:** In the `app/` directory, components are Server Components by default. Any `async` data fetching (direct database queries, API calls) happens on the server before the HTML is sent.\n\n**When to use:** Pages with real-time or personalized data — user dashboards, social feeds, live scores, search results. Any page where the content changes on every request.\n\n**Trade-off:** Slightly slower Time to First Byte (TTFB) because the server does work on every request, but the user sees content immediately (no blank screen).\n\n## Static Site Generation (SSG)\n\n**What:** Pages are rendered once at build time (when you run `next build`) and the resulting HTML is cached and served to every user.\n\n**How:** If a page has no dynamic data fetching (no `await` calls, no `cookies()`, no `headers()`), Next.js automatically treats it as static. You can also use `generateStaticParams()` for dynamic routes.\n\n**When to use:** Content that doesn't change between requests — blog posts, documentation pages, marketing landing pages, product catalogs updated infrequently.\n\n**Trade-off:** Blazing fast (served from CDN edge), but content becomes stale until you rebuild. Not suitable for personalized or real-time data.\n\n## Incremental Static Regeneration (ISR)\n\n**What:** The best of both worlds — pages are served as static HTML (fast), but can be re-rendered in the background after a specified time interval.\n\n**How:** Add `export const revalidate = 60;` (seconds) at the top of your page. The first request gets the cached static page. After 60 seconds, the next request still gets the cached page, but Next.js triggers a background re-render. The following request gets the fresh page.\n\n**When to use:** E-commerce product pages (price updates every few minutes), CMS-driven content (blog posts edited occasionally), dashboard stats that can be slightly stale.\n\n**Trade-off:** Near-SSG performance with automatic freshness, but there's always a window of stale data (the revalidation interval).\n\n## Partial Prerendering (PPR) — Experimental\n\n**What:** A single page can have BOTH static and dynamic parts. The static \"shell\" is served instantly from cache, while dynamic \"holes\" are streamed in from the server.\n\n**How:** Wrap dynamic components in `<Suspense fallback={...}>`. The static parts of the page are pre-rendered at build time, and the suspended parts are streamed on each request.\n\n**When to use:** Pages that are mostly static but have small dynamic sections — a documentation page with a \"last updated\" timestamp, a product page with a real-time stock indicator, a blog post with a dynamic comment count.\n\n## React Server Components (RSC)\n\nThis is the underlying technology that makes all of this possible. Server Components:\n- Run ONLY on the server (zero client-side JavaScript)\n- Can directly access databases, file systems, environment variables\n- Can use `async/await` directly in the component body\n- Cannot use `useState`, `useEffect`, event handlers, or browser APIs\n- Pass serializable data as props to Client Components\n\nClient Components (`'use client'`):\n- Run on both server (initial render) and client (hydration)\n- Can use hooks, state, effects, event listeners\n- Cannot directly access databases or server-only APIs\n- Can import and render Server Components as children",
    "keyRules": [
      "Components are Server Components by default in the app/ directory",
      "Add 'use client' at the top to make a component a Client Component",
      "SSR is ideal for dynamic, real-time data pages",
      "SSG is best for blogs, docs, and marketing pages",
      "ISR adds revalidation to SSG for periodic updates",
      "PPR combines static shells with dynamic streaming holes",
      "Server Components can directly await async operations"
    ],
    "task": "Create a component that displays four rendering strategies (SSR, SSG, ISR, PPR) as cards, each showing the strategy name, full form, description, and a use case.",
    "hint": "Define an array of strategy objects with name, full, color, desc, and when properties. Map over them to render styled cards.",
    "starterCode": "function App() {\n  \n  return (\n    <div>\n      \n    </div>\n  );\n}",
    "solutionCode": "function App() {\n  const strategies = [\n    { name: \"SSR\", full: \"Server-Side Rendering\", color: \"#60a5fa\", desc: \"Rendered on every request\", when: \"Dynamic data, real-time\" },\n    { name: \"SSG\", full: \"Static Site Generation\", color: \"#a78bfa\", desc: \"Rendered at build time\", when: \"Blog, docs, marketing\" },\n    { name: \"ISR\", full: \"Incremental Static Regen\", color: \"#fbbf24\", desc: \"Static + background revalidate\", when: \"E-commerce, CMS content\" },\n    { name: \"PPR\", full: \"Partial Prerendering\", color: \"#34d399\", desc: \"Static shell + dynamic holes\", when: \"Mixed static/dynamic pages\" },\n  ];\n  return (\n    <div style={{ fontFamily: \"system-ui\", padding: 20 }}>\n      <h1 style={{ color: \"#e2e8f0\", marginBottom: 4 }}>Rendering Strategies</h1>\n      <p style={{ color: \"#94a3b8\", marginBottom: 16, fontSize: 13 }}>Choose the right strategy for each route</p>\n      <div style={{ display: \"flex\", flexDirection: \"column\", gap: 10 }}>\n        {strategies.map((s) => (\n          <div key={s.name} style={{ padding: 14, borderRadius: 8, background: \"rgba(255,255,255,0.03)\", border: \"1px solid rgba(255,255,255,0.07)\" }}>\n            <div style={{ display: \"flex\", alignItems: \"center\", gap: 10, marginBottom: 6 }}>\n              <span style={{ background: s.color, color: \"#000\", fontWeight: 700, fontSize: 11, padding: \"2px 8px\", borderRadius: 4 }}>{s.name}</span>\n              <span style={{ color: \"#cbd5e1\", fontSize: 13 }}>{s.full}</span>\n            </div>\n            <p style={{ color: \"#94a3b8\", fontSize: 12, margin: 0 }}>{s.desc}</p>\n            <p style={{ color: s.color, fontSize: 11, marginTop: 4, margin: \"4px 0 0\" }}>Use case: {s.when}</p>\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n}",
    "exampleCode": "// 🔄 Rendering Strategies in Next.js\n\n// 1️⃣ SSR — Server-Side Rendering (default for dynamic pages)\n// app/dashboard/page.jsx\n// Runs on EVERY request — fresh data each time\nexport default async function DashboardPage() {\n  const users = await db.user.findMany(); // Direct DB query!\n  return (\n    <div>\n      <h1>Dashboard</h1>\n      <p>{users.length} active users</p>\n    </div>\n  );\n}\n\n// 2️⃣ SSG — Static Site Generation\n// app/about/page.jsx\n// Rendered ONCE at build time — served from CDN\nexport default function AboutPage() {\n  return <h1>About Us — This page was built at compile time</h1>;\n}\n\n// For dynamic routes with SSG:\n// app/blog/[slug]/page.jsx\nexport async function generateStaticParams() {\n  const posts = await db.post.findMany({ select: { slug: true } });\n  return posts.map((post) => ({ slug: post.slug }));\n}\nexport default async function BlogPost({ params }) {\n  const post = await db.post.findUnique({\n    where: { slug: params.slug }\n  });\n  return <article>{post.title}</article>;\n}\n\n// 3️⃣ ISR — Incremental Static Regeneration\n// app/products/page.jsx\n// Served as static HTML, revalidated every 60 seconds\nexport const revalidate = 60; // seconds\n\nexport default async function ProductsPage() {\n  const products = await fetch('https://api.store.com/products', {\n    next: { revalidate: 60 }\n  }).then(res => res.json());\n  return <div>{/* render products */}</div>;\n}\n\n// 4️⃣ PPR — Partial Prerendering (experimental)\n// app/page.jsx\nimport { Suspense } from 'react';\n\nexport default function Page() {\n  return (\n    <div>\n      {/* Static shell — pre-rendered at build time */}\n      <header>My Store</header>\n      <nav>Home | Products | Contact</nav>\n\n      {/* Dynamic hole — streamed on each request */}\n      <Suspense fallback={<p>Loading cart...</p>}>\n        <CartWidget /> // Shows real-time cart items\n      </Suspense>\n\n      {/* Static again */}\n      <footer>© 2024</footer>\n    </div>\n  );\n}\n\n// 5️⃣ Server Component vs Client Component\n\n// Server Component (default) — NO 'use client'\n// ✅ Can use async/await, fetch, db queries\n// ❌ Cannot use useState, useEffect, onClick\nasync function UserProfile({ id }) {\n  const user = await db.user.findUnique({ where: { id } });\n  return <h1>{user.name}</h1>;\n}\n\n// Client Component — needs 'use client'\n// ✅ Can use hooks, event handlers, browser APIs\n// ❌ Cannot directly access db, fs, env vars\n'use client';\nimport { useState } from 'react';\nfunction LikeButton() {\n  const [likes, setLikes] = useState(0);\n  return <button onClick={() => setLikes(l => l + 1)}>❤️ {likes}</button>;\n}",
    "learnings": [
      { "title": "React Server Components (RSC)", "desc": "Understanding the paradigm shift: Server Components vs Client Components ('use client') and boundaries." },
      { "title": "SSR vs SSG vs ISR", "desc": "Configuring Server-Side Rendering, Static Site Generation, and Incremental Static Regeneration at scale." },
      { "title": "Partial Prerendering (PPR)", "desc": "Combining static shells with dynamic server-rendered holes for instant initial page loads." },
      { "title": "Edge vs Node.js Runtimes", "desc": "Choosing between heavy global server runtimes and lightweight, ultra-fast distributed Edge execution." }
    ],
    "tests": [
      { "id": "t1", "description": "Should list SSR strategy", "check": "code => code.includes(\"SSR\")" },
      { "id": "t2", "description": "Should list SSG strategy", "check": "code => code.includes(\"SSG\")" },
      { "id": "t3", "description": "Should list ISR strategy", "check": "code => code.includes(\"ISR\")" },
      { "id": "t4", "description": "Should list PPR strategy", "check": "code => code.includes(\"PPR\")" },
      { "id": "t5", "description": "Should describe when to use each strategy", "check": "code => code.includes(\"Use case\") || code.includes(\"when\")" }
    ]
  },
  {
    "id": "04",
    "slug": "data-fetching-caching",
    "title": "Data Fetching, Caching & Revalidation",
    "icon": "RefreshCw",
    "overview": "Build highly optimized data synchronization layers with granular and aggressive caching mechanics of Next.js.",
    "explanation": "## Why Caching Matters in Next.js\n\nWithout caching, every page visit would trigger database queries, API calls, and full re-renders — even for the same data. This would make your app slow, expensive to run, and unable to handle traffic spikes. Next.js provides a **four-layer caching architecture** that automatically deduplicates and stores data at different levels of granularity.\n\n## Layer 1: Request Memoization\n\n**Scope:** Single server render (one request)\n**What it does:** If you call `fetch('https://api.example.com/users')` multiple times in the same render tree (in different components), Next.js only makes the actual network request ONCE. The result is memoized and reused for all components in that render.\n\n**Important:** This is NOT persistent. It only lasts for the duration of a single request. The next user's request will trigger a fresh fetch.\n\n**When it matters:** You have a deeply nested component tree where multiple components need the same user data or configuration. Without memoization, you'd make 5 identical API calls in one render.\n\n## Layer 2: Data Cache\n\n**Scope:** Across requests and deployments (persistent)\n**What it does:** The fetched data is stored on the server's filesystem or in a persistent cache. Subsequent requests for the same URL get the cached response instantly — no network call, no database query.\n\n**How to control it:**\n- `fetch('url', { cache: 'force-cache' })` — always cache (default)\n- `fetch('url', { cache: 'no-store' })` — never cache (always fresh)\n- `fetch('url', { next: { revalidate: 60 } })` — cache but revalidate after 60 seconds\n\n**When to bypass:** Real-time data (stock prices, live chat), user-specific data that changes per request, POST/PUT responses.\n\n## Layer 3: Full Route Cache\n\n**Scope:** Build time and revalidation\n**What it does:** After a page is rendered (either at build time for SSG or on first request for SSR), the entire HTML + React Server Component payload is stored. This includes the rendered HTML and a serialized representation of the component tree. Future visits get this pre-built output.\n\n**How it's invalidated:** When you revalidate data (time-based or on-demand), the route cache for that page is also invalidated and the page is re-rendered.\n\n**Important:** This cache only stores the Server Component output. Client Components still need to hydrate on the browser.\n\n## Layer 4: Router Cache\n\n**Scope:** Client-side, per browser session\n**What it does:** When a user navigates between pages using `next/link`, Next.js stores the RSC payload of visited routes in the browser's memory. Going back to a previous page is instant — no server request needed.\n\n**How it works:**\n- Pages the user has visited are cached for a duration\n- Prefetched pages (links in viewport) are cached with shorter duration\n- `router.refresh()` invalidates this cache and re-fetches from server\n\n**Caveat:** This can cause users to see stale data after mutations. Always call `router.refresh()` after a Server Action or form submission to update the Router Cache.\n\n## On-Demand Revalidation\n\nInstead of waiting for a time interval, you can trigger revalidation programmatically:\n\n- `revalidatePath('/blog')` — revalidates all data cached for this path\n- `revalidatePath('/blog/[slug]', 'page')` — revalidates specific page type\n- `revalidateTag('posts')` — revalidates all fetch calls tagged with `'posts'`\n\nTags are assigned during fetch: `fetch('url', { next: { tags: ['posts'] } })`",
    "keyRules": [
      "Request Memoization deduplicates identical fetch() calls within one render",
      "Data Cache persists fetched data across requests and deployments",
      "Full Route Cache stores the complete rendered HTML and RSC payload",
      "Router Cache is a client-side cache for visited routes",
      "Use revalidatePath or revalidateTag for on-demand revalidation",
      "Use cache: 'no-store' for real-time or user-specific data",
      "Always call router.refresh() after mutations to update Router Cache"
    ],
    "task": "Create an interactive component that displays four caching layers as buttons. When a button is clicked, show details about that caching layer including its description and scope.",
    "hint": "Use useState to track the selected cache type. Define an array of cache type objects with key, label, desc, scope, and color. Conditionally render the details panel based on the selected cache.",
    "starterCode": "function App() {\n  \n  return (\n    <div>\n      \n    </div>\n  );\n}",
    "solutionCode": "function App() {\n  const [cacheType, setCacheType] = useState(\"requestMemo\");\n  const cacheTypes = [\n    { key: \"requestMemo\", label: \"Request Memoization\", desc: \"Deduplicates fetch() calls during a single server render\", scope: \"Per-request\", color: \"#60a5fa\" },\n    { key: \"dataCache\", label: \"Data Cache\", desc: \"Persists fetched data across requests and deployments\", scope: \"Persistent\", color: \"#a78bfa\" },\n    { key: \"fullRoute\", label: \"Full Route Cache\", desc: \"Caches the entire rendered HTML+RSC payload at build time\", scope: \"Build-time / Revalidation\", color: \"#fbbf24\" },\n    { key: \"routerCache\", label: \"Router Cache\", desc: \"Client-side cache for visited routes in the browser\", scope: \"Session / Time-based\", color: \"#34d399\" },\n  ];\n  const selected = cacheTypes.find(c => c.key === cacheType);\n  return (\n    <div style={{ fontFamily: \"system-ui\", padding: 20 }}>\n      <h1 style={{ color: \"#e2e8f0\", marginBottom: 4 }}>Next.js Caching Layers</h1>\n      <p style={{ color: \"#94a3b8\", marginBottom: 16, fontSize: 13 }}>Click each layer to learn more</p>\n      <div style={{ display: \"flex\", gap: 6, flexWrap: \"wrap\", marginBottom: 16 }}>\n        {cacheTypes.map((c) => (\n          <button key={c.key} onClick={() => setCacheType(c.key)} style={{ padding: \"6px 12px\", borderRadius: 6, border: \"none\", cursor: \"pointer\", fontSize: 12, background: cacheType === c.key ? c.color + \"22\" : \"rgba(255,255,255,0.04)\", color: cacheType === c.key ? c.color : \"#64748b\", fontWeight: cacheType === c.key ? 600 : 400, borderLeft: cacheType === c.key ? \"3px solid \" + c.color : \"3px solid transparent\" }}>{c.label}</button>\n        ))}\n      </div>\n      {selected && (\n        <div style={{ padding: 16, borderRadius: 8, background: selected.color + \"0d\", border: \"1px solid \" + selected.color + \"22\" }}>\n          <h3 style={{ color: selected.color, margin: \"0 0 6px\" }}>{selected.label}</h3>\n          <p style={{ color: \"#cbd5e1\", fontSize: 13, margin: \"0 0 4px\" }}>{selected.desc}</p>\n          <p style={{ color: \"#64748b\", fontSize: 11, margin: 0 }}>Scope: {selected.scope}</p>\n        </div>\n      )}\n    </div>\n  );\n}",
    "exampleCode": "// 🗄️ Data Fetching & Caching in Next.js\n\n// 1️⃣ Basic Server Component Fetch (uses all caches by default)\n// app/users/page.jsx\nasync function getUsers() {\n  // This fetch is:\n  // - Request Memoized (deduped in same render)\n  // - Data Cached (persisted across requests)\n  // - Full Route Cached (HTML+RSC stored)\n  const res = await fetch('https://api.example.com/users');\n  return res.json();\n}\n\nexport default async function UsersPage() {\n  const users = await getUsers();\n  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;\n}\n\n// 2️⃣ Force No Cache (always fresh — SSR on every request)\nasync function getLiveScore() {\n  const res = await fetch('https://api.sports.com/score', {\n    cache: 'no-store'  // Bypasses Data Cache & Full Route Cache\n  });\n  return res.json();\n}\n\n// 3️⃣ Time-Based Revalidation (ISR)\nasync function getProducts() {\n  const res = await fetch('https://api.store.com/products', {\n    next: { revalidate: 300 }  // Revalidate every 5 minutes\n  });\n  return res.json();\n}\n\n// 4️⃣ Tag-Based Revalidation\n// During fetch — assign a tag\nasync function getPosts() {\n  const res = await fetch('https://api.blog.com/posts', {\n    next: { tags: ['blog-posts'] }\n  });\n  return res.json();\n}\n\n// In a Server Action — trigger revalidation\n'use server';\nimport { revalidateTag } from 'next/cache';\n\nexport async function createPost(formData) {\n  await db.post.create({ data: { title: formData.get('title') } });\n  revalidateTag('blog-posts'); // Purges all 'blog-posts' cached data\n}\n\n// 5️⃣ Path-Based Revalidation\n'use server';\nimport { revalidatePath } from 'next/cache';\n\nexport async function updateProfile(formData) {\n  await db.user.update({\n    where: { id: formData.get('id') },\n    data: { name: formData.get('name') }\n  });\n  revalidatePath('/profile');   // Revalidates this specific path\n  revalidatePath('/dashboard'); // Revalidates another path\n}\n\n// 6️⃣ Router Cache — Client-side navigation\n'use client';\nimport { useRouter } from 'next/navigation';\n\nexport function CreatePostButton() {\n  const router = useRouter();\n\n  async function handleSubmit() {\n    await fetch('/api/posts', { method: 'POST', body: ... });\n    router.push('/blog');      // Navigate to blog\n    router.refresh();          // ⚠️ CRITICAL: Clear Router Cache\n    // Without refresh(), user sees stale data from Router Cache!\n  }\n}",
    "learnings": [
      { "title": "Server-side Fetching Mechanics", "desc": "Fetching async data directly inside Server Components safely without exposing private tokens." },
      { "title": "Next.js Cache Extended API", "desc": "Mastering request memoization, Data Cache, Full Route Cache, and Router Cache." },
      { "title": "Time-based & On-demand Revalidation", "desc": "Using revalidatePath and revalidateTag to purge stale data across edge networks." },
      { "title": "TanStack Query with RSC", "desc": "Integrating React Query for robust client-side state fetching alongside server hydration." }
    ],
    "tests": [
      { "id": "t1", "description": "Should use useState", "check": "code => /useState\\s*\\(/.test(code)" },
      { "id": "t2", "description": "Should include Request Memoization", "check": "code => code.includes(\"Request Memoization\")" },
      { "id": "t3", "description": "Should include Data Cache", "check": "code => code.includes(\"Data Cache\")" },
      { "id": "t4", "description": "Should include Router Cache", "check": "code => code.includes(\"Router Cache\")" },
      { "id": "t5", "description": "Should show details on selection", "check": "code => /selected\\s*&&/.test(code) || code.includes(\"selected &&\")" }
    ]
  },
  {
    "id": "05",
    "slug": "server-actions-mutations",
    "title": "Server Actions & Mutation Layer",
    "icon": "Zap",
    "overview": "Eliminate API boilerplate by mutating server data securely and directly from user-facing React components.",
    "explanation": "## The Problem Server Actions Solve\n\nBefore Server Actions, every form submission or data mutation in a Next.js app required a multi-step dance:\n\n1. Create an API route (`app/api/create-post/route.js`)\n2. Write the handler function with request/response parsing\n3. In the client component, write a `fetch()` call with the right method, headers, and body\n4. Handle loading states manually\n5. Handle errors manually\n6. After success, manually revalidate or redirect\n\nServer Actions eliminate ALL of this boilerplate. You define a function, mark it with `'use server'`, and call it directly from your component — no API routes, no fetch calls, no manual error handling.\n\n## How Server Actions Work\n\nA Server Action is an `async` function that runs exclusively on the server. It has two forms:\n\n**Inline Server Action:** Defined directly inside a Server Component and passed to a form's `action` prop.\n\n**Module Server Action:** Defined in a separate file with `'use server'` at the top, imported into a Client Component. This is the most common pattern.\n\nWhen the user submits a form or clicks a button that triggers a Server Action:\n1. The browser sends a POST request to the same page URL\n2. Next.js intercepts it, identifies it as a Server Action call\n3. The function executes on the server with full access to DB, env vars, etc.\n4. The result (success/error) is sent back to the client\n5. Next.js automatically handles revalidation and state updates\n\n## Form Integration\n\nThe most natural use case. Instead of `onSubmit` + `fetch()`:\n\n```jsx\n<form action={createPost}>  // Direct reference to Server Action\n  <input name=\"title\" />\n  <button type=\"submit\">Create</button>\n</form>\n```\n\nThe form data is automatically serialized and passed to the Server Action as a `FormData` object. No `e.preventDefault()`, no `new FormData()`, no JSON.stringify.\n\n## useActionState\n\nFor managing the state of a Server Action (pending, success, error), use the `useActionState` hook:\n\n```jsx\nconst [state, formAction, isPending] = useActionState(createPost, initialState);\n```\n- `state` — the return value from the Server Action (can include errors, success messages)\n- `formAction` — pass this to the form's `action` prop\n- `isPending` — boolean, true while the action is executing (use for loading spinners)\n\n## useOptimistic\n\nFor instant UI feedback before the server confirms:\n\n```jsx\nconst [optimisticTodos, addOptimisticTodo] = useOptimistic(todos, (state, newTodo) => {\n  return [...state, { ...newTodo, sending: true }];\n});\n```\n\nWhen you call `addOptimisticTodo(newItem)`, the UI updates IMMEDIATELY with the new item. In the background, the Server Action runs. If it fails, React automatically rolls back to the previous state.\n\n## Progressive Enhancement\n\nServer Actions work even WITHOUT JavaScript. If the user has JS disabled or the JS bundle hasn't loaded yet, the form still submits via a standard HTML form POST. The Server Action still executes. This is a massive accessibility and reliability win that traditional `fetch()`-based forms cannot provide.\n\n## Security Considerations\n\n- Server Actions are protected by CSRF tokens automatically (Next.js injects them)\n- Input validation should happen inside the Server Action (use Zod)\n- Never trust client-side validation alone — always validate on the server\n- Use `redirect()` or `revalidatePath()` inside actions for post-mutation flow",
    "keyRules": [
      "Server Actions are defined with 'use server' directive",
      "They can be passed to form action attributes directly",
      "Use useActionState for managing pending, error, and success states",
      "useOptimistic provides instant UI feedback before server confirms",
      "Server Actions work even without JavaScript (progressive enhancement)",
      "Always validate input inside the Server Action with Zod or similar",
      "Use redirect() or revalidatePath() after mutations for proper flow"
    ],
    "task": "Create a todo list app with a form that adds new items. Use useState for the todos array and input field. Prevent default form submission and add the new todo to the list when the form is submitted.",
    "hint": "Use two useState hooks — one for the todos array and one for the input string. In the form's onSubmit handler, prevent default, append the new todo, and clear the input.",
    "starterCode": "function App() {\n  \n  return (\n    <div>\n      \n    </div>\n  );\n}",
    "solutionCode": "function App() {\n  const [todos, setTodos] = useState([\"Learn Server Actions\", \"Build a form\"]);\n  const [input, setInput] = useState(\"\");\n  function handleSubmit(e) {\n    e.preventDefault();\n    if (!input.trim()) return;\n    setTodos((prev) => [...prev, input.trim()]);\n    setInput(\"\");\n  }\n  return (\n    <div style={{ fontFamily: \"system-ui\", padding: 20, maxWidth: 400 }}>\n      <h1 style={{ color: \"#e2e8f0\", marginBottom: 4 }}>Server Actions Demo</h1>\n      <p style={{ color: \"#94a3b8\", fontSize: 13, marginBottom: 16 }}>Simulated form with action (no API route needed)</p>\n      <form onSubmit={handleSubmit} style={{ display: \"flex\", gap: 8, marginBottom: 16 }}>\n        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder=\"Add a todo...\" style={{ flex: 1, padding: \"8px 12px\", borderRadius: 6, border: \"1px solid #334155\", background: \"#0f172a\", color: \"#e2e8f0\", fontSize: 13 }} />\n        <button type=\"submit\" style={{ padding: \"8px 16px\", borderRadius: 6, border: \"none\", background: \"#8b5cf6\", color: \"#fff\", fontWeight: 600, fontSize: 13, cursor: \"pointer\" }}>Add</button>\n      </form>\n      <div style={{ display: \"flex\", flexDirection: \"column\", gap: 6 }}>\n        {todos.map((t, i) => (\n          <div key={i} style={{ padding: \"8px 12px\", borderRadius: 6, background: \"rgba(139,92,246,0.08)\", border: \"1px solid rgba(139,92,246,0.15)\", color: \"#cbd5e1\", fontSize: 13 }}>{t}</div>\n        ))}\n      </div>\n    </div>\n  );\n}",
    "exampleCode": "// ⚡ Server Actions — Complete Patterns\n\n// 📁 app/actions/posts.ts\n'use server';\n\nimport { z } from 'zod';\nimport { revalidatePath } from 'next/cache';\nimport { redirect } from 'next/navigation';\n\n// Input validation schema\nconst createPostSchema = z.object({\n  title: z.string().min(3, 'Title must be at least 3 characters'),\n  content: z.string().min(10, 'Content must be at least 10 characters'),\n});\n\n// Server Action with validation & error handling\nexport async function createPost(prevState: any, formData: FormData) {\n  const result = createPostSchema.safeParse({\n    title: formData.get('title'),\n    content: formData.get('content'),\n  });\n\n  if (!result.success) {\n    return { error: result.error.flatten().fieldErrors };\n  }\n\n  try {\n    await db.post.create({\n      data: { title: result.data.title, content: result.data.content }\n    });\n    revalidatePath('/blog'); // Refresh the blog listing\n    return { success: true };\n  } catch (error) {\n    return { error: 'Failed to create post' };\n  }\n}\n\n// 📁 app/blog/new/page.jsx\n'use client';\nimport { useActionState } from 'react';\nimport { createPost } from '@/app/actions/posts';\n\nexport default function NewPostPage() {\n  const [state, formAction, isPending] = useActionState(createPost, null);\n\n  return (\n    <form action={formAction}>\n      <input name=\"title\" placeholder=\"Post title\" />\n      {state?.error?.title && <span>{state.error.title[0]}</span>}\n\n      <textarea name=\"content\" placeholder=\"Write your post...\" />\n      {state?.error?.content && <span>{state.error.content[0]}</span>}\n\n      <button type=\"submit\" disabled={isPending}>\n        {isPending ? 'Creating...' : 'Create Post'}\n      </button>\n\n      {state?.success && <p>Post created successfully!</p>}\n      {state?.error && !state.error.title && <p>{state.error}</p>}\n    </form>\n  );\n}\n\n// 🔄 Optimistic UI Pattern\n'use client';\nimport { useOptimistic } from 'react';\nimport { addTodo } from '@/app/actions/todos';\n\nexport function TodoList({ initialTodos }) {\n  const [todos, addOptimisticTodo] = useOptimistic(\n    initialTodos,\n    (state, newTodo) => [...state, { ...newTodo, id: 'temp', sending: true }]\n  );\n\n  async function handleSubmit(formData) {\n    const text = formData.get('todo');\n    addOptimisticTodo({ text }); // UI updates INSTANTLY\n    await addTodo(formData);     // Server confirms in background\n  }\n\n  return (\n    <form action={handleSubmit}>\n      <input name=\"todo\" />\n      <button type=\"submit\">Add</button>\n      <ul>\n        {todos.map(t => (\n          <li key={t.id} style={{ opacity: t.sending ? 0.5 : 1 }}>\n            {t.text}\n          </li>\n        ))}\n      </ul>\n    </form>\n  );\n}",
    "learnings": [
      { "title": "Server Actions Foundations", "desc": "Defining async server functions, secure execution endpoints, and form action attributes." },
      { "title": "Form Validation & Error States", "desc": "Integrating Zod validations with action pipelines and handling states with useActionState." },
      { "title": "Optimistic UI Updates", "desc": "Using the useOptimistic hook to update UI instantly before server confirmation." },
      { "title": "Progressive Enhancement", "desc": "Ensuring functionalities work reliably even when JavaScript is disabled or slow." }
    ],
    "tests": [
      { "id": "t1", "description": "Should use useState for todos", "check": "code => /useState\\s*\\(\\s*\\[/.test(code)" },
      { "id": "t2", "description": "Should have a form with onSubmit", "check": "code => code.includes(\"onSubmit\") && code.includes(\"<form\")" },
      { "id": "t3", "description": "Should have an input controlled by state", "check": "code => code.includes(\"onChange\") && code.includes(\"value={input}\")" },
      { "id": "t4", "description": "Should add new items to the list", "check": "code => /setTodos\\s*\\(\\s*\\(?prev/.test(code) || /setTodos\\s*\\(\\s*\\[\\s*\\.\\.\\./.test(code)" },
      { "id": "t5", "description": "Should prevent default form submission", "check": "code => code.includes(\"preventDefault\")" }
    ]
  },
  {
    "id": "06",
    "slug": "api-routes-middleware",
    "title": "API Routes & Middleware Layer",
    "icon": "Network",
    "overview": "Build powerful backend architectures, webhooks, and request filtration policies natively within your app.",
    "explanation": "## When Do You Need API Routes?\n\nWith Server Actions handling most mutations, you might wonder if API routes are still needed. Yes — they are essential for:\n\n- **Webhooks** from third-party services (Stripe, GitHub, Slack) that send POST requests to your endpoints\n- **Third-party integrations** that need a REST API to call (mobile apps, external services)\n- **File uploads** and binary data handling\n- **SSE (Server-Sent Events)** and WebSocket upgrade endpoints\n- **Public APIs** that other developers consume\n\n## Route Handlers (app/api/)\n\nRoute Handlers replace the old `pages/api/` pattern. They live inside `app/api/` and export named functions corresponding to HTTP methods:\n\n```js\n// app/api/users/route.js\nexport async function GET(request) { /* handle GET */ }\nexport async function POST(request) { /* handle POST */ }\nexport async function PUT(request) { /* handle PUT */ }\nexport async function DELETE(request) { /* handle DELETE */ }\nexport async function PATCH(request) { /* handle PATCH */ }\nexport async function HEAD(request) { /* handle HEAD */ }\nexport async function OPTIONS(request) { /* handle OPTIONS */ }\n```\n\nEach function receives a standard `Request` object and must return a `Response` (or use Next.js's `NextResponse` helper).\n\n## Reading Data from Requests\n\n- **JSON body:** `const body = await request.json()`\n- **Form data:** `const formData = await request.formData()`\n- **URL search params:** `request.nextUrl.searchParams.get('q')`\n- **Headers:** `request.headers.get('authorization')`\n- **Cookies:** `request.cookies.get('session')`\n\n## Dynamic Route Handlers\n\nJust like pages, API routes support dynamic segments:\n\n```js\n// app/api/users/[id]/route.js\nexport async function GET(request, { params }) {\n  const user = await db.user.findUnique({ where: { id: params.id } });\n  return NextResponse.json(user);\n}\n```\n\n## Middleware\n\nMiddleware is code that runs **before** a request is completed. It sits between the incoming request and your route/page. Think of it as a gatekeeper.\n\n**Where it runs:** On the Edge runtime by default (ultra-fast, runs on CDN nodes worldwide, NOT on your Node.js server).\n\n**What it can do:**\n- **Redirect** users (e.g., redirect unauthenticated users to `/login`)\n- **Rewrite** URLs (e.g., `/legacy-page` → `/new-page` without changing the browser URL)\n- **Modify headers** (add CORS headers, security headers)\n- **Geo-routing** (redirect users to region-specific pages based on IP)\n- **A/B testing** (route users to different page versions)\n- **Auth checks** (verify JWT tokens before allowing access)\n\n**What it CANNOT do:**\n- Access databases (Edge runtime has limited Node.js APIs)\n- Use heavy dependencies\n- Read/modify response body\n\n## Middleware Configuration\n\n```js\n// middleware.js (must be in project root, NOT in app/)\nimport { NextResponse } from 'next/server';\n\nexport const config = {\n  matcher: ['/dashboard/:path*', '/api/:path*']\n  // Only runs on these paths — improves performance\n};\n\nexport function middleware(request) {\n  const token = request.cookies.get('session')?.value;\n\n  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {\n    return NextResponse.redirect(new URL('/login', request.url));\n  }\n\n  // Add security headers to all API responses\n  const response = NextResponse.next();\n  response.headers.set('X-Frame-Options', 'DENY');\n  return response;\n}\n```",
    "keyRules": [
      "Route Handlers live in app/api/ folder and export HTTP method functions",
      "Use NextResponse.json() to return JSON responses",
      "Middleware runs on the Edge runtime by default for maximum speed",
      "Middleware can redirect, rewrite, or modify request/response headers",
      "Use streaming responses for large data or AI payloads",
      "Use config.matcher to limit middleware to specific paths",
      "Middleware cannot access databases or use Node.js-only APIs"
    ],
    "task": "Create a component that simulates an API route handler interface. Display buttons for GET, POST, PUT, DELETE methods, show the corresponding endpoint path, and display a sample JSON response.",
    "hint": "Use useState to track the selected HTTP method. Create objects mapping methods to colors and endpoint paths. Display the selected method's endpoint and a sample JSON response.",
    "starterCode": "function App() {\n  \n  return (\n    <div>\n      \n    </div>\n  );\n}",
    "solutionCode": "function App() {\n  const [method, setMethod] = useState(\"GET\");\n  const [response, setResponse] = '{ \\n  \"users\": [\\n    { \"id\": 1, \"name\": \"Alice\" },\\n    { \"id\": 2, \"name\": \"Bob\" }\\n  ]\\n}';\n  const methods = [\"GET\", \"POST\", \"PUT\", \"DELETE\"];\n  const colors = { GET: \"#34d399\", POST: \"#60a5fa\", PUT: \"#fbbf24\", DELETE: \"#f87171\" };\n  const endpoints = { GET: \"/api/users\", POST: \"/api/users\", PUT: \"/api/users/:id\", DELETE: \"/api/users/:id\" };\n  return (\n    <div style={{ fontFamily: \"system-ui\", padding: 20 }}>\n      <h1 style={{ color: \"#e2e8f0\", marginBottom: 4 }}>Route Handlers</h1>\n      <p style={{ color: \"#94a3b8\", fontSize: 13, marginBottom: 16 }}>app/api/users/route.js</p>\n      <div style={{ display: \"flex\", gap: 6, marginBottom: 12 }}>\n        {methods.map((m) => (\n          <button key={m} onClick={() => setMethod(m)} style={{ padding: \"6px 14px\", borderRadius: 6, border: \"none\", cursor: \"pointer\", fontSize: 12, fontWeight: 700, background: method === m ? colors[m] + \"22\" : \"rgba(255,255,255,0.04)\", color: method === m ? colors[m] : \"#64748b\", borderLeft: method === m ? \"3px solid \" + colors[m] : \"3px solid transparent\" }}>{m}</button>\n        ))}\n      </div>\n      <div style={{ padding: 8, borderRadius: 6, background: \"rgba(96,165,250,0.08)\", marginBottom: 12 }}>\n        <code style={{ color: \"#60a5fa\", fontSize: 13 }}>{endpoints[method]}</code>\n      </div>\n      <pre style={{ padding: 14, borderRadius: 8, background: \"#0f172a\", color: \"#a78bfa\", fontSize: 12, margin: 0, overflow: \"auto\", border: \"1px solid #1e293b\" }}>{response}</pre>\n    </div>\n  );\n}",
    "exampleCode": "// 🌐 API Routes & Middleware\n\n// 1️⃣ Basic Route Handler — REST API\n// app/api/users/route.js\nimport { NextResponse } from 'next/server';\nimport { db } from '@/lib/db';\n\n// GET /api/users — List all users\nexport async function GET(request) {\n  const users = await db.user.findMany({\n    select: { id: true, name: true, email: true }\n  });\n  return NextResponse.json({ users });\n}\n\n// POST /api/users — Create a user\nexport async function POST(request) {\n  const body = await request.json();\n  const user = await db.user.create({\n    data: { name: body.name, email: body.email }\n  });\n  return NextResponse.json(user, { status: 201 });\n}\n\n// 2️⃣ Dynamic Route Handler\n// app/api/users/[id]/route.js\nexport async function GET(request, { params }) {\n  const user = await db.user.findUnique({\n    where: { id: params.id }\n  });\n  if (!user) {\n    return NextResponse.json(\n      { error: 'User not found' },\n      { status: 404 }\n    );\n  }\n  return NextResponse.json(user);\n}\n\nexport async function DELETE(request, { params }) {\n  await db.user.delete({ where: { id: params.id } });\n  return NextResponse.json({ success: true });\n}\n\n// 3️⃣ Streaming Response (for AI/Large Data)\n// app/api/chat/route.js\nexport async function POST(request) {\n  const { message } = await request.json();\n\n  const stream = new ReadableStream({\n    async start(controller) {\n      const response = await fetch('https://api.openai.com/v1/chat/completions', {\n        method: 'POST',\n        headers: { 'Authorization': `Bearer ${process.env.OPENAI_KEY}` },\n        body: JSON.stringify({ model: 'gpt-4', messages: [{ role: 'user', content: message }], stream: true })\n      });\n      const reader = response.body.getReader();\n      while (true) {\n        const { done, value } = await reader.read();\n        if (done) break;\n        controller.enqueue(value);\n      }\n      controller.close();\n    }\n  });\n\n  return new Response(stream, {\n    headers: { 'Content-Type': 'text/plain; charset=utf-8' }\n  });\n}\n\n// 4️⃣ Middleware — Auth Guard\n// middleware.js (project root, NOT in app/)\nimport { NextResponse } from 'next/server';\n\nexport const config = {\n  matcher: [\n    '/dashboard/:path*',    // Protect all dashboard routes\n    '/api/(?!public).*:path*', // Protect API routes except /api/public/*\n  ]\n};\n\nexport function middleware(request) {\n  const session = request.cookies.get('session')?.value;\n  const { pathname } = request.nextUrl;\n\n  // Unauthenticated user trying to access protected route\n  if (!session) {\n    const loginUrl = new URL('/login', request.url);\n    loginUrl.searchParams.set('callbackUrl', pathname);\n    return NextResponse.redirect(loginUrl);\n  }\n\n  // Add security headers\n  const response = NextResponse.next();\n  response.headers.set('X-Frame-Options', 'DENY');\n  response.headers.set('X-Content-Type-Options', 'nosniff');\n  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');\n\n  return response;\n}\n\n// 5️⃣ Middleware — Geo-Routing\nexport function middleware(request) {\n  const country = request.geo?.country; // e.g., 'IN', 'US', 'GB'\n  const url = request.nextUrl.clone();\n\n  if (country === 'IN' && url.pathname === '/pricing') {\n    url.pathname = '/pricing/in';\n    return NextResponse.rewrite(url);\n  }\n}",
    "learnings": [
      { "title": "Route Handlers (REST APIs)", "desc": "Writing custom GET, POST, PUT, DELETE endpoints with NextResponse primitives." },
      { "title": "Advanced Next.js Middleware", "desc": "Interacting with incoming requests for geo-routing, header mutations, and sub-domain redirects." },
      { "title": "Streaming & Server-Sent Events", "desc": "Leveraging NDJSON and readable streams to pipe large AI payloads or live data feeds." }
    ],
    "tests": [
      { "id": "t1", "description": "Should show GET, POST, PUT, DELETE methods", "check": "code => code.includes(\"GET\") && code.includes(\"POST\") && code.includes(\"PUT\") && code.includes(\"DELETE\")" },
      { "id": "t2", "description": "Should use useState for selected method", "check": "code => /useState\\s*\\(\\s*[\"']GET[\"']\\s*\\)/.test(code)" },
      { "id": "t3", "description": "Should display API endpoint path", "check": "code => code.includes(\"/api/users\")" },
      { "id": "t4", "description": "Should show response data", "check": "code => code.includes(\"response\")" }
    ]
  },
  {
    "id": "07",
    "slug": "database-integration",
    "title": "Database Integration & Full-Stack Core",
    "icon": "Database",
    "overview": "Connect server runtimes to databases with type-safe ORMs, connection pooling, and transaction management.",
    "explanation": "## Why Database Integration is Different in Next.js\n\nIn a traditional React app (CSR), your frontend can NEVER directly talk to a database — it always goes through an API. But in Next.js, Server Components and Server Actions run ON THE SERVER, meaning they can directly query databases without any API layer. This eliminates an entire tier of boilerplate.\n\nHowever, this power comes with responsibility: you must understand WHERE and HOW your database code runs, especially in serverless environments.\n\n## Choosing an ORM\n\n**Prisma** — The most popular ORM in the Next.js ecosystem:\n- Declarative schema file (`schema.prisma`) that defines your data model\n- Auto-generated, fully type-safe client (`prisma.user.findMany()`)\n- Built-in migrations system (`prisma migrate dev`)\n- Excellent TypeScript support with zero manual typing\n- Prisma Accelerate for serverless connection pooling\n\n**Drizzle ORM** — The lightweight, SQL-first alternative:\n- Schema defined in TypeScript (not a custom DSL)\n- Generates SQL that you can see and optimize\n- Extremely fast — minimal overhead over raw SQL\n- Great for developers who want SQL control with type safety\n- Works natively with Neon, PlanetScale, Turso\n\n## The Schema Layer\n\nYour schema is the single source of truth for your data model. It defines tables, columns, types, relations, and constraints. Both Prisma and Drizzle generate TypeScript types from this schema, so your entire data layer is end-to-end type-safe.\n\n## Connection Pooling — The Serverless Problem\n\nThis is the #1 gotcha in Next.js database integration. In serverless environments (Vercel, AWS Lambda), each function invocation can create a new database connection. If 100 users visit simultaneously, you might open 100 connections — most databases have a limit of 20-100 connections. You'll get \"Connection pool exhausted\" errors.\n\n**Solutions:**\n- **Prisma Accelerate** — A proxy that maintains a connection pool and forwards queries over HTTP\n- **Neon Serverless Driver** — Uses WebSocket-based connections that are much cheaper to open/close\n- **PgBouncer** — A standalone connection pooler you can host (works with any Postgres setup)\n- **@prisma/adapter-neon** — Prisma's native adapter for Neon's serverless driver\n\n## Transactions\n\nFor operations that must succeed or fail together (e.g., transfer money from A to B), use database transactions:\n\n```js\nawait prisma.$transaction([\n  prisma.account.update({ where: { id: fromId }, data: { balance: { decrement: 100 } } }),\n  prisma.account.update({ where: { id: toId }, data: { balance: { increment: 100 } } })\n]);\n```\n\nIf either update fails, both are rolled back. No partial state.\n\n## Security Rules\n\n- **NEVER** put database credentials in client components — they'll be shipped to the browser\n- Store credentials in `.env` files (never commit to git)\n- Use `prisma.$extends()` for row-level security logic\n- Always validate/sanitize user input before database operations\n- Use `select` to limit which columns are returned (never return password hashes)",
    "keyRules": [
      "Database queries should only run in Server Components or Server Actions",
      "Use Prisma or Drizzle for type-safe database access",
      "Connection pooling prevents connection exhaustion in serverless",
      "Use transactions for atomic multi-step operations",
      "Never expose database credentials to client-side code",
      "Always use select() to limit returned columns",
      "Define your schema as the single source of truth for data models"
    ],
    "task": "Create a component that displays a Prisma schema definition showing a User model with id, name, email, and posts fields, and a Post model with id, title, content, author, and authorId fields, with a relation between them.",
    "hint": "Define the schema as a template string. Use a pre element with syntax-highlighting styles to display it. Include @id, @default, @unique, and @relation decorators.",
    "starterCode": "function App() {\n  \n  return (\n    <div>\n      \n    </div>\n  );\n}",
    "solutionCode": "function App() {\n  const schema = `\nmodel User {\n  id        Int      @id @default(autoincrement())\n  name      String\n  email     String   @unique\n  posts     Post[]\n  createdAt DateTime @default(now())\n}\n\nmodel Post {\n  id       Int    @id @default(autoincrement())\n  title    String\n  content  String\n  author   User   @relation(fields: [authorId], references: [id])\n  authorId Int\n}`;\n  return (\n    <div style={{ fontFamily: \"system-ui\", padding: 20 }}>\n      <h1 style={{ color: \"#e2e8f0\", marginBottom: 4 }}>Prisma Schema</h1>\n      <p style={{ color: \"#94a3b8\", fontSize: 13, marginBottom: 16 }}>schema.prisma — Type-safe database models</p>\n      <pre style={{ padding: 16, borderRadius: 8, background: \"#0f172a\", color: \"#a78bfa\", fontSize: 12, margin: 0, overflow: \"auto\", border: \"1px solid #1e293b\", lineHeight: 1.6 }}>{schema}</pre>\n    </div>\n  );\n}",
    "exampleCode": "// 🗄️ Database Integration with Prisma\n\n// 📁 prisma/schema.prisma\ngenerator client {\n  provider = \"prisma-client-js\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel User {\n  id        Int      @id @default(autoincrement())\n  name      String\n  email     String   @unique\n  password  String   // Never select this in queries!\n  role      Role     @default(USER)\n  posts     Post[]\n  profile   Profile?\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@map(\"users\") // Maps to \"users\" table in DB\n}\n\nmodel Post {\n  id        Int      @id @default(autoincrement())\n  title     String\n  content   String?\n  published Boolean  @default(false)\n  author    User     @relation(fields: [authorId], references: [id], onDelete: Cascade)\n  authorId  Int\n  tags      PostTag[]\n  createdAt DateTime @default(now())\n\n  @@index([authorId]) // Performance index\n  @@map(\"posts\")\n}\n\nenum Role {\n  USER\n  ADMIN\n}\n\n// 📁 lib/db.ts — Singleton Prisma Client\nimport { PrismaClient } from '@prisma/client';\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma || new PrismaClient();\n\nif (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;\n// Prevents multiple instances during hot-reload in development\n\nexport { prisma };\n\n// 📁 app/users/page.jsx — Query in Server Component\nimport { prisma } from '@/lib/db';\n\nexport default async function UsersPage() {\n  // ✅ Runs on server — no credentials exposed to client\n  const users = await prisma.user.findMany({\n    select: {           // Only select needed columns\n      id: true,\n      name: true,\n      email: true,\n      _count: { select: { posts: true } } // Count without loading\n    },\n    where: { role: 'ADMIN' },\n    orderBy: { createdAt: 'desc' },\n    take: 20,\n  });\n\n  return (\n    <ul>\n      {users.map(u => (\n        <li key={u.id}>\n          {u.name} — {u._count.posts} posts\n        </li>\n      ))}\n    </ul>\n  );\n}\n\n// 📁 app/actions/create-post.ts — Query in Server Action\n'use server';\nimport { prisma } from '@/lib/db';\nimport { revalidatePath } from 'next/cache';\n\nexport async function createPost(formData: FormData) {\n  const title = formData.get('title') as string;\n  const content = formData.get('content') as string;\n  const authorId = formData.get('authorId') as string;\n\n  // Transaction: create post + update user post count\n  await prisma.$transaction(async (tx) => {\n    await tx.post.create({\n      data: { title, content, authorId: Number(authorId) }\n    });\n    // Additional operations in same transaction...\n  });\n\n  revalidatePath('/blog');\n}\n\n// 📁 .env — Connection with pooling (Neon/Prisma Accelerate)\n// Direct connection (development):\nDATABASE_URL=\"postgresql://user:pass@localhost:5432/mydb\"\n\n// Pooled connection (production/Vercel):\nDATABASE_URL=\"postgresql://user:pass@ep-cool-name-12345.us-east-2.aws.neon.tech/mydb?sslmode=require&pgbouncer=true\"",
    "learnings": [
      { "title": "ORMs: Prisma & Drizzle", "desc": "Defining type-safe schemas, managing migrations, and executing clean server queries." },
      { "title": "Connection Pooling in Serverless", "desc": "Preventing serverless connection exhaustion via Prisma Accelerate or Neon serverless driver." },
      { "title": "Transactions & Security Gates", "desc": "Handling complex atomic transactions and setting up row-level security." }
    ],
    "tests": [
      { "id": "t1", "description": "Should show a User model", "check": "code => code.includes(\"model User\")" },
      { "id": "t2", "description": "Should show a Post model", "check": "code => code.includes(\"model Post\")" },
      { "id": "t3", "description": "Should have relation between User and Post", "check": "code => code.includes(\"@relation\")" },
      { "id": "t4", "description": "Should use @id and @default", "check": "code => code.includes(\"@id\") && code.includes(\"@default\")" }
    ]
  },
  {
    "id": "08",
    "slug": "auth-authorization",
    "title": "Authentication & Authorization Security",
    "icon": "Shield",
    "overview": "Protect private layouts, configure multi-tenant rollouts, and authenticate users via industry-standard protocols.",
    "explanation": "## Authentication vs Authorization\n\nThese are two fundamentally different concepts that are often confused:\n\n- **Authentication (AuthN)** — \"Who are you?\" — Verifying identity via passwords, OAuth, magic links, biometrics\n- **Authorization (AuthZ)** — \"What can you do?\" — Determining permissions, roles, and access levels after authentication\n\nA user can be authenticated (logged in) but not authorized (doesn't have permission to access a specific resource). Your app needs BOTH.\n\n## Auth.js (NextAuth.js)\n\nThe most flexible, standards-based auth solution for Next.js:\n\n**How it works:**\n1. You configure \"providers\" (Google, GitHub, email/password, etc.)\n2. Auth.js handles the OAuth dance, session creation, and token management\n3. A `SessionProvider` wraps your app (client-side) or you call `auth()` (server-side)\n4. Sessions can be stored in a database (more secure) or in JWTs (stateless, faster)\n\n**JWT vs Database sessions:**\n- JWT: Session data encoded in a token, no DB lookup needed, but can't revoke immediately\n- Database: Session ID in cookie, data looked up from DB on each request, can revoke instantly\n\n**Server-side session check (recommended):**\n```js\nimport { auth } from '@/auth';\nconst session = await auth();\nif (!session) redirect('/login');\n```\n\n**Client-side session check:**\n```js\n'use client';\nimport { useSession } from 'next-auth/react';\nconst { data: session, status } = useSession();\nif (status === 'unauthenticated') redirect('/login');\n```\n\n## B2C Identity Providers (Clerk / Kinde)\n\nIf you don't want to build auth from scratch, these provide pre-built solutions:\n\n**Clerk:**\n- Pre-built UI components (SignIn, SignUp, UserButton, UserProfile)\n- Handles password reset, email verification, 2FA, SSO\n- Middleware integration: `clerkMiddleware()` protects routes automatically\n- Organization support for multi-tenant apps\n- Webhooks for syncing user data to your database\n\n**Kinde:**\n- Similar to Clerk but with a simpler API surface\n- Built-in feature flags and audience management\n- Generous free tier\n\n## Role-Based Access Control (RBAC)\n\nAfter a user is authenticated, you need to control what they can access:\n\n**Implementation layers:**\n1. **Layout level** — Check role in a layout component, redirect if unauthorized\n2. **Page level** — Check role in the page component, show 403 if unauthorized\n3. **Component level** — Conditionally render UI elements based on role (hide admin buttons from regular users)\n4. **API level** — Check role in Route Handlers or Middleware before processing\n5. **Database level** — Row-level security (RLS) in PostgreSQL, or query filtering by ownership\n\n**Common role hierarchy:**\n- `SUPER_ADMIN` — Full system access, manage other admins\n- `ADMIN` — Manage users, content, settings\n- `EDITOR` — Create and edit content\n- `VIEWER` — Read-only access\n- `UNAUTHENTICATED` — Public access only\n\n## Security Best Practices\n\n- **HTTPS only** — Never transmit credentials over HTTP\n- **HttpOnly cookies** — Prevent XSS from stealing session tokens\n- **CSRF protection** — Server Actions have built-in CSRF tokens\n- **Rate limiting** — Use Middleware to limit login attempts\n- **Password hashing** — Use bcrypt/argon2, never store plain text\n- **Input sanitization** — Validate everything server-side with Zod\n- **Least privilege** — Database users should only have minimum required permissions",
    "keyRules": [
      "Use Auth.js (NextAuth) for flexible, standards-based authentication",
      "Clerk or Kinde provide drop-in auth with pre-built UI components",
      "RBAC uses roles (admin, editor, viewer) to control access levels",
      "Protect Server Components by checking session at the component level",
      "Protect API routes by verifying tokens in middleware or route handlers",
      "Use HttpOnly cookies for session storage (not localStorage)",
      "Implement RBAC at layout, page, component, API, and database levels"
    ],
    "task": "Create a component that demonstrates Role-Based Access Control. Show buttons for admin, editor, and viewer roles. When a role is selected, display the permissions associated with that role as styled tags.",
    "hint": "Define a permissions object mapping roles to arrays of permission strings. Use useState for the selected role. Map over the permissions array to render styled permission tags.",
    "starterCode": "function App() {\n  \n  return (\n    <div>\n      \n    </div>\n  );\n}",
    "solutionCode": "function App() {\n  const [role, setRole] = useState(\"admin\");\n  const permissions = {\n    admin: [\"Read\", \"Write\", \"Delete\", \"Manage Users\"],\n    editor: [\"Read\", \"Write\"],\n    viewer: [\"Read\"],\n  };\n  const colors = { admin: \"#a78bfa\", editor: \"#60a5fa\", viewer: \"#94a3b8\" };\n  return (\n    <div style={{ fontFamily: \"system-ui\", padding: 20 }}>\n      <h1 style={{ color: \"#e2e8f0\", marginBottom: 4 }}>Role-Based Access Control</h1>\n      <p style={{ color: \"#94a3b8\", fontSize: 13, marginBottom: 16 }}>Switch roles to see permissions</p>\n      <div style={{ display: \"flex\", gap: 6, marginBottom: 16 }}>\n        {Object.keys(permissions).map((r) => (\n          <button key={r} onClick={() => setRole(r)} style={{ padding: \"6px 14px\", borderRadius: 6, border: \"none\", cursor: \"pointer\", fontSize: 12, fontWeight: 600, textTransform: \"capitalize\", background: role === r ? colors[r] + \"22\" : \"rgba(255,255,255,0.04)\", color: role === r ? colors[r] : \"#64748b\", borderLeft: role === r ? \"3px solid \" + colors[r] : \"3px solid transparent\" }}>{r}</button>\n        ))}\n      </div>\n      <div style={{ display: \"flex\", gap: 8, flexWrap: \"wrap\" }}>\n        {permissions[role].map((p) => (\n          <span key={p} style={{ padding: \"6px 12px\", borderRadius: 20, fontSize: 12, fontWeight: 500, background: colors[role] + \"15\", color: colors[role], border: \"1px solid \" + colors[role] + \"30\" }}>{p}</span>\n        ))}\n      </div>\n    </div>\n  );\n}",
    "exampleCode": "// 🔐 Authentication & Authorization in Next.js\n\n// 1️⃣ Auth.js Configuration\n// auth.ts (project root)\nimport NextAuth from 'next-auth';\nimport GitHub from 'next-auth/providers/github';\nimport Credentials from 'next-auth/providers/credentials';\nimport { db } from '@/lib/db';\nimport bcrypt from 'bcryptjs';\n\nexport const { handlers, auth, signIn, signOut } = NextAuth({\n  providers: [\n    GitHub({ clientId: process.env.GITHUB_ID, clientSecret: process.env.GITHUB_SECRET }),\n    Credentials({\n      async authorize(credentials) {\n        const user = await db.user.findUnique({ where: { email: credentials.email } });\n        if (!user || !bcrypt.compareSync(credentials.password, user.password)) {\n          return null; // Auth failed\n        }\n        return { id: user.id, name: user.name, email: user.email, role: user.role };\n      }\n    })\n  ],\n  callbacks: {\n    async jwt({ token, user }) {\n      if (user) token.role = user.role; // Add role to JWT\n      return token;\n    },\n    async session({ session, token }) {\n      session.user.role = token.role; // Expose role in session\n      return session;\n    }\n  },\n  pages: { signIn: '/login' },\n  session: { strategy: 'jwt' } // or 'database'\n});\n\n// 2️⃣ Protect Server Components\n// app/dashboard/page.jsx\nimport { auth } from '@/auth';\nimport { redirect } from 'next/navigation';\n\nexport default async function DashboardPage() {\n  const session = await auth();\n  if (!session) redirect('/login');\n  if (session.user.role !== 'ADMIN') redirect('/unauthorized');\n\n  return <h1>Welcome, {session.user.name}</h1>;\n}\n\n// 3️⃣ Protect with Middleware\n// middleware.ts\nimport { auth } from '@/auth';\nimport { NextResponse } from 'next/server';\n\nexport default auth((req) => {\n  const isLoggedIn = !!req.auth;\n  const isOnDashboard = req.nextUrl.pathname.startsWith('/dashboard');\n\n  if (isOnDashboard && !isLoggedIn) {\n    return NextResponse.redirect(new URL('/login', req.url));\n  }\n\n  // RBAC in middleware\n  if (req.nextUrl.pathname.startsWith('/admin') && req.auth?.user?.role !== 'ADMIN') {\n    return NextResponse.redirect(new URL('/unauthorized', req.url));\n  }\n\n  return NextResponse.next();\n});\n\nexport const config = { matcher: ['/dashboard/:path*', '/admin/:path*'] };\n\n// 4️⃣ RBAC Utility\n// lib/permissions.ts\nconst ROLE_PERMISSIONS = {\n  SUPER_ADMIN: ['read', 'write', 'delete', 'manage_users', 'manage_settings'],\n  ADMIN: ['read', 'write', 'delete', 'manage_users'],\n  EDITOR: ['read', 'write'],\n  VIEWER: ['read'],\n};\n\nexport function hasPermission(userRole: string, permission: string): boolean {\n  return ROLE_PERMISSIONS[userRole]?.includes(permission) ?? false;\n}\n\n// Usage in Server Component:\n// if (!hasPermission(session.user.role, 'delete')) {\n//   return <p>Access denied</p>;\n// }\n\n// 5️⃣ Clerk Alternative (Drop-in Auth)\n// middleware.ts\nimport { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';\n\nconst isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/settings(.*)']);\n\nexport default clerkMiddleware(async (auth, req) => {\n  if (isProtectedRoute(req)) await auth.protect();\n});\n\nexport const config = { matcher: ['/((?!.*\\\\..*|_next).*)', '/', '/(api|trpc)(.*)'] };",
    "learnings": [
      { "title": "Auth.js (NextAuth) Integration", "desc": "Implementing session providers, JWT vs database strategies, and custom login portals." },
      { "title": "B2C Identity Providers (Clerk/Kinde)", "desc": "Setting up drop-in multi-tenant user authentication, webhooks, and profile structures." },
      { "title": "Role-Based Access Control (RBAC)", "desc": "Securing layouts, API endpoints, and individual actions based on permissions." }
    ],
    "tests": [
      { "id": "t1", "description": "Should have admin, editor, viewer roles", "check": "code => code.includes(\"admin\") && code.includes(\"editor\") && code.includes(\"viewer\")" },
      { "id": "t2", "description": "Should use useState for role", "check": "code => /useState\\s*\\(\\s*[\"']/.test(code)" },
      { "id": "t3", "description": "Should display permissions for selected role", "check": "code => /permissions\\[role\\]/.test(code) || /permissions\\.get/.test(code)" },
      { "id": "t4", "description": "Should have Read permission", "check": "code => code.includes(\"Read\")" }
    ]
  },
  {
    "id": "09",
    "slug": "state-management-hydration",
    "title": "State Management & Server Hydration",
    "icon": "Code",
    "overview": "Coordinate state across server-to-client handoffs without UI flickering or hydration mismatch bugs.",
    "explanation": "## The Server-Client State Problem\n\nIn traditional React, all state lives in the browser. Simple. But Next.js has a server-to-client boundary that introduces unique challenges:\n\n1. **Server Components** can fetch data but can't use `useState` or `useEffect`\n2. **Client Components** can use state but can't directly access the database\n3. Data must flow from server to client as **serializable props**\n4. The initial client render must match the server render exactly (**hydration matching**)\n\nIf you get this wrong, you'll see React hydration errors, flickering UI, or stale data.\n\n## How Data Flows: Server → Client\n\nThe correct pattern is a one-way flow:\n\n1. **Server Component** fetches data from DB/API\n2. Server Component passes data as props to a **Client Component**\n3. Client Component uses that data as **initial state**\n4. Client Component manages any subsequent local state changes\n\n```jsx\n// Server Component\nasync function Page() {\n  const posts = await db.post.findMany(); // Server-only\n  return <PostList initialPosts={posts} />; // Pass as prop\n}\n\n// Client Component\n'use client';\nfunction PostList({ initialPosts }) {\n  const [posts, setPosts] = useState(initialPosts); // Initialize from prop\n  // Now client can modify state locally\n}\n```\n\n## Hydration Mismatch — The Most Common Bug\n\nReact expects the server-rendered HTML and the first client render to be **identical**. If they differ, React throws a hydration warning and forces a re-render, causing visual flickering.\n\n**Common causes:**\n- Using `Date.now()` or `Math.random()` in initial render (different values on server vs client)\n- Using `window` or `localStorage` before `useEffect`\n- Conditionally rendering based on browser-only state\n- Relying on state that changes between server and client render\n\n**Fixes:**\n- Use `useEffect` for any browser-only logic (runs only on client)\n- Use `suppressHydrationWarning` on specific elements (last resort)\n- Initialize state from server-fetched data, not browser APIs\n\n## URL as Source of Truth\n\nFor filterable, paginated UIs (product listings, search results, dashboards), the URL is the best state manager:\n\n- `/products?category=shoes&sort=price&page=2`\n- State is **shareable** (send the URL to someone)\n- State is **bookmarkable** (browser back/forward works)\n- State is **SSR-compatible** (server reads searchParams and renders correctly)\n- No hydration mismatch (URL is identical on server and client)\n\nIn Next.js App Router, use `searchParams` prop in page components:\n```jsx\nexport default async function ProductsPage({ searchParams }) {\n  const { category, sort, page } = searchParams;\n  const products = await db.product.findMany({ where: { category } });\n  return <ProductGrid products={products} />;\n}\n```\n\n## Global State: Zustand & Redux\n\nFor truly global state (theme, cart, user preferences), you can use Zustand or Redux. But there's a critical rule in Next.js:\n\n**NEVER create a store at module scope on the server.** If you do, all users on the same server instance will share the same store — User A's cart appears in User B's session!\n\n**Correct pattern — Factory function:**\n```js\n// lib/store.ts\nimport { create } from 'zustand';\n\nexport function createCartStore() {\n  return create((set) => ({\n    items: [],\n    addItem: (item) => set((state) => ({ items: [...state.items, item] })),\n  }));\n}\n\n// In Client Component:\n'use client';\nimport { createContext, useRef } from 'react';\nimport { createCartStore } from '@/lib/store';\n\nexport const CartStoreContext = createContext(null);\n\nexport function CartProvider({ children }) {\n  const storeRef = useRef(null);\n  if (!storeRef.current) storeRef.current = createCartStore(); // One per component tree\n  return (\n    <CartStoreContext.Provider value={storeRef.current}>\n      {children}\n    </CartStoreContext.Provider>\n  );\n}\n```",
    "keyRules": [
      "Only pass serializable data from Server to Client Components",
      "Create global store instances per-request, never at module scope on server",
      "URL searchParams can serve as the single source of truth for filters",
      "Avoid hydration mismatches by keeping server and initial client state identical",
      "Use Zustand or Redux with proper factory patterns in full-stack apps",
      "Use useEffect for any browser-only APIs (window, localStorage, etc.)",
      "Never use Date.now(), Math.random(), or window in initial render"
    ],
    "task": "Create a searchable list component. Use useState for the search input, define an array of items, filter them based on the search term using .filter() and .includes(), and display the filtered results. Show a 'No results found' message when the filter returns empty.",
    "hint": "Create a controlled input with value and onChange. Use items.filter() with toLowerCase().includes() to match the search term. Conditionally render a message when filtered.length === 0.",
    "starterCode": "function App() {\n  \n  return (\n    <div>\n      \n    </div>\n  );\n}",
    "solutionCode": "function App() {\n  const [search, setSearch] = useState(\"\");\n  const items = [\"Next.js Docs\", \"React Tutorial\", \"TypeScript Guide\", \"Tailwind CSS\", \"Prisma ORM\"];\n  const filtered = items.filter((i) => i.toLowerCase().includes(search.toLowerCase()));\n  return (\n    <div style={{ fontFamily: \"system-ui\", padding: 20, maxWidth: 360 }}>\n      <h1 style={{ color: \"#e2e8f0\", marginBottom: 4 }}>URL as State</h1>\n      <p style={{ color: \"#94a3b8\", fontSize: 13, marginBottom: 16 }}>searchParams as single source of truth</p>\n      <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder=\"Filter items...\" style={{ width: \"100%\", padding: \"8px 12px\", borderRadius: 6, border: \"1px solid #334155\", background: \"#0f172a\", color: \"#e2e8f0\", fontSize: 13, boxSizing: \"border-box\", marginBottom: 12 }} />\n      <div style={{ display: \"flex\", flexDirection: \"column\", gap: 6 }}>\n        {filtered.map((item) => (\n          <div key={item} style={{ padding: \"8px 12px\", borderRadius: 6, background: \"rgba(96,165,250,0.08)\", border: \"1px solid rgba(96,165,250,0.15)\", color: \"#cbd5e1\", fontSize: 13 }}>{item}</div>\n        ))}\n        {filtered.length === 0 && <p style={{ color: \"#64748b\", fontSize: 13, textAlign: \"center\" }}>No results found</p>}\n      </div>\n    </div>\n  );\n}",
    "exampleCode": "// 🧠 State Management & Hydration in Next.js\n\n// 1️⃣ Correct Server → Client Data Flow\n// app/posts/page.jsx (Server Component)\nimport { db } from '@/lib/db';\nimport { PostList } from './PostList'; // Client Component\n\nexport default async function PostsPage() {\n  // Fetch on server — secure, no credentials exposed\n  const posts = await db.post.findMany({\n    orderBy: { createdAt: 'desc' },\n    take: 20,\n  });\n\n  // Pass as serializable prop to Client Component\n  return <PostList initialPosts={posts} />;\n}\n\n// app/posts/PostList.jsx (Client Component)\n'use client';\nimport { useState } from 'react';\n\nexport function PostList({ initialPosts }) {\n  // Initialize client state from server prop\n  const [posts, setPosts] = useState(initialPosts);\n  const [filter, setFilter] = useState('all');\n\n  const filtered = filter === 'all' ? posts : posts.filter(p => p.category === filter);\n\n  return (\n    <div>\n      <select value={filter} onChange={e => setFilter(e.target.value)}>\n        <option value=\"all\">All</option>\n        <option value=\"tech\">Tech</option>\n        <option value=\"design\">Design</option>\n      </select>\n      {filtered.map(post => <PostCard key={post.id} post={post} />)}\n    </div>\n  );\n}\n\n// 2️⃣ URL as State (searchParams)\n// app/products/page.jsx\nexport default async function ProductsPage({ searchParams }) {\n  const { q, category, sort, page = '1' } = searchParams;\n\n  const products = await db.product.findMany({\n    where: {\n      category: category || undefined,\n      OR: q ? [\n        { name: { contains: q, mode: 'insensitive' } },\n        { description: { contains: q, mode: 'insensitive' } },\n      ] : undefined,\n    },\n    orderBy: { [sort || 'createdAt']: 'desc' },\n    take: 12,\n    skip: (Number(page) - 1) * 12,\n  });\n\n  return (\n    <div>\n      {/* URL updates = state updates = shareable & bookmarkable */}\n      <SearchForm currentQuery={q} />\n      <ProductGrid products={products} />\n    </div>\n  );\n}\n\n// 3️⃣ Zustand with Factory Pattern (prevents state leakage)\n// lib/cart-store.ts\nimport { create } from 'zustand';\n\nexport function createCartStore() {\n  return create<CartState>((set) => ({\n    items: [],\n    addItem: (product) => set((state) => ({\n      items: [...state.items, { ...product, qty: 1 }]\n    })),\n    removeItem: (id) => set((state) => ({\n      items: state.items.filter(i => i.id !== id)\n    })),\n    getTotal: () => { /* ... */ },\n  }));\n}\n\n// app/providers.jsx\n'use client';\nimport { createContext, useRef } from 'react';\nimport { createCartStore } from '@/lib/cart-store';\n\nexport const CartContext = createContext(null);\n\nexport function Providers({ children }) {\n  // Create ONE store instance per provider mount (not per request on server)\n  const storeRef = useRef();\n  if (!storeRef.current) {\n    storeRef.current = createCartStore();\n  }\n\n  return (\n    <CartContext.Provider value={storeRef.current}>\n      {children}\n    </CartContext.Provider>\n  );\n}\n\n// 4️⃣ Avoiding Hydration Mismatch\n'use client';\nimport { useState, useEffect } from 'react';\n\nfunction ThemeToggle() {\n  const [theme, setTheme] = useState('dark'); // Same on server & client\n\n  // Read from localStorage ONLY in useEffect (client-only)\n  useEffect(() => {\n    const saved = localStorage.getItem('theme');\n    if (saved) setTheme(saved);\n  }, []);\n\n  // ❌ WRONG — causes hydration mismatch:\n  // const [theme, setTheme] = useState(localStorage.getItem('theme'));\n}\n\n// 5️⃣ Session State from Auth\n// app/layout.jsx\nimport { SessionProvider } from 'next-auth/react';\n\nexport default function RootLayout({ children, session }) {\n  return (\n    <html>\n      <body>\n        <SessionProvider session={session}>\n          {children}\n        </SessionProvider>\n      </body>\n    </html>\n  );\n}",
    "learnings": [
      { "title": "Server-to-Client State Handoff", "desc": "Passing heavy configuration data or pre-fetched arrays safely via serializable props." },
      { "title": "Zustand & Redux in Full-Stack", "desc": "Creating unique state stores per request to avoid multi-user state leakage." },
      { "title": "URL Context State", "desc": "Utilizing searchParams as the single source of truth for dashboard filters." }
    ],
    "tests": [
      { "id": "t1", "description": "Should use useState for search", "check": "code => /useState\\s*\\(\\s*[\"'][\"']\\s*\\)/.test(code)" },
      { "id": "t2", "description": "Should filter items based on search", "check": "code => /\\.filter\\s*\\(/.test(code) && /\\.includes\\s*\\(/.test(code)" },
      { "id": "t3", "description": "Should have a controlled input", "check": "code => code.includes(\"value={search}\") && code.includes(\"onChange\")" },
      { "id": "t4", "description": "Should handle empty results", "check": "code => code.includes(\"No results\") || code.includes(\"0\")" }
    ]
  },
  {
    "id": "10",
    "slug": "performance-optimization",
    "title": "Performance Optimization & Core Web Vitals",
    "icon": "Gauge",
    "overview": "Optimize user-perceived performance with Google's Core Web Vitals metrics and Next.js built-in optimization tools.",
    "explanation": "## Why Performance Matters\n\nGoogle uses Core Web Vitals as a ranking factor. Slow sites lose users — 53% of mobile users abandon sites that take longer than 3 seconds to load. But performance isn't just about speed scores; it's about **perceived performance** — how fast your site FEELS to a real human being.\n\n## The Three Core Web Vitals\n\n### LCP (Largest Contentful Paint) — Loading\n**What it measures:** How long it takes for the largest content element (image, heading, block of text) to become visible.\n**Target:** < 2.5 seconds (Good), 2.5-4s (Needs Improvement), > 4s (Poor)\n**What affects it:** Server response time, render-blocking resources, slow image loading, no CDN, excessive client-side JavaScript.\n**How to fix in Next.js:**\n- Use `next/image` with `priority` on above-the-fold images\n- Use Server Components to reduce client JS\n- Use SSG/ISR for faster TTFB\n- Optimize fonts with `next/font`\n- Preload critical resources\n\n### INP (Interaction to Next Paint) — Interactivity\n**What it measures:** How long the browser takes to respond to a user interaction (click, tap, keypress). Replaced FID as the official metric in March 2024.\n**Target:** < 200ms (Good), 200-500ms (Needs Improvement), > 500ms (Poor)\n**What affects it:** Heavy JavaScript execution on the main thread, long event handlers, unoptimized third-party scripts, large React re-renders.\n**How to fix in Next.js:**\n- Use `next/dynamic` with `ssr: false` for heavy client components\n- Split code with dynamic imports\n- Use `useTransition` for non-urgent state updates\n- Debounce expensive operations\n- Remove or defer third-party scripts\n\n### CLS (Cumulative Layout Shift) — Visual Stability\n**What it measures:** How much visible content shifts unexpectedly during loading. Ever been reading an article and the text jumped because an ad loaded above it? That's CLS.\n**Target:** < 0.1 (Good), 0.1-0.25 (Needs Improvement), > 0.25 (Poor)\n**What affects it:** Images without dimensions, dynamically injected content above existing content, web fonts causing text reflow, ads without reserved space.\n**How to fix in Next.js:**\n- `next/image` automatically sets width/height (prevents image CLS)\n- `next/font` automatically sets font-display: swap with size adjustment\n- Always specify dimensions for images, videos, iframes\n- Reserve space for dynamic content (skeletons, placeholders)\n- Use CSS `aspect-ratio` for responsive containers\n\n## Next.js Built-in Optimizations\n\n### next/image\n- Automatic WebP/AVIF conversion (smaller files)\n- Lazy loading for below-the-fold images\n- Blur placeholder (no layout shift)\n- Responsive srcset generation\n- Remote image optimization (configure domains in next.config.js)\n\n### next/font\n- Zero layout shift (automatically calculates font metrics)\n- Self-hosted fonts (no external requests — better privacy and speed)\n- Supports Google Fonts, local fonts, and any font file\n\n### next/dynamic\n- Code-splitting on demand\n- Load heavy components only when needed (modals, charts, editors)\n- `ssr: false` option for client-only libraries (Leaflet, Chart.js)\n- `loading` fallback for Suspense-like behavior\n\n### next/script\n- Strategy control: `beforeInteractive`, `afterInteractive`, `lazyOnload`\n- Defer non-critical scripts to avoid blocking the main thread\n\n### @next/bundle-analyzer\n- Visualizes what's in each JavaScript chunk\n- Find unexpectedly large bundles\n- Identify shared dependencies that could be deduplicated",
    "keyRules": [
      "Use next/image for automatic WebP conversion, lazy loading, and blur placeholders",
      "Use next/font for zero-layout-shift font loading",
      "Use next/dynamic for code-splitting heavy components",
      "Target LCP < 2.5s, INP < 200ms, CLS < 0.1",
      "Use @next/bundle-analyzer to identify large bundles",
      "Add priority prop to above-the-fold images for faster LCP",
      "Use useTransition for non-urgent state updates to improve INP"
    ],
    "task": "Create a component that displays Core Web Vitals as a list. Show each metric (LCP, FID, CLS, INP) with its full name, target value, and a colored status indicator. Use different colors for 'good' and 'needs-work' statuses.",
    "hint": "Define an array of vital objects with name, full, target, status, and color properties. Map over them to render rows with the metric info and a small colored circle for status.",
    "starterCode": "function App() {\n  \n  return (\n    <div>\n      \n    </div>\n  );\n}",
    "solutionCode": "function App() {\n  const vitals = [\n    { name: \"LCP\", full: \"Largest Contentful Paint\", target: \"< 2.5s\", status: \"good\", color: \"#34d399\" },\n    { name: \"FID\", full: \"First Input Delay\", target: \"< 100ms\", status: \"good\", color: \"#34d399\" },\n    { name: \"CLS\", full: \"Cumulative Layout Shift\", target: \"< 0.1\", status: \"good\", color: \"#34d399\" },\n    { name: \"INP\", full: \"Interaction to Next Paint\", target: \"< 200ms\", status: \"needs-work\", color: \"#fbbf24\" },\n  ];\n  return (\n    <div style={{ fontFamily: \"system-ui\", padding: 20 }}>\n      <h1 style={{ color: \"#e2e8f0\", marginBottom: 4 }}>Core Web Vitals</h1>\n      <p style={{ color: \"#94a3b8\", fontSize: 13, marginBottom: 16 }}>Google's user experience metrics</p>\n      <div style={{ display: \"flex\", flexDirection: \"column\", gap: 8 }}>\n        {vitals.map((v) => (\n          <div key={v.name} style={{ display: \"flex\", alignItems: \"center\", gap: 12, padding: \"10px 14px\", borderRadius: 8, background: \"rgba(255,255,255,0.03)\", border: \"1px solid rgba(255,255,255,0.07)\" }}>\n            <div style={{ width: 10, height: 10, borderRadius: \"50%\", background: v.color, flexShrink: 0 }}></div>\n            <div style={{ flex: 1 }}>\n              <div style={{ color: \"#e2e8f0\", fontSize: 13, fontWeight: 600 }}>{v.name} <span style={{ color: \"#64748b\", fontWeight: 400 }}>- {v.full}</span></div>\n            </div>\n            <div style={{ padding: \"3px 10px\", borderRadius: 12, fontSize: 11, fontWeight: 600, background: v.color + \"18\", color: v.color }}>{v.target}</div>\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n}",
    "exampleCode": "// ⚡ Performance Optimization in Next.js\n\n// 1️⃣ next/image — Optimized Images\nimport Image from 'next/image';\n\nexport default function HeroSection() {\n  return (\n    <div>\n      {/* Above the fold — use priority for faster LCP */}\n      <Image\n        src=\"/hero.jpg\"\n        alt=\"Hero image\"\n        width={1200}\n        height={600}\n        priority  // Preloads this image — critical for LCP\n        // Automatic: WebP/AVIF, lazy loading, blur placeholder, responsive srcset\n      />\n\n      {/* Below the fold — lazy loaded automatically */}\n      <Image\n        src=\"/gallery-1.jpg\"\n        alt=\"Gallery\"\n        width={800}\n        height={600}\n        // No priority = lazy loaded when entering viewport\n        placeholder=\"blur\"  // Shows blurred low-res version while loading\n        blurDataURL=\"data:image/jpeg;base64,...\" // Or auto-generated\n      />\n\n      {/* Remote image (configure domain in next.config.js) */}\n      <Image\n        src=\"https://example.com/photo.jpg\"\n        alt=\"Remote\"\n        width={400}\n        height={300}\n      />\n    </div>\n  );\n}\n\n// next.config.js — Remote image domains\nmodule.exports = {\n  images: {\n    remotePatterns: [\n      { protocol: 'https', hostname: 'example.com' },\n      { protocol: 'https', hostname: '**.cdn.com' },\n    ],\n  },\n};\n\n// 2️⃣ next/font — Zero-CLS Fonts\nimport { Inter, Roboto_Mono } from 'next/font/google';\nimport localFont from 'next/font/local';\n\nconst inter = Inter({\n  subsets: ['latin'],\n  display: 'swap',  // Shows fallback first, swaps when loaded\n  variable: '--font-inter', // CSS variable\n});\n\nconst mono = Roboto_Mono({\n  subsets: ['latin'],\n  variable: '--font-mono',\n});\n\nconst customFont = localFont({\n  src: './fonts/CalSans.woff2',\n  display: 'swap',\n  variable: '--font-cal',\n});\n\n// Apply via CSS variables (no layout shift!)\n// <body className={`${inter.variable} ${mono.variable}`}>\n\n// 3️⃣ next/dynamic — Code Splitting\nimport dynamic from 'next/dynamic';\n\n// Lazy load a heavy chart component\nconst Chart = dynamic(() => import('@/components/HeavyChart'), {\n  loading: () => <div>Loading chart...</div>,\n  ssr: false,  // Client-only (for libs that need window/document)\n});\n\n// Lazy load a modal\nconst EditModal = dynamic(() => import('@/components/EditModal'));\n\nexport default function Dashboard() {\n  const [showModal, setShowModal] = useState(false);\n  return (\n    <div>\n      <Chart data={data} /> {/* Loaded only when this page renders */}\n      {showModal && <EditModal onClose={() => setShowModal(false)} />}\n    </div>\n  );\n}\n\n// 4️⃣ next/script — Script Loading Strategy\nimport Script from 'next/script';\n\nexport default function Layout({ children }) {\n  return (\n    <html>\n      <body>\n        {children}\n        {/* Analytics — load after page is interactive */}\n        <Script src=\"https://www.googletagmanager.com/gtag/js?id=GA_ID\" strategy=\"afterInteractive\" />\n\n        {/* Chat widget — load when browser is idle */}\n        <Script src=\"https://widget.chat.com/embed.js\" strategy=\"lazyOnload\" />\n      </body>\n    </html>\n  );\n}\n\n// 5️⃣ Bundle Analysis\n// next.config.js\nconst withBundleAnalyzer = require('@next/bundle-analyzer')({\n  enabled: process.env.ANALYZE === 'true',\n});\n\nmodule.exports = withBundleAnalyzer({\n  // Your config...\n});\n// Run: ANALYZE=true next build\n// Opens visual treemap of your JS bundles",
    "learnings": [
      { "title": "Core Web Vitals Deep Dive", "desc": "Understanding LCP, INP, and CLS — what they measure, why they matter, and how to debug them." },
      { "title": "Image & Font Optimization", "desc": "Leveraging next/image and next/font for automatic format conversion and zero-shift loading." },
      { "title": "Code Splitting & Lazy Loading", "desc": "Using next/dynamic to defer heavy components and reduce initial JavaScript payload." },
      { "title": "Bundle Analysis & Monitoring", "desc": "Identifying bloat with @next/bundle-analyzer and setting up real-user monitoring." }
    ],
    "tests": [
      { "id": "t1", "description": "Should display LCP metric", "check": "code => code.includes(\"LCP\")" },
      { "id": "t2", "description": "Should display INP metric", "check": "code => code.includes(\"INP\")" },
      { "id": "t3", "description": "Should display CLS metric", "check": "code => code.includes(\"CLS\")" },
      { "id": "t4", "description": "Should show target values", "check": "code => code.includes(\"<\") && code.includes(\"s\")" },
      { "id": "t5", "description": "Should have colored status indicators", "check": "code => code.includes(\"#34d399\") || code.includes(\"#fbbf24\")" }
    ]
  },
  {
    "id": "11",
    "slug": "seo-meta-tags",
    "title": "SEO, Meta Tags & Open Graph",
    "icon": "Globe",
    "overview": "Command search rankings with dynamic metadata, sitemaps, and programmatically generated social share images.",
    "explanation": "## Why SEO in Next.js is Different\n\nIn traditional client-side React apps, search engine crawlers often see a blank HTML page with a `<div id=\"root\"></div>` and a script tag. Google's crawler can execute JavaScript, but it's slower, less reliable, and other search engines (Bing, DuckDuckGo, Naver) may not execute JS at all. This means your content might never get indexed.\n\nNext.js solves this fundamentally — Server Components and SSR deliver fully rendered HTML to crawlers. But having HTML content is only half the battle. You also need proper **metadata** — title tags, descriptions, Open Graph tags, canonical URLs, and structured data — to tell search engines and social platforms exactly what each page is about.\n\n## The Metadata API — Two Forms\n\nNext.js provides a declarative Metadata API that replaces the old `<Head>` component from `next/head`. It has two forms:\n\n### Static Metadata (export a const object)\n\nFor pages whose SEO data doesn't change — like a homepage, pricing page, or about page:\n\n```js\nexport const metadata = {\n  title: 'My App',\n  description: 'A fast web app',\n};\n```\n\nThis is the simplest form. The metadata object is evaluated at build time (for SSG) or request time (for SSR) and injected into the `<head>` automatically.\n\n### Dynamic Metadata (generateMetadata function)\n\nFor pages whose SEO data depends on data — like blog posts, product pages, or user profiles:\n\n```js\nexport async function generateMetadata({ params }) {\n  const post = await db.post.findUnique({ where: { slug: params.slug } });\n  return {\n    title: post.title,\n    description: post.excerpt,\n  };\n}\n```\n\nThis async function receives `params` (dynamic route segments) and `searchParams` (query string), so you can fetch data and generate metadata specific to each page. It runs on the server before the page renders.\n\n## Metadata Fields — What Each One Does\n\n**`title`** — The most important SEO signal. Appears as the blue link text in Google search results. Keep it under 60 characters. Supports templates: `title: { template: '%s | My Store', default: 'My Store' }`.\n\n**`description`** — The summary text below the title in search results. Keep it under 160 characters. Not a direct ranking factor, but affects click-through rate which IS a ranking factor.\n\n**`openGraph`** — Controls how your page looks when shared on Facebook, LinkedIn, Discord, Slack, iMessage, and any platform that supports the Open Graph protocol. Includes title, description, image, URL, type (website, article, product), and more.\n\n**`twitter`** — Controls how your page looks in Twitter/X cards. Supports `summary`, `summary_large_image`, and `player` card types. Twitter falls back to Open Graph tags if twitter-specific tags aren't set.\n\n**`robots`** — Tells search engine crawlers what to do: `index`/`noindex` (should this page appear in search?), `follow`/`nofollow` (should links on this page be followed?). Critical for paginated pages, admin pages, and duplicate content.\n\n**`alternates`** — Specifies alternate language versions (`hreflang`), canonical URLs, and media types. Essential for multilingual sites to avoid duplicate content penalties.\n\n**`keywords`** — Deprecated by most search engines. Google has officially stated they don't use the keywords meta tag for ranking. You can skip it.\n\n## Layout vs Page Metadata\n\nMetadata **merges** hierarchically. A root layout sets default metadata, child layouts override some fields, and pages can override further. But some fields (like `title`) are replaced, not merged:\n\n- Root layout: `title: { template: '%s | My Store' }`\n- Page: `title: 'Shoes'`\n- Result: `<title>Shoes | My Store</title>`\n\n## Sitemaps & Robots.txt\n\nNext.js has built-in file conventions for these:\n\n- `app/sitemap.ts` — Export a function that returns an array of URL objects. Next.js generates a valid `sitemap.xml` at `/sitemap.xml`.\n- `app/robots.ts` — Export a function that returns a robots.txt configuration. Available at `/robots.txt`.\n\nBoth can be dynamic — read from your database to include all published posts, products, etc.\n\n## Open Graph Image Generation\n\nStatic OG images are boring and don't scale. Next.js + Vercel provides `@vercel/og` (powered by Satori) to generate custom images at runtime using JSX/CSS:\n\n- Blog post title rendered as a beautiful card image\n- Product name + price + image\n- User profile card with avatar and stats\n- Dynamically generated for EVERY page, no manual design needed\n\n## Common SEO Mistakes in Next.js\n\n- **Missing metadata on dynamic routes** — Every `/blog/[slug]` page gets the same default title. Always use `generateMetadata()`.\n- **No canonical URLs** — If `/products?id=1` and `/products/1` show the same content, set a canonical to avoid duplicate content penalties.\n- **Blocking JS in robots.txt** — Some developers block crawlers from JS files. With SSR this isn't needed and can actually hurt.\n- **Client-side only rendering for important content** — If your product info loads via `useEffect`, crawlers may not see it. Use Server Components.\n- **Forgetting to noindex staging/dev sites** — Your staging.example.com should have `robots: { index: false }` to avoid indexing duplicate content.",
    "keyRules": [
      "Export a metadata object from page.js or layout.js for static SEO",
      "Use generateMetadata() for dynamic metadata based on params",
      "Include openGraph and twitter objects for rich social previews",
      "Generate sitemap.xml and robots.txt using the built-in file conventions",
      "Use @vercel/og for dynamic Open Graph image generation",
      "Use title templates in root layout for consistent branding",
      "Always set noindex on staging and non-production environments"
    ],
    "task": "Create a component that displays a metadata object preview. Define a metadata object with title, description, openGraph, and twitter properties. Render each top-level key as a section with its JSON content displayed using JSON.stringify.",
    "hint": "Define a metadata object with nested openGraph and twitter objects. Use Object.entries(metadata).map() to iterate and render each key. Use JSON.stringify(val, null, 2) inside a pre element for formatting.",
    "starterCode": "function App() {\n  \n  return (\n    <div>\n      \n    </div>\n  );\n}",
    "solutionCode": "function App() {\n  const metadata = {\n    title: \"My Next.js App\",\n    description: \"A blazing fast web application built with Next.js\",\n    openGraph: { title: \"My Next.js App\", type: \"website\", url: \"https://example.com\", image: \"/og-image.png\" },\n    twitter: { card: \"summary_large_image\", title: \"My Next.js App\" },\n  };\n  return (\n    <div style={{ fontFamily: \"system-ui\", padding: 20 }}>\n      <h1 style={{ color: \"#e2e8f0\", marginBottom: 4 }}>Metadata API</h1>\n      <p style={{ color: \"#94a3b8\", fontSize: 13, marginBottom: 16 }}>generateMetadata() output preview</p>\n      {Object.entries(metadata).map(([key, val]) => (\n        <div key={key} style={{ marginBottom: 12, padding: 12, borderRadius: 8, background: \"rgba(96,165,250,0.06)\", border: \"1px solid rgba(96,165,250,0.12)\" }}>\n          <span style={{ color: \"#60a5fa\", fontSize: 11, fontWeight: 700, textTransform: \"uppercase\" }}>{key}</span>\n          <pre style={{ color: \"#cbd5e1\", fontSize: 11, margin: \"4px 0 0\", whiteSpace: \"pre-wrap\" }}>{JSON.stringify(val, null, 2)}</pre>\n        </div>\n      ))}\n    </div>\n  );\n}",
    "exampleCode": "// 🌐 SEO, Meta Tags & Open Graph in Next.js\n\n// 1️⃣ Static Metadata — Root Layout (title template)\n// app/layout.jsx\nexport const metadata = {\n  title: {\n    template: '%s | My Store',  // Pages override %s part\n    default: 'My Store',         // Fallback if page has no title\n  },\n  description: 'Shop the latest products at the best prices',\n  metadataBase: new URL('https://mystore.com'),\n  openGraph: {\n    type: 'website',\n    locale: 'en_US',\n    url: 'https://mystore.com',\n    siteName: 'My Store',\n    images: [{ url: '/og-default.png', width: 1200, height: 630 }],\n  },\n  twitter: {\n    card: 'summary_large_image',\n    creator: '@mystore',\n  },\n  robots: {\n    index: true,\n    follow: true,\n    googleBot: {\n      index: true,\n      follow: true,\n      'max-video-preview': -1,\n      'max-image-preview': 'large',\n      'max-snippet': -1,\n    },\n  },\n  alternates: {\n    canonical: 'https://mystore.com',\n    languages: {\n      'en-US': 'https://mystore.com',\n      'es-ES': 'https://mystore.com/es',\n      'hi-IN': 'https://mystore.com/hi',\n    },\n  },\n};\n\nexport default function RootLayout({ children }) {\n  return (\n    <html lang=\"en\">\n      <body>{children}</body>\n    </html>\n  );\n}\n\n// 2️⃣ Dynamic Metadata — Blog Post Page\n// app/blog/[slug]/page.jsx\nimport { db } from '@/lib/db';\n\nexport async function generateMetadata({ params }) {\n  const post = await db.post.findUnique({\n    where: { slug: params.slug },\n    select: { title: true, excerpt: true, coverImage: true, author: true },\n  });\n\n  if (!post) return { title: 'Post Not Found' };\n\n  return {\n    title: post.title,                          // \"React Server Components Guide\"\n    description: post.excerpt,                    // \"Learn how RSC changes...\"\n    openGraph: {\n      title: post.title,\n      description: post.excerpt,\n      type: 'article',\n      publishedTime: post.publishedAt,\n      authors: [post.author.name],\n      url: `https://mystore.com/blog/${params.slug}`,\n      images: [{\n        url: post.coverImage,\n        width: 1200,\n        height: 630,\n        alt: post.title,\n      }],\n    },\n    twitter: {\n      card: 'summary_large_image',\n      title: post.title,\n      description: post.excerpt,\n      images: [post.coverImage],\n    },\n    alternates: {\n      canonical: `https://mystore.com/blog/${params.slug}`,\n    },\n  };\n}\n\nexport default async function BlogPost({ params }) {\n  const post = await db.post.findUnique({ where: { slug: params.slug } });\n  return <article>{/* render post */}</article>;\n}\n\n// 3️⃣ Dynamic Sitemap\n// app/sitemap.ts\nimport { db } from '@/lib/db';\nimport { MetadataRoute } from 'next';\n\nexport default async function sitemap(): Promise<MetadataRoute.Sitemap> {\n  const posts = await db.post.findMany({\n    where: { published: true },\n    select: { slug: true, updatedAt: true },\n  });\n\n  const postUrls = posts.map((post) => ({\n    url: `https://mystore.com/blog/${post.slug}`,\n    lastModified: post.updatedAt,\n    changeFrequency: 'weekly' as const,\n    priority: 0.8,\n  }));\n\n  return [\n    { url: 'https://mystore.com', lastModified: new Date(), changeFrequency: 'daily', priority: 1 },\n    { url: 'https://mystore.com/products', lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },\n    { url: 'https://mystore.com/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },\n    ...postUrls,\n  ];\n}\n// Available at: https://mystore.com/sitemap.xml\n\n// 4️⃣ Robots.txt\n// app/robots.ts\nimport { MetadataRoute } from 'next';\n\nexport default function robots(): MetadataRoute.Robots {\n  return {\n    rules: [\n      { userAgent: '*', allow: '/', disallow: ['/api/', '/admin/', '/dashboard/'] },\n      { userAgent: 'GPTBot', disallow: '/' },  // Block AI crawlers\n    ],\n    sitemap: 'https://mystore.com/sitemap.xml',\n  };\n}\n// Available at: https://mystore.com/robots.txt\n\n// 5️⃣ Dynamic OG Image Generation with @vercel/og\n// app/api/og/route.tsx\nimport { ImageResponse } from 'next/og';\nimport { db } from '@/lib/db';\n\nexport const runtime = 'edge'; // Fast edge execution\n\nexport async function GET(request: Request) {\n  const { searchParams } = new URL(request.url);\n  const slug = searchParams.get('slug');\n\n  const post = await db.post.findUnique({\n    where: { slug: slug || '' },\n    select: { title: true, author: { select: { name: true } } },\n  });\n\n  return new ImageResponse(\n    (\n      <div style={{\n        width: '100%', height: '100%',\n        display: 'flex', flexDirection: 'column',\n        justifyContent: 'center', alignItems: 'center',\n        backgroundColor: '#0f172a',\n        padding: '60px',\n      }}>\n        <div style={{\n          display: 'flex', fontSize: 64, fontWeight: 700,\n          color: '#e2e8f0', textAlign: 'center', lineHeight: 1.2,\n        }}>\n          {post?.title || 'My Store'}\n        </div>\n        <div style={{\n          fontSize: 28, color: '#94a3b8', marginTop: 20,\n        }}>\n          by {post?.author?.name || 'My Store Team'}\n        </div>\n        <div style={{\n          display: 'flex', fontSize: 20, color: '#8b5cf6', marginTop: 40,\n        }}>\n          mystore.com\n        </div>\n      </div>\n    ),\n    {\n      width: 1200,\n      height: 630,\n    }\n  );\n}\n// Usage in metadata:\n// images: [`/api/og?slug=${params.slug}`]\n\n// 6️⃣ JSON-LD Structured Data (for rich snippets)\n// app/blog/[slug]/page.jsx\nexport default async function BlogPost({ params }) {\n  const post = await db.post.findUnique({ where: { slug: params.slug } });\n\n  const jsonLd = {\n    '@context': 'https://schema.org',\n    '@type': 'BlogPosting',\n    headline: post.title,\n    description: post.excerpt,\n    image: post.coverImage,\n    datePublished: post.publishedAt,\n    dateModified: post.updatedAt,\n    author: {\n      '@type': 'Person',\n      name: post.author.name,\n    },\n  };\n\n  return (\n    <>\n      <script\n        type=\"application/ld+json\"\n        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}\n      />\n      <article>{/* render post */}</article>\n    </>\n  );\n}",
    "learnings": [
      { "title": "Metadata API (Static & Dynamic)", "desc": "Exporting viewport, canonical tags, and generating values via generateMetadata." },
      { "title": "Automated Sitemaps & Robots", "desc": "Generating runtime-driven sitemap.xml and robots.txt linked to database models." },
      { "title": "Dynamic Open Graph Images", "desc": "Utilizing @vercel/og to generate custom social share graphics at runtime." }
    ],
    "tests": [
      { "id": "t1", "description": "Should have metadata object with title", "check": "code => /title:\\s*[\"']/.test(code)" },
      { "id": "t2", "description": "Should include openGraph", "check": "code => code.includes(\"openGraph\")" },
      { "id": "t3", "description": "Should include twitter card", "check": "code => code.includes(\"twitter\")" },
      { "id": "t4", "description": "Should render metadata as JSON", "check": "code => code.includes(\"JSON.stringify\")" }
    ]
  },
    {
    id: "12",
    slug: "testing-suites",
    title: "Comprehensive Testing Suites",
    icon: "CheckCircle2",
    difficulty: "Advanced",
    overview: "Set up bulletproof assertions from individual component structures up to complete end-to-end user navigation tunnels.",
    explanation: "## Why Testing Matters in Next.js\n\nNext.js apps have Server Components, Client Components, API routes, Server Actions, and middleware — each running in different environments. Without tests, a small change in a Server Component can silently break your data fetching, or a Server Action change can corrupt your database.\n\n## Unit Testing with Vitest\n\nUnit tests verify individual functions in isolation. In Next.js, this means testing:\n- Utility functions (formatters, validators, transformers)\n- Custom hooks (using @testing-library/react-hooks or renderHook)\n- Helper functions that don't touch the DOM\n\nVitest is preferred over Jest for Next.js because it's faster (uses Vite's transform), has native ESM support, and better TypeScript integration.\n\n## Component Testing with React Testing Library\n\nRTL tests render components in a lightweight DOM (jsdom) and verify behavior through user interactions:\n- **Queries**: `getByRole`, `getByText`, `getByLabelText` — find elements like a user does\n- **Actions**: `userEvent.click()`, `userEvent.type()` — simulate real interactions\n- **Assertions**: `expect(element).toBeVisible()`, `expect(fn).toHaveBeenCalledWith()`\n\nFor Next.js, you must mock `next/navigation` (useRouter, usePathname) and `next/image` (Image component).\n\n## E2E Testing with Playwright\n\nPlaywright launches real browsers (Chromium, Firefox, WebKit) and tests complete user flows:\n- Login → Dashboard → Logout\n- Fill form → Submit → Verify success\n- Navigate between pages → Check URL and content\n\nIt tests your app exactly as users experience it — no mocks, no shortcuts.\n\n## Testing Server Components\n\nServer Components can't be rendered with RTL directly. Instead:\n- Test the data fetching logic separately (unit test)\n- Use E2E to test the rendered output\n- Or use a library like @testing-library/react that supports RSC",
    keyRules: [
      "Use Vitest for unit tests — faster than Jest with native ESM support",
      "Use React Testing Library for component tests — query by role, not by class",
      "Mock next/navigation for useRouter and usePathname in component tests",
      "Use Playwright for E2E tests — real browsers, no mocks",
      "Test Server Components via E2E or test their data logic in isolation",
      "Aim for: unit tests for logic, component tests for UI, E2E for critical flows"
    ],
    task: "Create a simple test runner component that takes an array of test objects (each with a name and a fn function that returns true/false), runs them, and displays pass/fail results with a summary.",
    hint: "Define a tests array where each test has 'name' and 'fn'. Use useState for results. Map over tests, call each fn(), and store true/false in results array. Display green checkmarks for true, red X for false.",
    learnings: [
      { title: "Unit Testing with Vitest / Jest", desc: "Testing pure functional handlers, utility configurations, and headless hook configurations." },
      { title: "Component Testing with RTL", desc: "Mocking next/navigation dependencies and checking Server/Client component interface outputs." },
      { title: "E2E Testing with Playwright", desc: "Simulating authentic database-connected workflows on headless browsers to secure critical flows." },
    ],
    starterCode: `function App() {
  
  return (
    <div>
      
    </div>
  );
}`,
    solutionCode: `function App() {
  const [results, setResults] = useState(null);
  
  const tests = [
    { name: "1 === 1 should be true", fn: () => 1 === 1 },
    { name: "Array includes item", fn: () => [1, 2, 3].includes(2) },
    { name: "String length > 0", fn: () => "hello".length > 0 },
    { name: "Object has key", fn: () => "name" in { name: "test" } },
    { name: "10 > 5 is true", fn: () => 10 > 5 },
  ];
  
  function runTests() {
    const output = tests.map(t => ({
      name: t.name,
      passed: t.fn()
    }));
    setResults(output);
  }
  
  const passed = results ? results.filter(r => r.passed).length : 0;
  const total = results ? results.length : 0;

  return (
    <div style={{ fontFamily: "system-ui", padding: 20, maxWidth: 500 }}>
      <h1 style={{ color: "#e2e8f0", marginBottom: 4 }}>Test Runner</h1>
      <p style={{ color: "#94a3b8", fontSize: 13, marginBottom: 16 }}>A simplified test runner UI</p>
      <button onClick={runTests} style={{ padding: "8px 20px", borderRadius: 6, border: "none", background: "#8b5cf6", color: "#fff", fontWeight: 600, cursor: "pointer", marginBottom: 16 }}>Run All Tests</button>
      {results && (
        <div style={{ padding: 12, borderRadius: 8, marginBottom: 12, background: passed === total ? "rgba(34,197,94,0.1)" : "rgba(239,68,68,0.1)", border: passed === total ? "1px solid rgba(34,197,94,0.2)" : "1px solid rgba(239,68,68,0.2)" }}>
          <span style={{ color: passed === total ? "#4ade80" : "#f87171", fontWeight: 600, fontSize: 13 }}>{passed}/{total} Passed</span>
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {results && results.map((r, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", borderRadius: 6, background: r.passed ? "rgba(34,197,94,0.05)" : "rgba(239,68,68,0.05)", border: r.passed ? "1px solid rgba(34,197,94,0.15)" : "1px solid rgba(239,68,68,0.15)" }}>
            <span style={{ fontSize: 16 }}>{r.passed ? "✓" : "✕"}</span>
            <span style={{ color: r.passed ? "#4ade80" : "#f87171", fontSize: 13 }}>{r.name}</span>
          </div>
        ))}
      </div>
      {!results && <p style={{ color: "#64748b", fontSize: 12, marginTop: 12 }}>Click "Run All Tests" to execute</p>}
    </div>
  );
}`,
    exampleCode: `// 🧪 Testing Patterns in Next.js

// 1️⃣ Unit Test with Vitest
// __tests__/utils.test.ts
import { describe, it, expect } from 'vitest';
import { formatDate, validateEmail } from '@/lib/utils';

describe('formatDate', () => {
  it('formats ISO date to readable string', () => {
    expect(formatDate('2024-01-15')).toBe('Jan 15, 2024');
  });
});

describe('validateEmail', () => {
  it('returns true for valid emails', () => {
    expect(validateEmail('user@example.com')).toBe(true);
  });
  it('returns false for invalid emails', () => {
    expect(validateEmail('not-an-email')).toBe(false);
  });
});

// 2️⃣ Component Test with RTL
// __tests__/Button.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '@/components/Button';

it('calls onClick when clicked', async () => {
  const handleClick = vi.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  
  await userEvent.click(screen.getByRole('button', { name: /click me/i }));
  expect(handleClick).toHaveBeenCalledOnce();
});

// 3️⃣ Mocking next/navigation
// __tests__/Navbar.test.tsx
import { render, screen } from '@testing-library/react';
import Navbar from '@/components/Navbar';

vi.mock('next/navigation', () => ({
  usePathname: () => '/dashboard',
  useRouter: () => ({ push: vi.fn(), back: vi.fn() }),
}));

it('highlights active link', () => {
  render(<Navbar />);
  expect(screen.getByText('Dashboard')).toHaveStyle('color: #8b5cf6');
});

// 4️⃣ E2E Test with Playwright
// e2e/checkout.spec.ts
import { test, expect } from '@playwright/test';

test('complete checkout flow', async ({ page }) => {
  await page.goto('/products');
  await page.click('text=Add to Cart');
  await page.click('text=Checkout');
  await page.fill('[name="email"]', 'test@example.com');
  await page.fill('[name="card"]', '4242424242424242');
  await page.click('text=Pay Now');
  await expect(page.locator('text=Order Confirmed')).toBeVisible();
});`,
    tests: [
      { id: "t1", description: "Should use useState for results", check: "code => /useState/.test(code)" },
      { id: "t2", description: "Should have a tests array", check: "code => /const\\s+tests\\s*=/.test(code)" },
      { id: "t3", description: "Each test should have a name and fn", check: "code => /name:/.test(code) && /fn:/.test(code)" },
      { id: "t4", description: "Should have a runTests function", check: "code => /function\\s+runTests/.test(code) || /const\\s+runTests/.test(code)" },
      { id: "t5", description: "Should display pass/fail with map", check: "code => /\\.map\\s*\\(/.test(code) && /passed/.test(code)" },
      { id: "t6", description: "Should show passed/total count", check: "code => /passed/.test(code) && /total/.test(code)" },
    ],
  },
  {
    id: "13",
    slug: "monitoring-security",
    title: "Monitoring, Diagnostics & Security Gates",
    icon: "AlertTriangle",
    difficulty: "Advanced",
    overview: "Track telemetry logs, intercept edge-case exceptions, and safeguard applications against web-level exploit patterns.",
    explanation: "## Why Monitoring Matters\n\nUsers don't report bugs — they just leave. Without monitoring, you're flying blind. A failing API route, a slow database query, or a JavaScript error in a Client Component can silently destroy your conversion rate.\n\n## Error Boundaries in Next.js\n\nNext.js provides built-in error handling at multiple levels:\n- **`error.jsx`** — Catches runtime errors in Server Components and Client Components. Must be a Client Component. Receives `error` and `reset` props.\n- **`global-error.jsx`** — Catches errors that `error.jsx` misses (root layout errors). Must include its own `<html>` and `<body>` tags.\n- **`not-found.jsx`** — Custom 404 page. Triggered by `notFound()` function or unmatched routes.\n\n## Error Logging with Sentry\n\nSentry captures errors with full context:\n- Source maps to see the exact line in your original code\n- User info, browser, OS, and device data\n- Breadcrumbs showing what happened before the error\n- Release tracking to see which deploy introduced the bug\n\nSetup in Next.js:\n```js\n// next.config.js\nconst { withSentryConfig } = require('@sentry/nextjs');\nmodule.exports = withSentryConfig(nextConfig);\n```\n\n## Security: XSS Prevention\n\nCross-Site Scripting (XSS) happens when user input is rendered as HTML without sanitization. React automatically escapes JSX, but dangers remain:\n- `dangerouslySetInnerHTML` — never use with unsanitized data\n- `href` attributes with `javascript:` protocol\n- User-uploaded files that execute as scripts\n\n## Security: CSRF Protection\n\nCross-Site Request Forgery tricks users into performing unwanted actions. Next.js Server Actions have built-in CSRF protection, but for API routes you need:\n- CSRF tokens in forms\n- SameSite cookie attribute\n- Origin header validation\n\n## Content Security Policy (CSP)\n\nCSP headers tell the browser which resources are allowed to load:\n```js\n// next.config.js\nconst cspHeader = \`default-src 'self'; script-src 'self' 'nonce-abc123'; style-src 'self' 'unsafe-inline'\`;\n```\n\nThis prevents inline script injection, unauthorized external resources, and data exfiltration.",
    keyRules: [
      "Use error.jsx for route-level error boundaries with reset functionality",
      "Use global-error.jsx for root layout errors — must include html/body tags",
      "Integrate Sentry for production error tracking with source maps",
      "Never use dangerouslySetInnerHTML with unsanitized user data",
      "Server Actions have built-in CSRF protection — API routes need manual tokens",
      "Use Content Security Policy headers to prevent XSS and resource hijacking"
    ],
    task: "Create an error boundary simulator component that wraps a 'risky' child component. The child should throw an error when a button is clicked. The parent should catch it with try/catch in a useEffect and display a fallback error UI with a 'Retry' button that resets the state.",
    hint: "Use a boolean state 'hasError'. When the child throws, catch it in the parent using a callback or state flag. Show error UI when hasError is true, show normal UI when false. 'Retry' sets hasError back to false.",
    learnings: [
      { title: "Error Boundaries & Fallbacks", desc: "Designing elegant recovery flows with local error.js files and global exception catching triggers." },
      { title: "Full-Stack Error Logging (Sentry)", desc: "Capturing edge runtime breakdowns and tracking source map code locations immediately." },
      { title: "Security Protocols (XSS / CSRF)", desc: "Injecting Content Security Policies, sanitizing HTML strings, and configuring rigid CORS parameters." },
    ],
    starterCode: `function App() {
  
  return (
    <div>
      
    </div>
  );
}`,
    solutionCode: `function App() {
  const [hasError, setHasError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  
  function triggerError() {
    try {
      throw new Error("Simulated: Database connection failed!");
    } catch (err) {
      setHasError(true);
      setErrorMsg(err.message);
    }
  }
  
  function retry() {
    setHasError(false);
    setErrorMsg("");
  }
  
  if (hasError) {
    return (
      <div style={{ fontFamily: "system-ui", padding: 20, maxWidth: 450 }}>
        <div style={{ padding: 16, borderRadius: 8, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", marginBottom: 16 }}>
          <h2 style={{ color: "#f87171", fontSize: 16, marginTop: 0 }}>⚠️ Error Caught</h2>
          <p style={{ color: "#fca5a5", fontSize: 13, fontFamily: "monospace", margin: "8px 0" }}>{errorMsg}</p>
        </div>
        <button onClick={retry} style={{ padding: "8px 20px", borderRadius: 6, border: "none", background: "#8b5cf6", color: "#fff", fontWeight: 600, cursor: "pointer" }}>Retry</button>
      </div>
    );
  }
  
  return (
    <div style={{ fontFamily: "system-ui", padding: 20, maxWidth: 450 }}>
      <h1 style={{ color: "#e2e8f0", marginBottom: 4 }}>Error Boundary Demo</h1>
      <p style={{ color: "#94a3b8", fontSize: 13, marginBottom: 16 }}>Click to simulate an error in child component</p>
      <div style={{ padding: 16, borderRadius: 8, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", marginBottom: 16 }}>
        <p style={{ color: "#94a3b8", fontSize: 12, margin: "0 0 8px" }}>Child Component</p>
        <p style={{ color: "#e2e8f0", fontSize: 13, margin: 0 }}>This component is healthy ✓</p>
      </div>
      <button onClick={triggerError} style={{ padding: "8px 20px", borderRadius: 6, border: "none", background: "rgba(239,68,68,0.2)", color: "#f87171", fontWeight: 600, cursor: "pointer" }}>Trigger Error</button>
    </div>
  );
}`,
    exampleCode: `// 🛡️ Error Handling & Security in Next.js

// 1️⃣ Route Error Boundary
// app/dashboard/error.jsx
'use client';
export default function DashboardError({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}

// 2️⃣ Global Error Boundary
// app/global-error.jsx
'use client';
export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>App crashed!</h2>
        <button onClick={reset}>Reload</button>
      </body>
    </html>
  );
}

// 3️⃣ Sentry Integration
// sentry.client.config.js
import * as Sentry from '@sentry/nextjs';
Sentry.init({
  dsn: 'https://xxx@sentry.io/xxx',
  tracesSampleRate: 1.0,
});

// 4️⃣ CSP Header in next.config.js
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'nonce-abc'; style-src 'self' 'unsafe-inline'",
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
];

module.exports = {
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }];
  },
};

// 5️⃣ API Route CSRF Protection
// app/api/users/route.js
export async function POST(request) {
  const origin = request.headers.get('origin');
  if (origin !== 'https://yourdomain.com') {
    return new Response('Forbidden', { status: 403 });
  }
  // Process request...
}`,
    tests: [
      { id: "t1", description: "Should use useState for error state", check: "code => /useState/.test(code)" },
      { id: "t2", description: "Should have hasError state", check: "code => /hasError/.test(code)" },
      { id: "t3", description: "Should have try/catch block", check: "code => /try\\s*\\{/.test(code) && /catch/.test(code)" },
      { id: "t4", description: "Should have a retry/reset function", check: "code => /retry|reset/.test(code)" },
      { id: "t5", description: "Should conditionally render error UI", check: "code => /hasError\\s*\\?/.test(code) || /if\\s*\\(\\s*hasError/.test(code)" },
      { id: "t6", description: "Should display error message", check: "code => /errorMsg|error\\.message/.test(code)" },
    ],
  },
  {
    id: "14",
    slug: "cicd-deployment",
    title: "CI/CD, Deployment & Infrastructure Ops",
    icon: "Rocket",
    difficulty: "Advanced",
    overview: "Deploy projects globally with automated pipeline configurations, scalable container designs, or standard cloud native clusters.",
    explanation: "## Why Deployment Strategy Matters\n\nA great app is useless if users can't access it reliably. Your deployment strategy affects uptime, deploy speed, rollback capability, and cost.\n\n## Vercel Deployment\n\nVercel is the default and easiest platform for Next.js:\n- **Git Integration**: Push to main → automatic build & deploy\n- **Preview Deployments**: Every PR gets its own URL for testing\n- **Instant Rollbacks**: One click to revert to any previous deployment\n- **Edge Network**: Content served from 100+ edge locations globally\n- **Zero-config**: Detects Next.js automatically, handles build settings\n\n## Environment Variables\n\nNever commit secrets to Git. Use `.env.local` for local dev and Vercel dashboard (or `vercel env`) for production.\n- `.env.local` — Local only, gitignored\n- `.env.production` — Production builds\n- `.env.development` — Development builds\n\n## Docker Deployment\n\nFor self-hosting or custom infrastructure:\n```dockerfile\nFROM node:18-alpine AS base\nFROM base AS deps\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nFROM base AS builder\nWORKDIR /app\nCOPY --from=deps /app/node_modules ./node_modules\nCOPY . .\nRUN npm run build\nFROM base AS runner\nWORKDIR /app\nENV NODE_ENV=production\nCOPY --from=builder /app/public ./public\nCOPY --from=builder /app/.next/standalone ./\nCOPY --from=builder /app/.next/static ./.next/static\nEXPOSE 3000\nCMD [\"node\", \"server.js\"]\n```\n\nRequires `output: 'standalone'` in `next.config.js`.\n\n## Static Export\n\nFor pure static hosting (CDN, S3, GitHub Pages):\n- Add `output: 'export'` in `next.config.js`\n- Run `next build` → generates `out/` directory\n- Upload `out/` to any static host\n- Limitation: No Server Components, no API routes, no revalidation\n\n## CI/CD with GitHub Actions\n\nAutomate testing and deployment:\n```yaml\nname: Deploy\non: push to main\njobs:\n  build-and-deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n      - run: npm ci\n      - run: npm test\n      - run: npm run build\n      - uses: amondnet/vercel-action@v25\n```\n\n## Self-Hosting on VPS\n\nFor full control:\n- Use PM2 for process management\n- Use Nginx as reverse proxy\n- Use Certbot for SSL certificates\n- Use Cron for health checks",
    keyRules: [
      "Vercel provides zero-config deployment with preview URLs and instant rollbacks",
      "Use .env.local for secrets — never commit to git",
      "Docker needs output: 'standalone' in next.config.js for minimal image size",
      "Static export (output: 'export') disables Server Components and API routes",
      "GitHub Actions can automate test → build → deploy pipeline",
      "Self-hosting needs PM2 + Nginx + SSL for production readiness"
    ],
    task: "Create a CI/CD pipeline visualization component. It should show 4 stages (Install, Test, Build, Deploy) as a vertical timeline. Each stage has a status: 'pending', 'running', or 'done'. Add a 'Start Pipeline' button that simulates running each stage one by one with a delay.",
    hint: "Use useState for stages array where each stage has name, status, and icon. Create a runPipeline function that uses setTimeout to update each stage from 'pending' → 'running' → 'done' sequentially.",
    learnings: [
      { title: "Vercel Platform Deployment", desc: "Managing Preview Deployments, instant build rollbacks, edge configurations, and skew protections." },
      { title: "Dockerizing Next.js Application", desc: "Configuring multi-stage Dockerfiles utilizing standalone build outputs to compress image footprints." },
      { title: "Self-Hosting and Static Exports", desc: "Hosting production-ready Next.js nodes on AWS/VPS or executing next export for pure static CDNs." },
    ],
    starterCode: `function App() {
  
  return (
    <div>
      
    </div>
  );
}`,
    solutionCode: `function App() {
  const [stages, setStages] = useState([
    { name: "Install Dependencies", status: "pending", icon: "📦" },
    { name: "Run Tests", status: "pending", icon: "🧪" },
    { name: "Build Project", status: "pending", icon: "🔨" },
    { name: "Deploy to Production", status: "pending", icon: "🚀" },
  ]);
  const [running, setRunning] = useState(false);
  
  function runPipeline() {
    setRunning(true);
    setStages(s => s.map(st => ({ ...st, status: "pending" })));
    
    stages.forEach((_, i) => {
      setTimeout(() => {
        setStages(prev => prev.map((st, j) => j === i ? { ...st, status: "running" } : st));
      }, i * 1500);
      
      setTimeout(() => {
        setStages(prev => prev.map((st, j) => j === i ? { ...st, status: "done" } : st));
        if (i === stages.length - 1) setRunning(false);
      }, i * 1500 + 1000);
    });
  }
  
  const statusColor = { pending: "#64748b", running: "#fbbf24", done: "#4ade80" };
  const statusBg = { pending: "rgba(100,116,139,0.05)", running: "rgba(251,191,36,0.05)", done: "rgba(34,197,94,0.05)" };
  const statusBorder = { pending: "rgba(100,116,139,0.15)", running: "rgba(251,191,36,0.15)", done: "rgba(34,197,94,0.15)" };

  return (
    <div style={{ fontFamily: "system-ui", padding: 20, maxWidth: 450 }}>
      <h1 style={{ color: "#e2e8f0", marginBottom: 4 }}>CI/CD Pipeline</h1>
      <p style={{ color: "#94a3b8", fontSize: 13, marginBottom: 20 }}>Automated deployment flow</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {stages.map((stage, i) => (
          <div key={i}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderRadius: 8, background: statusBg[stage.status], border: "1px solid " + statusBorder[stage.status] }}>
              <span style={{ fontSize: 20 }}>{stage.icon}</span>
              <div style={{ flex: 1 }}>
                <p style={{ color: "#e2e8f0", fontSize: 13, margin: 0, fontWeight: 500 }}>{stage.name}</p>
                <p style={{ color: statusColor[stage.status], fontSize: 11, margin: "2px 0 0", textTransform: "uppercase", fontWeight: 600 }}>{stage.status}</p>
              </div>
              {stage.status === "done" && <span style={{ color: "#4ade80", fontSize: 18 }}>✓</span>}
              {stage.status === "running" && <span style={{ color: "#fbbf24", fontSize: 14, animation: "spin 1s linear infinite" }}>⟳</span>}
            </div>
            {i < stages.length - 1 && <div style={{ width: 2, height: 12, background: "rgba(255,255,255,0.06)", marginLeft: 28 }} />}
          </div>
        ))}
      </div>
      <button onClick={runPipeline} disabled={running} style={{ marginTop: 20, padding: "10px 24px", borderRadius: 8, border: "none", background: running ? "#334155" : "#8b5cf6", color: running ? "#64748b" : "#fff", fontWeight: 600, fontSize: 14, cursor: running ? "not-allowed" : "pointer", width: "100%" }}>
        {running ? "Pipeline Running..." : "Start Pipeline"}
      </button>
    </div>
  );
}`,
    exampleCode: `// 🚀 Deployment Patterns for Next.js

// 1️⃣ Vercel Configuration
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // For Docker
  // output: 'export',   // For static hosting
  images: {
    domains: ['cdn.example.com'],
  },
};
module.exports = nextConfig;

// 2️⃣ Multi-stage Dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]

// 3️⃣ GitHub Actions CI/CD
// .github/workflows/deploy.yml
name: CI/CD
on:
  push:
    branches: [main]
jobs:
  test-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 18 }
      - run: npm ci
      - run: npm run lint
      - run: npm run test
      - run: npm run build
      - uses amondnet/vercel-action@v25
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: \${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'

// 4️⃣ PM2 Ecosystem Config (Self-hosting)
// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'nextjs-app',
    script: 'node_modules/.bin/next',
    args: 'start',
    cwd: './',
    instances: 2,
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
        },
      }],
    };

    // 5️⃣ Nginx Reverse Proxy (Self-hosting)
    // /etc/nginx/sites-available/nextjs
    server {
        listen 80;
        server_name yourdomain.com;

        location / {
            proxy_pass http://127.0.0.1:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_cache_bypass $http_upgrade;
        }
    }`,
    tests: [
      { id: "t1", description: "Should use useState for stages", check: "code => /useState/.test(code)" },
      { id: "t2", description: "Should have pending, running, done statuses", check: "code => /pending/.test(code) && /running/.test(code) && /done/.test(code)" },
      { id: "t3", description: "Should have a runPipeline function", check: "code => /runPipeline/.test(code)" },
      { id: "t4", description: "Should use setTimeout for sequential execution", check: "code => /setTimeout/.test(code)" },
      { id: "t5", description: "Should render stages list with map", check: "code => /\\.map\\s*\\(/.test(code)" },
    ],
  },
]

// ═══════════════════════════════════════════════════════════════
// BUG CHALLENGES
// ═══════════════════════════════════════════════════════════════
export const bugChallenges = [
  {
    id: "bug-01",
    slug: "bug-useeffect-dependency",
    title: "Missing useEffect Dependency",
    difficulty: "Easy",
    icon: "Bug",
    bugReport: "The counter doesn't update when the count state changes. The effect runs only once on mount instead of whenever count changes.",
    description: "This component is supposed to log the count value to console every time it changes, but it only logs on the initial render. Find and fix the bug in the useEffect dependency array.",
    tags: ["useEffect", "Dependencies", "Hooks"],
    starterCode: `function App() {\n const [count, setCount] = useState(0);\n \n useEffect(() => {\n console.log("Count is: ", count);\n }, []);\n \n return (\n <div style={{ padding: 20 }}>\n <p>Count: {count}</p>\n <button onClick={() => setCount(count + 1)}>Increment</button>\n </div>\n );\n}`,
    solutionCode: `function App() {\n const [count, setCount] = useState(0);\n \n useEffect(() => {\n console.log("Count is: ", count);\n }, [count]);\n \n return (\n <div style={{ padding: 20 }}>\n <p>Count: {count}</p>\n <button onClick={() => setCount(count + 1)}>Increment</button>\n </div>\n );\n}`,
    tests: [
      { id: "bt1", description: "Should have count in dependency array", check: "code => /useEffect[\\s\\S]*?\\[\\s*count\\s*\\]/.test(code)" },
      { id: "bt2", description: "Should use useState", check: "code => /useState\\s*\\(/.test(code)" },
      { id: "bt3", description: "Should have useEffect", check: "code => /useEffect\\s*\\(/.test(code)" },
    ],
  },
  {
    id: "bug-02",
    slug: "bug-stale-state-closure",
    title: "Stale State in Closure",
    difficulty: "Medium",
    icon: "Bug",
    bugReport: "Clicking 'Add and Alert' button multiple times shows the same old value instead of the updated value.",
    description: "The alert always shows the count value from when the handler was created, not the current value. This is a classic stale closure bug.",
    tags: ["Closures", "State", "Async"],
    buggyCode: `function App() {
  const [count, setCount] = useState(0);
  
  function handleClick() {
    setCount(count + 1);
    alert("Count is now: " + count);
  }
  
  return (
    <div style={{ padding: 20 }}>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Add and Alert</button>
    </div>
  );
}`,
    solutionCode: `function App() {
  const [count, setCount] = useState(0);
  
  function handleClick() {
    setCount(prev => prev + 1);
    setTimeout(() => {
      setCount(current => {
        alert("Count is now: " + current);
        return current;
      });
    }, 0);
  }
  
  return (
    <div style={{ padding: 20 }}>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Add and Alert</button>
    </div>
  );
}`,
    tests: [
      { id: "bt1", description: "Should use functional state update", check: "code => /setCount\\s*\\(\\s*(prev|current|c)\\s*=>/.test(code)" },
      { id: "bt2", description: "Should use useState", check: "code => /useState\\s*\\(/.test(code)" },
    ],
  },
  {
    id: "bug-03",
    slug: "image-optimization-missing",
    title: "The Unoptimized Image",
    difficulty: "Easy",
    icon: "Bug",
    bugReport: "A product page uses a standard <img> tag to display images. This causes layout shift, no lazy loading, and missing optimization — hurting Lighthouse score significantly.",
    description: "Next.js provides the Image component from 'next/image' that automatically handles lazy loading, responsive sizing, format conversion (WebP/AVIF), and blur placeholders. Replace the <img> tag with the Image component and add proper width, height, and alt attributes.",
    tags: ["Image", "Performance", "next/image"],
    buggyCode: `function App() {
  return (
    <div>
      <h1>Product: Wireless Headphones</h1>
      <img src="/headphones.jpg" alt="Headphones" />
      <p>Price: $99.99</p>
      <button>Add to Cart</button>
    </div>
  );
}`,
    solutionCode: `function App() {
  const Image = (props) => (
    <img 
      {...props} 
      style={{ maxWidth: "100%", height: "auto", objectFit: "cover" }} 
    />
  );

  return (
    <div>
      <h1>Product: Wireless Headphones</h1>
      <Image src="/headphones.jpg" alt="Headphones" width={500} height={500} />
      <p>Price: $99.99</p>
      <button>Add to Cart</button>
    </div>
  );
}`,
    tests: [
      { id: "bt1", description: "Should define Image component", check: "code => /const\\s+Image\\s*=/.test(code)" },
      { id: "bt2", description: "Should use <Image> component instead of <img>", check: "code => /<Image\\s/.test(code)" },
      { id: "bt3", description: "Must include width prop", check: "code => /width\\s*=/.test(code)" },
      { id: "bt4", description: "Must include height prop", check: "code => /height\\s*=/.test(code)" },
      { id: "bt5", description: "Must include alt attribute", check: "code => /alt\\s*=/.test(code)" },
    ],
  },
  {
    id: "bug-04",
    slug: "stale-data-cache",
    title: "The Ghost Data",
    difficulty: "Medium",
    icon: "Bug",
    bugReport: "A dashboard fetches user data and displays it. After updating data in the database, the dashboard still shows old stale data. The fetch has no revalidation configured.",
    description: "By default, Next.js caches fetch requests indefinitely. To ensure fresh data, you need to add revalidation options. Use { next: { revalidate: 60 } } for time-based revalidation or { cache: 'no-store' } to always fetch fresh data.",
    tags: ["Caching", "Revalidation", "Fetch"],
    buggyCode: `function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Users Dashboard</h1>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.name} - {user.email}</p>
        </div>
      ))}
    </div>
  );
}`,
    solutionCode: `function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/users", { next: { revalidate: 60 } })
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Users Dashboard</h1>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.name} - {user.email}</p>
        </div>
      ))}
    </div>
  );
}`,
    tests: [
      { id: "bt1", description: "Should use fetch", check: "code => /fetch\\s*\\(/.test(code)" },
      { id: "bt2", description: "Must include next option in fetch", check: "code => /next\\s*:/.test(code)" },
      { id: "bt3", description: "Must include revalidate with a number", check: "code => /revalidate\\s*:\\s*\\d+/.test(code)" },
    ],
  },
  {
    id: "bug-05",
    slug: "server-action-wrong-place",
    title: "The Broken Form",
    difficulty: "Hard",
    icon: "Bug",
    bugReport: "A form uses a server action to submit data, but the action is defined directly inside a Client Component without the 'use server' directive. The form submission fails silently.",
    description: "Server Actions must either be defined in a separate file with 'use server' at the top, or marked inline with 'use server' before the function definition. When defining a server action inside a Client Component file, you must prefix the function with 'use server'.",
    tags: ["Server Actions", "Forms", "use server"],
    buggyCode: `function App() {
  const [status, setStatus] = useState("");

  function handleSubmit(formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    setStatus("Submitted: " + name);
  }

  return (
    <form action={handleSubmit}>
      <input name="name" placeholder="Your name" />
      <input name="email" placeholder="Your email" />
      <button type="submit">Send</button>
      <p>{status}</p>
    </form>
  );
}`,
    solutionCode: `function App() {
  const [status, setStatus] = useState("");

  function handleSubmit(formData) {
    "use server";
    const name = formData.get("name");
    const email = formData.get("email");
    setStatus("Submitted: " + name);
  }

  return (
    <form action={handleSubmit}>
      <input name="name" placeholder="Your name" />
      <input name="email" placeholder="Your email" />
      <button type="submit">Send</button>
      <p>{status}</p>
    </form>
  );
}`,
    tests: [
      { id: "bt1", description: "Must include 'use server' directive", check: "code => /use server/.test(code)" },
      { id: "bt2", description: "Should have a form with action attribute", check: "code => /<form/.test(code) && /action\\s*=/.test(code)" },
      { id: "bt3", description: "Should have name input", check: "code => /name\\s*=\\s*['\"]name['\"]/.test(code)" },
      { id: "bt4", description: "Should have email input", check: "code => /name\\s*=\\s*['\"]email['\"]/.test(code)" },
    ],
  },
  {
    id: "bug-06",
    slug: "hydration-mismatch",
    title: "The Time Traveler",
    difficulty: "Hard",
    icon: "Bug",
    bugReport: "A component displays the current time using new Date().toLocaleTimeString(). It works in development but throws a hydration mismatch warning in production because server and client render different times.",
    description: "When a component renders different output on the server vs client, React throws a hydration mismatch error. Date-based values cause this. Fix it by rendering a fallback on the server and updating to the real value in a useEffect on the client.",
    tags: ["Hydration", "SSR", "useEffect"],
    buggyCode: `function App() {
  const time = new Date().toLocaleTimeString();

  return (
    <div>
      <h1>Current Time</h1>
      <p>{time}</p>
    </div>
  );
}`,
    solutionCode: `function App() {
  const [time, setTime] = useState("Loading...");

  useEffect(() => {
    setTime(new Date().toLocaleTimeString());
  }, []);

  return (
    <div>
      <h1>Current Time</h1>
      <p>{time}</p>
    </div>
  );
}`,
    tests: [
      { id: "bt1", description: "Must use useState for time", check: "code => /useState\\s*\\(/.test(code)" },
      { id: "bt2", description: "Must use useEffect", check: "code => /useEffect\\s*\\(/.test(code)" },
      { id: "bt3", description: "Initial state should be a fallback string", check: "code => /useState\\s*\\(\\s*['\"]/.test(code)" },
      { id: "bt4", description: "Should render time variable in UI", check: "code => /\\{time\\}/.test(code)" },
    ],
  },
];

// ═══════════════════════════════════════════════════════════════
// MINI PROJECTS
// ═══════════════════════════════════════════════════════════════
export const miniProjects = [
  {
    id: "proj-01",
    slug: "task-manager",
    title: "Task Manager App",
    difficulty: "Beginner",
    description: "Build a complete task manager with add, delete, toggle complete, and filter functionality. Learn state management patterns used in real Next.js apps.",
    tags: ["useState", "Events", "Filtering", "CRUD"],
    solutionCode: `function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { text: input.trim(), completed: false }]);
    setInput("");
  };
  const toggle = (i) =>
    setTasks(tasks.map((t, idx) => idx === i ? { ...t, completed: !t.completed } : t));
  const remove = (i) =>
    setTasks(tasks.filter((_, idx) => idx !== i));

  const filtered = tasks.filter((t) =>
    filter === "all" ? true : filter === "active" ? !t.completed : t.completed
  );

  return (
    <div style={{ fontFamily: "system-ui", padding: 20, maxWidth: 400 }}>
      <h1 style={{ color: "#e2e8f0", marginBottom: 4 }}>Task Manager</h1>
      <p style={{ color: "#64748b", fontSize: 12, marginBottom: 16 }}>
        {tasks.filter(t => !t.completed).length} tasks remaining
      </p>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          placeholder="Add a task..."
          style={{ flex: 1, padding: "8px 12px", borderRadius: 6, border: "1px solid #334155", background: "#1e1e2e", color: "#e2e8f0", outline: "none" }}
        />
        <button onClick={addTask} style={{ padding: "8px 16px", borderRadius: 6, background: "#7c3aed", color: "#fff", border: "none", cursor: "pointer", fontWeight: 600 }}>
          Add
        </button>
      </div>
      <div style={{ display: "flex", gap: 6, marginBottom: 16 }}>
        {["all", "active", "completed"].map((f) => (
          <button key={f} onClick={() => setFilter(f)} style={{ padding: "5px 12px", borderRadius: 6, border: "none", cursor: "pointer", background: filter === f ? "#7c3aed" : "#1e1e2e", color: filter === f ? "#fff" : "#64748b", fontSize: 12, textTransform: "capitalize" }}>
            {f}
          </button>
        ))}
      </div>
      {filtered.map((task, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", background: "#1e1e2e", borderRadius: 6, marginBottom: 8 }}>
          <span style={{ flex: 1, color: "#e2e8f0", textDecoration: task.completed ? "line-through" : "none", opacity: task.completed ? 0.45 : 1, fontSize: 14 }}>
            {task.text}
          </span>
          <button onClick={() => toggle(i)} style={{ padding: "4px 8px", borderRadius: 4, background: task.completed ? "#14532d" : "#1e293b", color: task.completed ? "#86efac" : "#64748b", border: "none", cursor: "pointer" }}>✓</button>
          <button onClick={() => remove(i)} style={{ padding: "4px 8px", borderRadius: 4, background: "#1e1e2e", color: "#f87171", border: "none", cursor: "pointer" }}>✗</button>
        </div>
      ))}
    </div>
  );
}`,
    tests: [
      { id: "pt-1", description: "Should have an input to add tasks", check: (c) => /<input/.test(c) },
      { id: "pt-2", description: "Should use useState for tasks array", check: (c) => /useState\s*\(\s*\[/.test(c) },
      { id: "pt-3", description: "Should render tasks using .map()", check: (c) => /\.map\s*\(/.test(c) },
      { id: "pt-4", description: "Tasks should have 'completed' property", check: (c) => /completed/.test(c) },
      { id: "pt-5", description: "Should be able to toggle task completion", check: (c) => /completed\s*:\s*!/.test(c) },
      { id: "pt-6", description: "Should be able to delete tasks", check: (c) => /\.filter\s*\(/.test(c) },
      { id: "pt-7", description: "Should have All, Active, Completed filters", check: (c) => c.includes("all") && c.includes("active") && c.includes("completed") },
      { id: "pt-8", description: "Should show remaining task count", check: (c) => /\.length/.test(c) },
    ],
    steps: [],
  },
  {
    id: "proj-02",
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    difficulty: "Intermediate",
    description: "Build a weather dashboard that displays mock weather data with search, temperature unit toggle, and a 5-day forecast view.",
    tags: ["Mock Data", "Conditional Rendering", "Toggle", "Mapping"],
    solutionCode: `function App() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("Mumbai");
  const [unit, setUnit] = useState("C");

  const weatherData = {
    Mumbai: { temp: 32, condition: "Sunny", emoji: "☀️", humidity: 70 },
    London: { temp: 15, condition: "Rainy", emoji: "🌧️", humidity: 85 },
    Tokyo: { temp: 22, condition: "Cloudy", emoji: "☁️", humidity: 60 },
  };

  const forecastData = [
    { day: "Mon", high: 33, low: 25, condition: "Sunny", emoji: "☀️" },
    { day: "Tue", high: 34, low: 26, condition: "Sunny", emoji: "☀️" },
    { day: "Wed", high: 31, low: 24, condition: "Cloudy", emoji: "☁️" },
    { day: "Thu", high: 29, low: 23, condition: "Rainy", emoji: "🌧️" },
    { day: "Fri", high: 30, low: 24, condition: "Partly Cloudy", emoji: "⛅" },
  ];

  const convertTemp = (temp) => (unit === "C" ? temp : Math.round((temp * 9) / 5 + 32));

  const handleSearch = () => {
    if (search.trim()) {
      setCity(search.trim());
      setSearch("");
    }
  };

  const current = weatherData[city];

  return (
    <div style={{ fontFamily: "system-ui", padding: 20, maxWidth: 500, background: "#0f172a", color: "#e2e8f0" }}>
      <h1 style={{ marginBottom: 16 }}>Weather Dashboard</h1>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search city (Mumbai, London, Tokyo)..."
          style={{ flex: 1, padding: "8px 12px", borderRadius: 6, border: "1px solid #334155", background: "#1e293b", color: "#fff" }}
        />
        <button onClick={handleSearch} style={{ padding: "8px 16px", borderRadius: 6, background: "#3b82f6", color: "#fff", border: "none", cursor: "pointer" }}>
          Search
        </button>
        <button onClick={() => setUnit(unit === "C" ? "F" : "C")} style={{ padding: "8px 16px", borderRadius: 6, background: "#10b981", color: "#fff", border: "none", cursor: "pointer" }}>
          °{unit}
        </button>
      </div>

      {current ? (
        <div style={{ padding: 20, background: "#1e293b", borderRadius: 8, marginBottom: 20, textAlign: "center" }}>
          <h2>{city} {current.emoji}</h2>
          <p style={{ fontSize: 48, margin: "10px 0", fontWeight: "bold" }}>{convertTemp(current.temp)}°{unit}</p>
          <p style={{ color: "#94a3b8" }}>{current.condition} • Humidity: {current.humidity}%</p>
        </div>
      ) : (
        <p style={{ color: "#f87171", textAlign: "center", padding: 20, background: "#1e293b", borderRadius: 8 }}>City not found</p>
      )}

      <h3 style={{ marginBottom: 12 }}>5-Day Forecast</h3>
      <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 10 }}>
        {forecastData.map((day, i) => (
          <div key={i} style={{ padding: 12, background: i === 0 ? "#3b82f6" : "#1e293b", borderRadius: 8, minWidth: 80, textAlign: "center", flex: 1 }}>
            <p style={{ fontWeight: "bold", margin: "0 0 8px 0" }}>{day.day}</p>
            <p style={{ fontSize: 24, margin: "0 0 8px 0" }}>{day.emoji}</p>
            <p style={{ fontSize: 14, margin: 0 }}>H: {convertTemp(day.high)}°</p>
            <p style={{ fontSize: 14, margin: 0, color: i === 0 ? "#e0e7ff" : "#94a3b8" }}>L: {convertTemp(day.low)}°</p>
          </div>
        ))}
      </div>
    </div>
  );
}`,
    tests: [
      { id: "pw-1", description: "Should have mock weather data with at least 3 cities", check: (c) => (c.match(/temp\s*:/g) || []).length >= 3 },
      { id: "pw-2", description: "Should have a search input", check: (c) => /<input/.test(c) },
      { id: "pw-3", description: "Should display temperature", check: (c) => /convertTemp/.test(c) || /temp/.test(c) },
      { id: "pw-4", description: "Should handle city not found case", check: (c) => /not found/i.test(c) },
      { id: "pw-5", description: "Should have unit state (C or F)", check: (c) => /useState\s*\(\s*["']C["']\s*\)/.test(c) },
      { id: "pw-6", description: "Should convert C to F", check: (c) => (/9\s*\/\s*5/.test(c) || /1\.8/.test(c)) && /\+\s*32/.test(c) },
      { id: "pw-7", description: "Should display the unit symbol", check: (c) => /°/.test(c) },
      { id: "pw-8", description: "Should have 5 days of forecast data", check: (c) => (c.match(/day:\s*["']/g) || []).length >= 5 },
      { id: "pw-9", description: "Each forecast day should have high and low temp", check: (c) => /high/.test(c) && /low/.test(c) },
      { id: "pw-10", description: "Should render forecast using .map()", check: (c) => /\.map\s*\(/.test(c) },
    ],
    steps: [],
  },
  {
    id: "proj-03",
    slug: "markdown-notes",
    title: "Markdown Notes App",
    difficulty: "Advanced",
    description: "Build a notes app with markdown-style text formatting, localStorage persistence, search, and delete functionality.",
    tags: ["localStorage", "String Processing", "Search", "Persistence"],
    solutionCode: `function App() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");

  // Load notes on mount
  useEffect(() => {
    const saved = localStorage.getItem("markdown-notes");
    if (saved) {
      try { setNotes(JSON.parse(saved)); } catch(e) {}
    }
  }, []);

  // Save notes whenever they change
  useEffect(() => {
    localStorage.setItem("markdown-notes", JSON.stringify(notes));
  }, [notes]);

  const parseMarkdown = (text) => {
    let html = text.replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>');
    html = html.replace(/\\*(.*?)\\*/g, '<em>$1</em>');
    return { __html: html };
  };

  const saveNote = () => {
    if (!content.trim()) return;
    const newNote = {
      id: Date.now(),
      content: content.trim(),
      createdAt: new Date().toLocaleDateString()
    };
    setNotes([...notes, newNote]);
    setContent("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  const filteredNotes = notes.filter(n =>
    n.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ fontFamily: "system-ui", padding: 20, maxWidth: 500, margin: "0 auto", background: "#0f172a", color: "#e2e8f0", minHeight: "100vh" }}>
      <h1 style={{ marginBottom: 16 }}>Markdown Notes</h1>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search notes..."
        style={{ width: "100%", padding: 10, borderRadius: 6, marginBottom: 16, background: "#1e293b", color: "#fff", border: "1px solid #334155", boxSizing: "border-box" }}
      />

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Type your note here... use **bold** and *italic*"
        style={{ width: "100%", height: 100, padding: 10, borderRadius: 6, background: "#1e293b", color: "#e2e8f0", border: "1px solid #334155", boxSizing: "border-box", marginBottom: 8, resize: "vertical" }}
      />
      
      <button onClick={saveNote} style={{ padding: "8px 16px", background: "#8b5cf6", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer", marginBottom: 24, fontWeight: "bold", width: "100%" }}>
        Save Note
      </button>

      <div>
        {filteredNotes.length === 0 ? (
          <p style={{ color: "#94a3b8", textAlign: "center", padding: 20 }}>No notes found</p>
        ) : (
          filteredNotes.map(note => (
            <div key={note.id} style={{ background: "#1e293b", padding: 16, borderRadius: 8, marginBottom: 12, position: "relative", border: "1px solid #334155" }}>
              <p style={{ fontSize: 12, color: "#94a3b8", marginBottom: 8, borderBottom: "1px solid #334155", paddingBottom: 4 }}>
                {note.createdAt}
              </p>
              <div 
                style={{ lineHeight: "1.5" }}
                dangerouslySetInnerHTML={parseMarkdown(note.content)} 
              />
              <button onClick={() => deleteNote(note.id)} style={{ position: "absolute", top: 12, right: 12, background: "transparent", color: "#f87171", border: "none", cursor: "pointer", fontSize: 16, padding: 4 }}>
                ✗
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}`,
    tests: [
      { id: "pm-1", description: "Should have a textarea for input", check: (c) => /<textarea/.test(c) },
      { id: "pm-2", description: "Should have a markdown parsing function", check: (c) => /replace\s*\(/.test(c) && /<strong|em>/.test(c) },
      { id: "pm-3", description: "Should handle **bold** markdown", check: (c) => /\*\*/.test(c) },
      { id: "pm-4", description: "Should use dangerouslySetInnerHTML", check: (c) => /dangerouslySetInnerHTML/.test(c) },
      { id: "pm-5", description: "Should use useEffect for loading and saving to localStorage", check: (c) => /useEffect\s*\(/.test(c) && /localStorage/.test(c) },
      { id: "pm-6", description: "Should save and load notes from localStorage", check: (c) => /localStorage\.setItem/.test(c) && /localStorage\.getItem/.test(c) },
      { id: "pm-7", description: "Each note should have id and createdAt", check: (c) => /id:/.test(c) && /createdAt/.test(c) },
      { id: "pm-8", description: "Should have search state", check: (c) => /useState/.test(c) && /search/i.test(c) },
      { id: "pm-9", description: "Should filter notes based on search query", check: (c) => /\.filter\s*\(/.test(c) && /toLowerCase/.test(c) },
      { id: "pm-10", description: "Should have a delete function", check: (c) => /\.filter\s*\(\s*[a-zA-Z0-9_]+\s*=>\s*[a-zA-Z0-9_]+\.id\s*!==/.test(c) },
      { id: "pm-11", description: "Should handle empty search results", check: (c) => /no notes/i.test(c) || /not found/i.test(c) },
    ],
    steps: [],
  }
]