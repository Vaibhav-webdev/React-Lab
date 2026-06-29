"use client";

import { useRef, useEffect, useState, useCallback } from "react";

const SANDBOX_HTML = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="https://cdn.tailwindcss.com"><\/script>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #0f0f1a;
    color: #e2e8f0;
    padding: 0;
    overflow: auto;
  }
  #root {
    min-height: 100vh;
  }
  .error-boundary {
    padding: 16px;
    background: rgba(239, 68, 68, 0.1);
    border: 1px solid rgba(239, 68, 68, 0.3);
    border-radius: 8px;
    color: #fca5a5;
    font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;
    font-size: 13px;
    white-space: pre-wrap;
    word-break: break-word;
  }
</style>
<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin><\/script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin><\/script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    const { useState, useEffect, useRef, useCallback, useMemo } = React;
    if (typeof Image === "undefined") {
  var Image = function Image(props) {
    const { src, alt, width, height, ...rest } = props;
    return React.createElement("img", { src, alt, width, height, style: { maxWidth: "100%", height: "auto" }, ...rest });
  };
}
    try {
      __USER_CODE__
      
      if (typeof App !== "undefined") {
        ReactDOM.createRoot(document.getElementById("root")).render(
          React.createElement(App)
        );
      } else {
        ReactDOM.createRoot(document.getElementById('root')).render(
          React.createElement('div', { 
            className: 'error-boundary' 
          }, 
            'Error: No "App" component found. Please define a function called "App".'
          )
        );
      }
    } catch (error) {
      ReactDOM.createRoot(document.getElementById('root')).render(
        React.createElement('div', { 
          className: 'error-boundary' 
        }, 
          'Error: ' + error.message + '\\n\\n' + (error.stack || '')
        )
      );
    }
  <\/script>
</body>
</html>
`;

export default function PreviewPanel({ code, refreshKey }) {
  const iframeRef = useRef(null);
  const [error, setError] = useState(null);
  const blobUrlRef = useRef(null);

  const updatePreview = useCallback(() => {
    if (!iframeRef.current) return;

    try {
      // Validate code
      if (typeof code !== "string" || code.trim().length === 0) {
        setError(null);
        return;
      }

      // Sanitize - prevent script injection issues
      const sanitizedCode = code.replace(/<\/script>/gi, "<\\/script>");

      const htmlContent = SANDBOX_HTML.replace("__USER_CODE__", sanitizedCode);
      const blob = new Blob([htmlContent], { type: "text/html" });
      const url = URL.createObjectURL(blob);

      // Clean up previous URL
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
      }
      blobUrlRef.current = url;

      iframeRef.current.src = url;
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  }, [code]);

  useEffect(() => {
    // Small delay to ensure iframe is ready
    const timer = setTimeout(() => {
      updatePreview();
    }, 50);

    // Cleanup blob URL on unmount
    return () => {
      clearTimeout(timer);
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
        blobUrlRef.current = null;
      }
    };
  }, [updatePreview, refreshKey]);

  if (error) {
    return (
      <div className="flex items-center justify-center h-full bg-[#0a0a1a] p-4">
        <div className="max-w-md text-center">
          <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-3">
            <span className="text-red-400 text-xl">✕</span>
          </div>
          <p className="text-red-400 text-sm font-medium mb-1">Preview Error</p>
          <p className="text-slate-500 text-xs">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full bg-[#0a0a1a] relative">
      {!code && (
        <div className="absolute inset-0 flex items-center justify-center text-slate-600 text-xs z-10">
          Write code and run tests to see preview
        </div>
      )}
      <iframe
        ref={iframeRef}
        title="Code Preview"
        className="w-full h-full border-0"
        sandbox="allow-scripts"
        loading="lazy"
      />
    </div>
  );
}