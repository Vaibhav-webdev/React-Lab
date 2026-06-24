"use client";

import { useState, useEffect, useRef } from "react";
import { RefreshCw } from "lucide-react";

const IFRAME_STYLES = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #000000;
    color: #e2e8f0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    padding: 20px;
  }
  .error-box {
    color: #f87171;
    background: rgba(239, 68, 68, 0.15);
    border: 1px solid rgba(239, 68, 68, 0.4);
    border-radius: 8px;
    padding: 16px;
    font-size: 13px;
    font-family: monospace;
    white-space: pre-wrap;
  }
`;

// 100% Safe Next.js Page hardcoded example
const HARDCODED_EXAMPLE = `
import React, { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 max-w-sm mx-auto bg-gray-900 rounded-xl shadow-md space-y-4 border border-gray-800 text-center">
      <h1 className="text-2xl font-bold text-white">It is working! 🔥</h1>
      <p className="text-gray-400 text-sm">
        Agar ye UI dikh gaya, matlab Next.js ka manual compiler successfully set ho chuka hai.
      </p>
      
      <div className="text-xl font-mono text-purple-400">
        Counter: {count}
      </div>
      
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow transition"
      >
        Increment +1
      </button>
    </div>
  );
}
`;

function cleanCode(code) {
  let c = code.replace(/import\s+[\s\S]*?from\s+['"].*?['"];?/gi, "");
  c = c.replace(/import\s+['"].*?['"];?/gi, "");
  c = c.replace(/export\s+default\s+/gi, "");
  c = c.replace(/export\s+/gi, "");
  return c.trim();
}

function buildSrcdoc(rawCode) {
  const safeJsx = cleanCode(rawCode).replace(/<\/script>/gi, "<\\/script>");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>${IFRAME_STYLES}</style>
</head>
<body>
  <div id="root">
    <!-- Jab tak CDNs load honge, user ko black screen pe ye dikhega -->
    <div style="color: #444; text-align: center; margin-top: 40px; font-family: monospace;">Loading React Engine...</div>
  </div>

  <!-- Raw JSX ko ek safe text container me daal diya -->
  <script id="jsx-template" type="text/plain">
${safeJsx}
  </script>

  <script>
    window.addEventListener('DOMContentLoaded', () => {
      const rootEl = document.getElementById('root');
      const rawCode = document.getElementById('jsx-template').textContent;

      try {
        // 1. Explicit Babel Compilation (Agar syntax me galti hui to yahi catch ho jayega)
        const transpiled = Babel.transform(rawCode, { presets: ['react'] }).code;

        // 2. Safe execution scope build kiya
        const runner = new Function('React', 'ReactDOM', \`
          const { useState, useEffect, useReducer, useRef, useMemo, useCallback } = React;
          \${transpiled}
          if (typeof Home !== 'undefined') return Home;
          if (typeof Page !== 'undefined') return Page;
          if (typeof App !== 'undefined') return App;
          return null;
        \`);

        const ComponentToRender = runner(React, ReactDOM);

        if (ComponentToRender) {
          const root = ReactDOM.createRoot(rootEl);
          root.render(React.createElement(ComponentToRender));
        } else {
          rootEl.innerHTML = '<div class="error-box"><b>Error:</b> Koi renderable component nahi mila. Function ka naam Home, Page ya App hona chahiye.</div>';
        }

      } catch (err) {
        // AB KABHI BHI SCREEN BLANK NAHI HOGI! Babel ka har error yahan UI pe dikhega
        rootEl.innerHTML = '<div class="error-box"><b>Syntax / Babel Error:</b><br/>' + err.message + '</div>';
      }
    });
  </script>
</body>
</html>`;
}

export default function PreviewPanel() {
  const [srcdoc, setSrcdoc] = useState(() => buildSrcdoc(HARDCODED_EXAMPLE));
  const [isRefreshing, setIsRefreshing] = useState(false);

  return (
    <div className="relative w-full h-full bg-black">
      {isRefreshing && (
        <div className="absolute top-2 right-2 z-10">
          <RefreshCw size={12} className="text-purple-400 animate-spin" />
        </div>
      )}

      <iframe
        key={srcdoc}
        srcDoc={srcdoc}
        /* EK BOHOT BADA FIX: allow-same-origin add kiya taaki DOM .textContent read kar paye */
        sandbox="allow-scripts allow-same-origin"
        title="Component Preview"
        className="w-full h-full border-0 bg-black"
      />
    </div>
  );
}