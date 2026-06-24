'use client';

import React, { useState } from 'react';
import { 
  Database,
  Layout,
  Compass,
  Cpu,
  RefreshCw,
  Gauge,
  Globe,
  AlertTriangle,
  Zap,
  Network,
  Rocket, 
  Shield,
  Code,
  CheckCircle2 
} from 'lucide-react';

// Structured React Native Data
const nextJsTopics = [
  { 
    id: "01", 
    title: "Intro & Project Architecture", 
    icon: Layout, 
    overview: "Understand the foundational architecture of Next.js, how full-stack React framework operates under the hood, and initialize a production-grade workspace.",
    learnings: [
      { title: "App Router vs Pages Router", desc: "Deep dive into the modern file-based routing mechanism, structural differences, and migration strategies." },
      { title: "Environment Setup & Monorepos", desc: "Configuring Node.js, Package Managers (pnpm/bun), TypeScript, ESLint, Prettier, and turborepo setups." },
      { title: "Next.js Boilerplate Primitives", desc: "Mastering layout.js, page.js, loading.js, error.js, and not-found.js special files." },
      { title: "Under the Hood: Next.js Compiler", desc: "Understanding SWC (Rust-based compiler), Turbopack, and how compilation differs in development vs production." }
    ]
  },
  { 
    id: "02", 
    title: "Routing & Navigation Deep Dive", 
    icon: Compass, 
    overview: "Master complex layout patterns, dynamic navigation pipelines, and advanced routing architectures tailored for modern web apps.",
    learnings: [
      { title: "Dynamic & Catch-all Routes", desc: "Implementing slug-based routing, optional catch-all parameters, and generating static paths." },
      { title: "Route Groups & Parallel Routes", desc: "Organizing code cleanly without affecting URL structures, and building simultaneous multi-view dashboards." },
      { title: "Intercepting Routes (Modals)", desc: "Creating rich, shareable URLs for overlays and modals that load seamlessly in-context." },
      { title: "Link Component & Programmatic Routing", desc: "Optimizing Client-side navigation using next/link, useRouter hook, and prefetching behaviors." }
    ]
  },
  { 
    id: "03", 
    title: "Server Components & Rendering Strategies", 
    icon: Cpu, 
    overview: "Architect ultra-fast web pages by leveraging Next.js rendering runtimes to optimize user experience and SEO.",
    learnings: [
      { title: "React Server Components (RSC)", desc: "Understanding the paradigm shift: Server Components vs Client Components ('use client') and boundaries." },
      { title: "SSR vs SSG vs ISR", desc: "Configuring Server-Side Rendering, Static Site Generation, and Incremental Static Regeneration at scale." },
      { title: "Partial Prerendering (PPR)", desc: "Combining static shells with dynamic server-rendered holes for instant initial page loads." },
      { title: "Edge vs Node.js Runtimes", desc: "Choosing between heavy global server runtimes and lightweight, ultra-fast distributed Edge execution." }
    ]
  },
  { 
    id: "04", 
    title: "Data Fetching, Caching & Revalidation", 
    icon: RefreshCw, 
    overview: "Build highly optimized data synchronization layers, mastering the granular and aggressive caching mechanics of Next.js.",
    learnings: [
      { title: "Server-side Fetching Mechanics", desc: "Fetching async data directly inside Server Components safely without exposing private tokens." },
      { title: "Next.js Cache Extended API", desc: "Mastering request memoization, Data Cache, Full Route Cache, and Router Cache." },
      { title: "Time-based & On-demand Revalidation", desc: "Using revalidatePath and revalidateTag to purge stale data instantly across edge networks." },
      { title: "TanStack Query with RSC", desc: "Integrating React Query for robust client-side state fetching alongside initial server hydration." }
    ]
  },
  { 
    id: "05", 
    title: "Server Actions & Mutation Layer", 
    icon: Zap, 
    overview: "Eliminate API boilerplate code by mutating server data securely and directly from user-facing React components.",
    learnings: [
      { title: "Server Actions Foundations", desc: "Defining asynchronous server functions, secure execution endpoints, and form action attributes." },
      { title: "Form Validation & Error States", desc: "Integrating Zod validations with action pipelines and handling states gracefully with useActionState." },
      { title: "Optimistic UI Updates", desc: "Using the useOptimistic hook to update UI instantly before server confirmation completes." },
      { title: "Progressive Enhancement", desc: "Ensuring web application functionalities work reliably even when JavaScript is disabled or slow." }
    ]
  },
  { 
    id: "06", 
    title: "API Routes & Middleware Layer", 
    icon: Network, 
    overview: "Build powerful backend architectures, webhooks, and request filtration policies natively within your application structure.",
    learnings: [
      { title: "Route Handlers (REST APIs)", desc: "Writing custom GET, POST, PUT, DELETE endpoints with NextResponse primitives." },
      { title: "Advanced Next.js Middleware", desc: "Interacting with incoming requests to handle geo-routing, header mutations, and sub-domain redirects." },
      { title: "Streaming & Server-Sent Events", desc: "Leveraging NDJSON and readable streams to pipe large AI payloads or live data feeds seamlessly." }
    ]
  },
  { 
    id: "07", 
    title: "Database Integration & Full-Stack Core", 
    icon: Database, 
    overview: "Connect server runtimes safely to relational and non-relational database architectures with efficient connection pooling.",
    learnings: [
      { title: "ORMs: Prisma & Drizzle", desc: "Defining type-safe schemas, managing migrations, and executing clean server queries." },
      { title: "Connection Pooling in Serverless", desc: "Preventing serverless connection exhaustion via tools like Prisma Accelerate or Neon serverless driver." },
      { title: "Transactions & Security Gates", desc: "Handling complex atomic transactions and setting up robust row-level security parameters." }
    ]
  },
  { 
    id: "08", 
    title: "Authentication & Authorization Security", 
    icon: Shield, 
    overview: "Protect private layouts, configure multi-tenant rollouts, and authenticate users via industry-standard protocols.",
    learnings: [
      { title: "Auth.js (NextAuth) Integration", desc: "Implementing session providers, JWT vs database strategies, and custom login portals." },
      { title: "B2C Identity Providers (Clerk/Kinde)", desc: "Setting up drop-in multi-tenant user authentication, webhooks, and profile structures." },
      { title: "Role-Based Access Control (RBAC)", desc: "Securing layouts, API endpoints, and individual actions based on organizational permissions." }
    ]
  },
  { 
    id: "09", 
    title: "State Management & Server Hydration", 
    icon: Code, 
    overview: "Coordinate state across server-to-client handoffs smoothly without structural UI flickering or hydration mismatch bugs.",
    learnings: [
      { title: "Server-to-Client State Handoff", desc: "Passing heavy configuration data or pre-fetched arrays safely via serializable props." },
      { title: "Zustand & Redux in Full-Stack", desc: "Creating unique state stores per request to avoid multi-user state leakage on Node servers." },
      { title: "URL Context State", desc: "Utilizing searchParams and query coordinates as the single source of truth for global dashboard search/filters." }
    ]
  },
  { 
    id: "10", 
    title: "Performance Optimization & Core Web Vitals", 
    icon: Gauge, 
    overview: "Optimize images, font bundles, script loading sequences, and cumulative layouts to achieve a perfect 100 Lighthouse score.",
    learnings: [
      { title: "Next.js Image Mastery", desc: "Configuring sizes, lazy loading, blur placeholders, and responsive automatic webp conversions." },
      { title: "Font & Script Optimization", desc: "Zero layout shift web font self-hosting with next/font and deferred strategy loading via next/script." },
      { title: "Bundle Analysis & Dynamic Imports", desc: "Using @next/bundle-analyzer and lazy loading heavy components via next/dynamic to trim JS sizes." }
    ]
  },
  { 
    id: "11", 
    title: "SEO, Meta Tags & Open Graph", 
    icon: Globe, 
    overview: "Command search engine rankings with dynamic multi-lingual metadata, programmatically generated maps, and structured rich snippets.",
    learnings: [
      { title: "Metadata API (Static & Dynamic)", desc: "Exporting viewport structures, canonical tags, and generating custom dynamic values via generateMetadata." },
      { title: "Automated Sitemaps & Robots", desc: "Generating runtime-driven sitemap.xml and robots.txt configurations linked to database models." },
      { title: "Dynamic Open Graph Images", desc: "Utilizing @vercel/og to programmatically generate custom, asset-rich social share graphics at runtime." }
    ]
  },
  { 
    id: "12", 
    title: "Comprehensive Testing Suites", 
    icon: CheckCircle2, 
    overview: "Set up bulletproof assertions from individual component structures up to complete end-to-end user navigation checkout tunnels.",
    learnings: [
      { title: "Unit Testing with Vitest / Jest", desc: "Testing pure functional handlers, utility configurations, and headless hooks configurations." },
      { title: "Component Testing with RTL", desc: "Mocking next/navigation dependencies and checking Server/Client component interface outputs." },
      { title: "E2E Testing with Playwright", desc: "Simulating authentic database-connected workflows on headless browsers to secure critical checkouts." }
    ]
  },
  { 
    id: "13", 
    title: "Monitoring, Diagnostics & Security Gates", 
    icon: AlertTriangle, 
    overview: "Track telemetry logs, intercept edge-case exceptions, and safeguard applications against web-level exploit patterns.",
    learnings: [
      { title: "Error Boundaries & Fallbacks", desc: "Designing elegant recovery flows with local error.js files and global exception catching triggers." },
      { title: "Full-Stack Error Logging (Sentry)", desc: "Capturing edge runtime runtime breakdowns and tracking source map code locations immediately." },
      { title: "Security Protocols (XSS / CSRF)", desc: "Injecting Content Security Policies (CSP), sanitizing HTML strings, and configuring rigid CORS parameters." }
    ]
  },
  { 
    id: "14", 
    title: "CI/CD, Deployment & Infrastructure Ops", 
    icon: Rocket, 
    overview: "Deploy projects globally with automated pipeline configurations, scalable container designs, or standard cloud native clusters.",
    learnings: [
      { title: "Vercel Platform Deployment", desc: "Managing Preview Deployments, instant build rollbacks, edge configurations, and skew protections." },
      { title: "Dockerizing Next.js Application", desc: "Configuring multi-stage Dockerfiles utilizing standalone build outputs to compress image footprints." },
      { title: "Self-Hosting and Static Exports", desc: "Hosting production-ready Next.js nodes on AWS/VPS or executing next export for pure static CDNs." }
    ]
  }
];

