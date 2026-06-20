'use client';

import React, { useState } from 'react';
import { 
  Smartphone, 
  Palette, 
  Map, 
  Database, 
  Camera, 
  PlayCircle, 
  Rocket, 
  ExternalLink,
  Code,
  Cloud,
  Bell,
  ShieldAlert,
  CheckCircle,
  Lock,
  List,
  CheckCircle2 
} from 'lucide-react';

// Structured React Native Data
const reactNativeTopics = [
  { 
    id: "01", 
    title: "Intro & Environment Setup", 
    icon: Smartphone, 
    overview: "Understand the foundational core of React Native, how it works under the hood, and configure a bulletproof development environment for both iOS and Android.",
    learnings: [
      { title: "React Native CLI vs Expo (EAS)", desc: "Deep dive into Managed vs Bare workflows, prebuild mechanisms, and making the right architectural choice." },
      { title: "Environment Setup & Tooling", desc: "Setting up Node, JDK, Android Studio, Xcode, CocoaPods, and environment variables (.env)." },
      { title: "Core Components & Primitives", desc: "Mastering View, Text, Image, ScrollView, TextInput, Pressable, and Touchable components." },
      { title: "Under the Hood: Old vs New Architecture", desc: "Understanding the JavaScript Bridge vs the New Architecture (JSI, Fabric Renderer, TurboModules, and Yoga engine)." }
    ]
  },
  { 
    id: "02", 
    title: "Styling, Layout & Responsive UI", 
    icon: Palette, 
    overview: "Master the art of creating pixel-perfect, adaptive, and highly responsive user interfaces across varying device screen sizes and form factors.",
    learnings: [
      { title: "Flexbox Mastery", desc: "Deep dive into flexDirection, justifyContent, alignItems, flexWrap, and gap properties unique to RN." },
      { title: "StyleSheet API & Optimization", desc: "Creating cached style objects, conditional styling, and combining arrays of styles." },
      { title: "Responsive Layouts & Design Tokens", desc: "Working with Dimensions API, useWindowDimensions, percentage layouts, and aspect ratios." },
      { title: "Safe Areas & Device Notches", desc: "Handling status bars, dynamic dynamic islands, and home indicator spaces using React Native Safe Area Context." },
      { title: "Dark Mode & Theming", desc: "Implementing dynamic appearance switching (Light/Dark mode) and custom design systems." }
    ]
  },
  { 
    id: "03", 
    title: "Advanced Lists & Scroll Performance", 
    icon: List, 
    overview: "Handling infinite datasets smoothly without lagging or memory leaks, a critical skill for real-world production apps.",
    learnings: [
      { title: "FlatList Optimization", desc: "Mastering keyExtractor, initialNumToRender, windowSize, and getItemLayout for 60FPS scrolling." },
      { title: "SectionList & Grid Layouts", desc: "Building categorized lists with sticky headers and complex grid variations." },
      { title: "FlashList (Shopify)", desc: "Migrating from FlatList to FlashList for unmatched cell-recycling performance." },
      { title: "Pull-to-Refresh & Infinite Scroll", desc: "Implementing RefreshControl and onEndReached thresholds for pagination." }
    ]
  },
  { 
    id: "04", 
    title: "Routing & Navigation Deep Dive", 
    icon: Map, 
    overview: "Implement bulletproof navigation patterns, handling deep links, authentication flows, and seamless transitions.",
    learnings: [
      { title: "React Navigation / Expo Router", desc: "File-based routing vs Component-based routing paradigms." },
      { title: "Native Stack, Tab & Drawer Navigators", desc: "Nesting navigators, configuring headers, and building modern app structures." },
      { title: "Dynamic Routing & Auth Flows", desc: "Conditional navigation rendering based on user authentication state." },
      { title: "Passing Params & Type Safety", desc: "Sending route parameters and strictly typing routes with TypeScript." },
      { title: "Deep Linking & Universal Links", desc: "Configuring scheme/domain links to open specific in-app screens from outside." }
    ]
  },
  { 
    id: "05", 
    title: "State Management & Local Persistence", 
    icon: Database, 
    overview: "Architect clean data layers, handle global state across deep hierarchies, and store sensitive data locally.",
    learnings: [
      { title: "Local Context API vs Signals", desc: "When to use React Context and its performance impacts on mobile." },
      { title: "Zustand & Redux Toolkit", desc: "Setting up modern, lightweight state machines or heavy global stores." },
      { title: "MMKV vs AsyncStorage", desc: "Replacing slow, async storage with ultra-fast, synchronous C++ powered MMKV." },
      { title: "Secure Storage", desc: "Storing sensitive authentication tokens using iOS Keychain and Android Keystore." }
    ]
  },
  { 
    id: "06", 
    title: "Data Fetching, Caching & Networking", 
    icon: Cloud, 
    overview: "Communicate with REST and GraphQL APIs efficiently, handle offline states, and keep UI optimistic.",
    learnings: [
      { title: "Axios / Fetch Integration", desc: "Setting up global interceptors, custom headers, and timeout configurations." },
      { title: "TanStack Query (React Query)", desc: "Handling server-state, automatic caching, background fetching, and polling." },
      { title: "Offline Support & Synchronization", desc: "Detecting network status (NetInfo) and queuing mutations for offline sync." },
      { title: "File Uploads & Multi-part Forms", desc: "Uploading images/videos with progress bars to cloud buckets." }
    ]
  },
  { 
    id: "07", 
    title: "Device Hardware & Native APIs", 
    icon: Camera, 
    overview: "Bridge the gap between JavaScript and native mobile hardware to build a true smartphone experience.",
    learnings: [
      { title: "Camera & Media Library", desc: "Taking high-res photos, recording videos, and scanning barcodes safely with permissions." },
      { title: "Biometrics Authentication", desc: "Integrating FaceID and TouchID/Fingerprint scanners into the app login workflow." },
      { title: "Location & Background Geolocation", desc: "Fetching precise GPS coordinates, tracking users in real-time, and background tracking." },
      { title: "Sensors & Haptics", desc: "Using Accelerometer, Gyroscope, and triggering immersive Taptic feedback/Vibrations." }
    ]
  },
  { 
    id: "08", 
    title: "Push Notifications & Deep Engagement", 
    icon: Bell, 
    overview: "Keep your users hooked by mastering the complex pipeline of local and remote notifications.",
    learnings: [
      { title: "Local Notifications", desc: "Scheduling instant or time-interval based reminders directly from the device." },
      { title: "FCM (Firebase Cloud Messaging) & APNS", desc: "Configuring Apple Push Notification service and Google Firebase certificates." },
      { title: "Background Notification Handlers", desc: "Intercepting and processing data payloads even when the app is killed or closed." }
    ]
  },
  { 
    id: "09", 
    title: "High-Performance Animations & Gestures", 
    icon: PlayCircle, 
    overview: "Craft rich, fluid, fluid interactive micro-interactions that run smoothly on UI thread at native speeds.",
    learnings: [
      { title: "Reanimated 3 Basics to Advanced", desc: "Shared Values, useAnimatedStyle, useDerivedValue, and interpolations." },
      { title: "Gesture Handler 2 Integration", desc: "Fling, Pan, Pinch, Tap, and Long Press gestures running completely off the JS thread." },
      { title: "Layout Animations", desc: "Smooth item entry, exit, and layout transitions inside lists automatically." },
      { title: "Lottie & Skia in React Native", desc: "Rendering rich vector animations and high-performance 2D canvas graphics (Shopify Skia)." }
    ]
  },
  { 
    id: "10", 
    title: "Debugging, Performance & Profiling", 
    icon: ShieldAlert, 
    overview: "Identify memory leaks, diagnose drops in Frame Rate (FPS), and fix bugs like a senior engineer.",
    learnings: [
      { title: "Modern Debugging Tools", desc: "Using React Native DevTools, Chrome Debugger, and Expo Orbit." },
      { title: "Reactotron & Network Inspection", desc: "Tracking API logs, state changes, and async storage directly from a desktop app." },
      { title: "Performance Profiling", desc: "Using the Performance Monitor, Hermit Engine memory profiling, and detecting JS bottlenecks." },
      { title: "Error Boundary & Crashlytics", desc: "Catching JS errors gracefully and setting up automated crash reporting with Firebase Sentry." }
    ]
  },
  { 
    id: "11", 
    title: "Testing Mobile Applications", 
    icon: CheckCircle, 
    overview: "Ensure code reliability and protect your app from breaking during updates with rigorous testing.",
    learnings: [
      { title: "Unit Testing with Jest", desc: "Testing utility functions, pure logic, and standard React hooks." },
      { title: "Component Testing", desc: "Using React Native Testing Library (RNTL) to fire events and snapshot components." },
      { title: "E2E Testing with Detox", desc: "Writing automated user-flow tests that run inside real simulators/emulators." }
    ]
  },
  { 
    id: "12", 
    title: "Native Modules & Bridges (Advanced)", 
    icon: Code, 
    overview: "Step out of JavaScript when necessary and write custom iOS/Android code using Swift, Objective-C, Java, or Kotlin.",
    learnings: [
      { title: "Custom TurboModules", desc: "Writing ultra-fast native modules using the modern JSI architecture." },
      { title: "Expo Config Plugins", desc: "Writing custom code modification scripts to alter Info.plist and build.gradle files safely." },
      { title: "Integrating Native SDKs", desc: "How to manually link a third-party SDK that doesn't have an official React Native wrapper." }
    ]
  },
  { 
    id: "13", 
    title: "App Security & Hardening", 
    icon: Lock, 
    overview: "Protect your application intellectual property and user data from reverse-engineering and bad actors.",
    learnings: [
      { title: "SSL Pinning", desc: "Preventing Man-In-The-Middle (MITM) network attacks by locking public keys." },
      { title: "Code Obfuscation (ProGuard)", desc: "Encrypting and muddying Android compiled bytecode to stop de-compilers." },
      { title: "Handling Secrets Safely", desc: "Preventing hardcoded API keys from leaking into the final .apk or .ipa binary bundles." }
    ]
  },
  { 
    id: "14", 
    title: "EAS, Publishing & DevOps Production", 
    icon: Rocket, 
    overview: "Automate builds, handle app certifications, push updates instantly without app store reviews, and launch successfully.",
    learnings: [
      { title: "EAS Build & Credentials Management", desc: "Managing Android Keystores, iOS Provisioning Profiles, and P12 Certificates via cloud." },
      { title: "Over-The-Air (OTA) Updates", desc: "Using EAS Update to push instant bug fixes directly to user devices without App Store approval." },
      { title: "App Store Connect Submission", desc: "Setting up TestFlight, filling out privacy policies, and submitting for review." },
      { title: "Google Play Console Rollout", desc: "Internal/Beta testing tracks, App Bundles (.aab format), and Production deployment." }
    ]
  }
];

export default function LearningPathSection() {
  // State to manage which topic is currently selected
  const [activeTopicId, setActiveTopicId] = useState(reactNativeTopics[0].id);

  // Find the full details of the active topic
  const activeTopic = reactNativeTopics.find(topic => topic.id === activeTopicId);

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
                React Native
              </span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg mb-8 max-w-md leading-relaxed">
              Complete roadmap to build cross-platform mobile apps for iOS and Android.
            </p>
          </div>

          {/* Scrollable Steps List */}
          <nav aria-label="Learning path steps" className="flex-1 overflow-hidden relative mb-8">
            {/* Added custom scrollbar styling via tailwind arbitrary values */}
            <ul className="space-y-2.5 h-full overflow-y-auto pr-2 pb-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-zinc-800 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
              {reactNativeTopics.map((step) => {
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