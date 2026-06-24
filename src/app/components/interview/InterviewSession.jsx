"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Group, Panel, Separator } from "react-resizable-panels";
import {
  Bug,
  Tag,
  Clock,
  SkipForward,
  ChevronRight,
  Flag,
  AlignLeft,
} from "lucide-react";
import dynamic from "next/dynamic";
import TestPanel from "./TestPanel";
import { DIFFICULTY_STYLES } from "../../../lib/interview-questions.js";

// Lazy-load heavy components
const CodeEditor = dynamic(() => import("./CodeEditor"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full bg-[#0d0d1f]">
      <div className="w-5 h-5 border-2 border-purple-500/40 border-t-purple-500 rounded-full animate-spin" />
    </div>
  ),
});

const PreviewPanel = dynamic(() => import("./PreviewPanel"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full bg-[#0a0a1a] text-slate-600 text-xs">
      Loading preview…
    </div>
  ),
});

function formatTime(seconds) {
  const m = Math.floor(Math.abs(seconds) / 60);
  const s = Math.abs(seconds) % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

// ── Drag Handle Component ─────────────────────────────────────────────────────
// direction="horizontal" → column resize (cursor: col-resize)
// direction="vertical"   → row resize    (cursor: row-resize)
function ResizeHandle({ direction = "horizontal" }) {
  const isH = direction === "horizontal";

  return (
    <Separator
      className={[
        "relative group z-10 flex-shrink-0 flex items-center justify-center",
        "transition-colors duration-150 select-none",
        isH
          ? "w-[3px] cursor-col-resize bg-slate-800/80 hover:bg-purple-600/60 active:bg-purple-500"
          : "h-[3px] cursor-row-resize bg-slate-800/80 hover:bg-purple-600/60 active:bg-purple-500",
      ].join(" ")}
    >
      {/*
        Floating grip pill — appears on hover in the center of the handle.
        Dots are vertical (⋮) for H handles, horizontal (⋯) for V handles.
      */}
      <div
        className={[
          "absolute z-20 rounded-full flex items-center justify-center",
          "opacity-0 group-hover:opacity-100 transition-opacity duration-200",
          "bg-[#1a1a2e] border border-purple-600/40 shadow-xl",
          isH ? "flex-col gap-[4px] py-2.5 px-[5px]" : "flex-row gap-[4px] px-2.5 py-[5px]",
        ].join(" ")}
      >
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="block w-[3px] h-[3px] rounded-full bg-purple-400/90"
          />
        ))}
      </div>
    </Separator>
  );
}