export default function LearningPathSection() {
  // State to manage which topic is currently selected
  const [activeTopicId, setActiveTopicId] = useState(nextJsTopics[0].id);

  // Find the full details of the active topic
  const activeTopic = nextJsTopics.find(topic => topic.id === activeTopicId);

  return (
    <section id='roadmap' className="w-full bg-[#060608] py-20 px-4 sm:px-6 lg:px-8 flex justify-center">
      {/* Main Container */}
      <div className="w-full max-w-6xl bg-[#121214] border border-white/[0.04] rounded-3xl p-6 sm:p-10 lg:p-14 flex flex-col lg:flex-row gap-12 lg:gap-16 backdrop-blur-md">
        
        {/* Left Column: Learning Path Info & Scrollable List */}
        <div className="flex-1 flex flex-col h-full lg:max-h-[600px]">
          <div>
            <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase block mb-3">
              Learning Path
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 tracking-tight">
              Master <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                NextJS
              </span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg mb-8 max-w-md leading-relaxed">
              Complete roadmap to build full-stack web applications for Desktop and Mobile browsers.
            </p>
          </div>

          {/* Scrollable Steps List */}
          <nav aria-label="Learning path steps" className="flex-1 overflow-hidden relative mb-8">
            {/* Added custom scrollbar styling via tailwind arbitrary values */}
            <ul className="space-y-2.5 h-full overflow-y-auto pr-2 pb-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-zinc-800 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
              {nextJsTopics.map((step) => {
                const Icon = step.icon;
                const isActive = step.id === activeTopicId;
                
                return (
                  <li 
                    key={step.id}
                    onClick={() => setActiveTopicId(step.id)}
                    className={`flex items-center gap-4 px-4 py-3.5 rounded-xl font-medium text-sm sm:text-base transition-all duration-200 cursor-pointer ${
                      isActive 
                        ? "bg-purple-500/10 border border-purple-500/20 text-purple-300" 
                        : "text-zinc-400 hover:bg-white/[0.03] hover:text-zinc-200 border border-transparent"
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${isActive ? 'bg-purple-500/20' : 'bg-white/[0.03]'}`}>
                      <Icon size={18} className={isActive ? "text-purple-400" : "text-zinc-500"} />
                    </div>
                    <span>{step.id}. {step.title}</span>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Right Column: Dynamic Overview Section */}
        <div className="flex-1 w-full flex flex-col justify-start lg:max-h-[600px]">
          
          {/* Active Topic Header Info */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-purple-400 font-black text-2xl">
                {activeTopic.id}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {activeTopic.title}
              </h3>
            </div>
            <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
              {activeTopic.overview}
            </p>
          </div>

          <div className="text-xs font-bold tracking-widest text-zinc-500 uppercase block mb-4">
            What you will learn
          </div>
          
          {/* Detailed Subtopics (Reusing your card design) */}
          <div className="space-y-3 overflow-y-auto pr-2 pb-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-zinc-800 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
            {activeTopic.learnings.map((learning, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-4 border border-white/[0.03] bg-[#18181b]/60 hover:bg-[#18181b]/90 hover:border-white/[0.08] shadow-sm rounded-2xl p-5 transition-all duration-300"
              >
                <div className="mt-0.5">
                  <CheckCircle2 size={20} className="text-purple-500" />
                </div>
                
                <div className="flex-1">
                  <h4 className="font-bold text-base text-white mb-1">
                    {learning.title}
                  </h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {learning.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
        
      </div>
    </section>
  );
}