"use client";

import dynamic from "next/dynamic";

// Monaco must never run on the server
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full bg-black">
      <div className="flex flex-col items-center gap-3">
        <div className="w-5 h-5 border-2 border-purple-500/40 border-t-purple-500 rounded-full animate-spin" />
        <span className="text-slate-500 text-xs">Loading editor…</span>
      </div>
    </div>
  ),
});

const MONACO_THEME = {
  base: "vs-dark",
  inherit: true,
  rules: [
    { token: "keyword", foreground: "a78bfa", fontStyle: "bold" },
    { token: "string", foreground: "86efac" },
    { token: "string.js", foreground: "86efac" },
    { token: "number", foreground: "fbbf24" },
    { token: "comment", foreground: "475569", fontStyle: "italic" },
    { token: "type", foreground: "93c5fd" },
    { token: "identifier", foreground: "e2e8f0" },
    { token: "delimiter", foreground: "64748b" },
    { token: "tag", foreground: "f472b6" },
    { token: "attribute.name", foreground: "93c5fd" },
    { token: "attribute.value", foreground: "86efac" },
  ],
  colors: {
    "editor.background": "#0d0d0d",
    "editor.foreground": "#e2e8f0",
    "editor.lineHighlightBackground": "#1a1a1a",
    "editor.selectionBackground": "#7c3aed40",
    "editor.inactiveSelectionBackground": "#7c3aed20",
    "editorCursor.foreground": "#a78bfa",
    "editorLineNumber.foreground": "#334155",
    "editorLineNumber.activeForeground": "#7c3aed",
    "editorIndentGuide.background": "#121212",
    "editorIndentGuide.activeBackground": "#7c3aed40",
    "editorWidget.background": "#0a0a0a",
    "editorSuggestWidget.background": "#0a0a0a",
    "editorSuggestWidget.border": "#2d2d6a",
    "editorSuggestWidget.selectedBackground": "#7c3aed30",
    "scrollbarSlider.background": "#334155",
    "scrollbarSlider.hoverBackground": "#475569",
    "minimap.background": "#000000",
  },
};

const EDITOR_OPTIONS = {
  fontSize: 16,
  fontFamily: "'JetBrains Mono', 'SF Mono', Monaco, 'Cascadia Code', monospace",
  fontLigatures: true,
  lineHeight: 25,
  minimap: { enabled: false },
  scrollBeyondLastLine: false,
  wordWrap: "on",
  lineNumbers: "on",
  folding: false,
  renderLineHighlight: "line",
  matchBrackets: "always",
  autoClosingBrackets: "always",
  autoClosingQuotes: "always",
  tabSize: 2,
  insertSpaces: true,
  padding: { top: 16, bottom: 16 },
  scrollbar: {
    verticalScrollbarSize: 6,
    horizontalScrollbarSize: 6,
  },
  overviewRulerLanes: 0,
  hideCursorInOverviewRuler: true,
  overviewRulerBorder: false,
  contextmenu: true,
  quickSuggestions: true,
  suggestOnTriggerCharacters: true,
};

export default function CodeEditor({ value, onChange }) {
  const handleMount = (_editor, monaco) => {
    monaco.editor.defineTheme("interview-dark", MONACO_THEME);
    monaco.editor.setTheme("interview-dark");
  };

  return (
    <MonacoEditor
      height="100%"
      language="javascript"
      theme="interview-dark"
      value={value}
      onChange={(val) => onChange(val ?? "")}
      onMount={handleMount}
      options={EDITOR_OPTIONS}
    />
  );
}