// ── Top Bar ────────────────────────────────────────────────────────────────────
function TopBar({
  questions,
  currentIdx,
  timeLeft,
  totalTime,
  onSkip,
  isLastQuestion,
  allPassed,
  onNext,
}) {
  const isWarning = timeLeft <= 120 && timeLeft > 60;
  const isDanger = timeLeft <= 60;
  const currentQ = questions[currentIdx];
  const diff = DIFFICULTY_STYLES[currentQ.difficulty];

  return (
    <div
      className="h-[52px] flex-shrink-0 flex items-center justify-between px-8 py-10
        bg-[#0a0a0a] border-b border-slate-800/70 backdrop-blur-sm z-20"
    >
      {/* Left: progress dots + label */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          {questions.map((_, i) => (
            <button
              key={i}
              aria-label={`Question ${i + 1}`}
              className={`w-7 h-7 rounded-full text-xs font-bold border transition-all duration-300
                ${
                  i === currentIdx
                    ? "bg-purple-600 border-purple-500 text-white scale-110 shadow-lg shadow-purple-900/50"
                    : i < currentIdx
                    ? "bg-slate-700 border-slate-600 text-slate-300"
                    : "bg-transparent border-slate-700 text-slate-500"
                }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <span className="text-slate-500 text-sm hidden sm:block">
          Challenge {currentIdx + 1} of {questions.length}
        </span>
      </div>

      {/* Right: difficulty + timer + action */}
      <div className="flex items-center gap-3">
        <span
          className={`hidden sm:inline-flex items-center gap-1.5 text-[10px] font-semibold
            px-2.5 py-1 rounded-full border ${diff.bg} ${diff.text} ${diff.border}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${diff.dot}`} />
          {diff.label}
        </span>

        <span className="text-slate-600 text-xs hidden sm:block">
          {Math.floor(currentQ.timeLimit / 60)} min
        </span>

        <div
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono font-bold text-sm
            border transition-all duration-500
            ${
              isDanger
                ? "bg-red-500/15 border-red-500/40 text-red-400 animate-pulse"
                : isWarning
                ? "bg-amber-500/15 border-amber-500/40 text-amber-400"
                : "bg-slate-800/60 border-slate-700/50 text-slate-200"
            }`}
        >
          <Clock size={13} />
          {formatTime(timeLeft)}
        </div>

        {allPassed ? (
          <button
            onClick={onNext}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg
              bg-gradient-to-r from-purple-600 to-blue-600
              hover:from-purple-500 hover:to-blue-500
              text-white transition-all duration-150 active:scale-95"
          >
            {isLastQuestion ? (
              <>
                <Flag size={12} /> Finish
              </>
            ) : (
              <>
                Next <ChevronRight size={12} />
              </>
            )}
          </button>
        ) : (
          <button
            onClick={onSkip}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg
              text-slate-400 hover:text-slate-200 border border-slate-700/50
              hover:border-slate-600 transition-all duration-150 active:scale-95"
          >
            <SkipForward size={13} />
            Skip
          </button>
        )}
      </div>
    </div>
  );
}

// ── Question Info Panel ────────────────────────────────────────────────────────
function QuestionInfo({ question }) {
  return (
    <div className="px-5 py-4 space-y-4">
      <h2 className="text-xl font-bold text-white leading-tight">
        {question.title}
      </h2>

      <div className="rounded-xl border border-red-500/25 bg-red-500/8 overflow-hidden">
        <div className="flex items-center gap-2 px-3 py-2 border-b border-red-500/20 bg-red-500/10">
          <Bug size={13} className="text-red-400 flex-shrink-0" />
          <span className="text-red-400 text-xs font-semibold tracking-wider uppercase">
            Bug Report
          </span>
        </div>
        <p className="text-slate-300 text-sm leading-relaxed px-3 py-2.5">
          {question.bugReport}
        </p>
      </div>

      <div className="flex items-center flex-wrap gap-2">
        <Tag size={12} className="text-slate-600 flex-shrink-0" />
        {question.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-0.5 rounded-full
              bg-purple-500/12 text-purple-300 border border-purple-500/25"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="space-y-1">
        <div className="flex items-center gap-1.5">
          <AlignLeft size={12} className="text-slate-600" />
          <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
            Fix the Bug: {question.title}
          </span>
        </div>
        <p className="text-slate-300 text-sm leading-relaxed pl-4">
          {question.description}
        </p>
      </div>
    </div>
  );
}

// ── Main Session Component ─────────────────────────────────────────────────────
export default function InterviewSession({
  questions,
  currentIdx,
  timeLeft,
  totalTime,
  onSkip,
  onNext,
  onComplete,
  recordResult,
}) {
  const question = questions[currentIdx];
  const isLastQuestion = currentIdx === questions.length - 1;

  const [code, setCode] = useState(question.buggyCode);

  // previewCode is separate from editor code — only updates on "Check"
  const [previewCode, setPreviewCode] = useState(question.buggyCode);
  // previewKey increments on each Check to force iframe remount
  const [previewKey, setPreviewKey] = useState(0);

  const [testResults, setTestResults] = useState(undefined);
  const allPassed =
    Array.isArray(testResults) && testResults.every(Boolean);

  // Reset everything when question changes
  useEffect(() => {
    setCode(question.buggyCode);
    setPreviewCode(question.buggyCode);
    setPreviewKey((k) => k + 1);
    setTestResults(undefined);
  }, [currentIdx, question.buggyCode]);

  const handleCheck = useCallback(() => {
    const results = question.tests.map((t) => {
      try {
        return t.check(code);
      } catch {
        return false;
      }
    });
    setTestResults(results);
    // Push current editor code to preview & force iframe reload
    setPreviewCode(code);
    setPreviewKey((k) => k + 1);
  }, [code, question.tests]);

  const handleNext = useCallback(() => {
    recordResult(question.id, { solved: true });
    onNext();
  }, [question.id, recordResult, onNext]);

  const handleSkip = useCallback(() => {
    recordResult(question.id, { solved: false, skipped: true });
    onSkip();
  }, [question.id, recordResult, onSkip]);

  return (
    <div className="flex flex-col h-screen bg-[#050505] overflow-hidden">
      {/* ── Top Bar ── */}
      <TopBar
        questions={questions}
        currentIdx={currentIdx}
        timeLeft={timeLeft}
        totalTime={totalTime}
        onSkip={handleSkip}
        isLastQuestion={isLastQuestion}
        allPassed={allPassed}
        onNext={handleNext}
      />

      {/* ── Resizable 4-panel layout ── */}
      <div className="flex-1 min-h-0 overflow-hidden">
        <Group orientation='horizontal' className="h-full w-full">

          {/* ─────────────────── LEFT COLUMN ─────────────────── */}
          <Panel defaultSize={50} minSize={22} maxSize={75}>
            {/* Inner vertical group: Question Info ↕ Editor */}
            <Group orientation="vertical" className="h-full w-full">

              {/* Question Info (scrollable) */}
              <Panel defaultSize={42} minSize={12} maxSize={72}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={question.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="h-full overflow-y-auto border-b border-gray-800/60"
                  >
                    <QuestionInfo question={question} />
                  </motion.div>
                </AnimatePresence>
              </Panel>

              {/* Vertical drag handle (Question Info ↕ Editor) */}
              <ResizeHandle direction="vertical" />

              {/* Code Editor */}
              <Panel defaultSize={58} minSize={20}>
                <div className="h-full flex flex-col border-r border-slate-800/60">
                  <div
                    className="flex items-center justify-between px-4 py-1.5
                      bg-black border-b border-slate-800/50 flex-shrink-0"
                  >
                    <span className="text-slate-600 text-[10px] font-semibold tracking-widest uppercase">
                      Editor
                    </span>
                    <span className="text-slate-700 text-[10px] font-mono">
                      JavaScript · JSX
                    </span>
                  </div>
                  <div className="flex-1 min-h-0">
                    <CodeEditor value={code} onChange={setCode} />
                  </div>
                </div>
              </Panel>

            </Group>
          </Panel>

          {/* Horizontal drag handle (Left ↔ Right) */}
          <ResizeHandle direction="horizontal" />

          {/* ─────────────────── RIGHT COLUMN ─────────────────── */}
          <Panel defaultSize={50} minSize={22} maxSize={75}>
            {/* Inner vertical group: Preview ↕ Tests */}
            <Group orientation="vertical" className="h-full w-full">

              {/* Preview Panel */}
              <Panel defaultSize={55} minSize={18}>
                <div className="h-full flex flex-col">
                  <div
                    className="flex items-center justify-between px-4 py-3
                      bg-[#141414] border-b border-slate-800/50 flex-shrink-0"
                  >
                    <span className="text-[#a3a3a3] text-[10px] font-semibold tracking-widest uppercase">
                      Preview
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span className="text-amber-500/80 text-[10px] font-medium">
                        Updates on Check
                      </span>
                    </span>
                  </div>
                  <div className="flex-1 min-h-0">
                    <PreviewPanel code={previewCode} refreshKey={previewKey} />
                  </div>
                </div>
              </Panel>

              {/* Vertical drag handle (Preview ↕ Tests) */}
              <ResizeHandle direction="vertical" />

              {/* Test Panel */}
              <Panel defaultSize={45} minSize={15}>
                <TestPanel
                  tests={question.tests}
                  results={testResults}
                  allPassed={allPassed}
                  onCheck={handleCheck}
                  onNext={handleNext}
                  isLastQuestion={isLastQuestion}
                />
              </Panel>

            </Group>
          </Panel>

        </Group>
      </div>
    </div>
  );
}