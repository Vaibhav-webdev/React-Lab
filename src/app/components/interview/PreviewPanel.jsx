"use client";

import { useMemo } from "react";

// ── Iframe base styles ─────────────────────────────────────────────────────────
const IFRAME_STYLES = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #0d0d0d;
    color: #e2e8f0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    padding: 20px;
    min-height: 100vh;
  }
  .error-box {
    color: #f87171;
    background: rgba(239,68,68,0.10);
    border: 1px solid rgba(239,68,68,0.35);
    border-radius: 8px;
    padding: 16px;
    font-size: 12px;
    font-family: monospace;
    white-space: pre-wrap;
    word-break: break-word;
    line-height: 1.6;
  }
  .idle-msg {
    color: #334155;
    text-align: center;
    margin-top: 60px;
    font-family: monospace;
    font-size: 12px;
    line-height: 2;
  }
`;

/**
 * Strips Next.js / module-specific syntax so raw JSX can execute in a
 * vanilla Babel + React CDN iframe environment.
 */
function cleanCode(raw) {
  if (!raw || !raw.trim()) return "";
  let c = raw;

  // 1. Remove `import ... from '...'`
  c = c.replace(/import\s+[\s\S]*?from\s*['"`][^'"`]*['"`]\s*;?\n?/gi, "");
  
  // 2. Remove bare side-effect imports
  c = c.replace(/import\s*['"`][^'"`]*['"`]\s*;?\n?/gi, "");
  
  // 3. Remove `export default`
  c = c.replace(/export\s+default\s+/g, "");
  
  // 4. Remove named exports from line starts
  c = c.replace(/^\s*export\s+(?!default)/gm, "");
  
  return c.trim();
}

/**
 * Builds a complete self-contained HTML document
 */
function buildSrcdoc(rawCode) {
  const cleaned = cleanCode(rawCode);
  const safe = cleaned.replace(/<\/script>/gi, "<\\/script>");

  // FIX: Removed backslashes from ${IFRAME_STYLES} and ${safe} below
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>${IFRAME_STYLES}</style>
</head>
<body>
  <div id="root">
    <p class="idle-msg">⏳ Click <b>Check</b> to compile &amp; preview your code.</p>
  </div>

  <script id="jsx-src" type="text/plain">${safe}</script>

  <script>
    window.addEventListener('DOMContentLoaded', function () {
      var rootEl  = document.getElementById('root');
      var rawCode = document.getElementById('jsx-src').textContent.trim();

      if (!rawCode) return;

      try {
        // Forcing Babel to use 'classic' runtime to prevent injected imports
        var transpiled = Babel.transform(rawCode, {
          presets: [
            ['react', { runtime: 'classic' }]
          ],
          filename: 'component.jsx',
        }).code;

        // Execute in a sandboxed scope
        var runner = new Function(
          'React',
          'ReactDOM',
          [
            'const {',
            '  useState, useEffect, useReducer, useRef, useMemo,',
            '  useCallback, useContext, createContext, useId, useTransition,',
            '  useLayoutEffect, useImperativeHandle, forwardRef,',
            '} = React;',
            '',
            transpiled,
            '',
            'if (typeof Home      !== "undefined") return Home;',
            'if (typeof Page      !== "undefined") return Page;',
            'if (typeof App       !== "undefined") return App;',
            'if (typeof Component !== "undefined") return Component;',
            'if (typeof Counter   !== "undefined") return Counter;',
            'if (typeof Timer     !== "undefined") return Timer;',
            'if (typeof TodoApp   !== "undefined") return TodoApp;',
            'if (typeof TodoList  !== "undefined") return TodoList;',
            'if (typeof Form      !== "undefined") return Form;',
            'if (typeof Card      !== "undefined") return Card;',
            'if (typeof Modal     !== "undefined") return Modal;',
            'if (typeof Navbar    !== "undefined") return Navbar;',
            'if (typeof Dashboard !== "undefined") return Dashboard;',
            'if (typeof Profile   !== "undefined") return Profile;',
            'if (typeof Layout    !== "undefined") return Layout;',
            '',
            'return null;',
          ].join('\\n')
        );

        var Comp = runner(React, ReactDOM);

        // Render
        if (Comp) {
          var root = ReactDOM.createRoot(rootEl);
          root.render(React.createElement(Comp));
        } else {
          rootEl.innerHTML =
            '<div class="error-box"><b>⚠ No renderable component found</b>\\n\\n' +
            'Component function ka naam Home, Page, App, ya Component hona chahiye.\\n' +
            '"export default function Home() {...}" pattern use karo.</div>';
        }

      } catch (err) {
        rootEl.innerHTML =
          '<div class="error-box"><b>🐛 Compilation / Runtime Error:</b>\\n\\n' +
          String(err.message || err) + '</div>';
      }
    });
  </script>
</body>
</html>`;
}

// ── PreviewPanel Component ─────────────────────────────────────────────────────
export default function PreviewPanel({ code, refreshKey }) {
  // Rebuild the srcdoc dynamically when editor code changes

  const srcdoc = useMemo(() => buildSrcdoc(code ?? ""), [code]);

  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      <iframe
        key={refreshKey}
        srcDoc={srcdoc}
        sandbox="allow-scripts allow-same-origin"
        title="Component Preview"
        className="w-full h-full border-0"
        style={{ background: "#000" }}
      />
    </div>
  );
}