"use client";

import { useCallback, useRef, useState } from "react";
import Stepper, { Step } from "./components/Stepper";

const STEP_COUNT = 6;
const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const RagFlow = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [hasReleasedTop, setHasReleasedTop] = useState(false);
  const [hasReleasedBottom, setHasReleasedBottom] = useState(false);
  const lockRef = useRef(false);
  const lockTimeoutRef = useRef<number | null>(null);
  const previousOverflowRef = useRef("");

  const releaseLock = useCallback(() => {
    if (lockTimeoutRef.current) {
      window.clearTimeout(lockTimeoutRef.current);
      lockTimeoutRef.current = null;
    }
    lockRef.current = false;
  }, []);

  const stepByDirection = useCallback(
    (direction: 1 | -1) => {
      if (lockRef.current) return;
      lockRef.current = true;
      setActiveStep((prev) => clamp(prev + direction, 1, STEP_COUNT));
      lockTimeoutRef.current = window.setTimeout(releaseLock, 450);
    },
    [releaseLock]
  );

  const restoreBodyScroll = useCallback(() => {
    document.body.style.overflow = previousOverflowRef.current || "";
  }, []);

  const handleWheel = useCallback(
    (event: React.WheelEvent<HTMLElement>) => {
      const delta = event.deltaY;
      if (delta > 0 && activeStep < STEP_COUNT) {
        event.preventDefault();
        setHasReleasedBottom(false);
        stepByDirection(1);
      } else if (delta < 0 && activeStep > 1) {
        event.preventDefault();
        setHasReleasedTop(false);
        stepByDirection(-1);
      } else if (delta > 0 && activeStep === STEP_COUNT && !hasReleasedBottom) {
        event.preventDefault();
        setHasReleasedBottom(true);
        restoreBodyScroll();
      } else if (delta < 0 && activeStep === 1 && !hasReleasedTop) {
        event.preventDefault();
        setHasReleasedTop(true);
        restoreBodyScroll();
      }
    },
    [
      activeStep,
      hasReleasedBottom,
      hasReleasedTop,
      stepByDirection,
      restoreBodyScroll,
    ]
  );

  return (
    <section
      id="workflow"
      className="mx-auto flex w-full max-w-6xl flex-col px-4 sm:px-6 lg:px-8"
      onWheel={handleWheel}
      onPointerLeave={() => {
        releaseLock();
        restoreBodyScroll();
      }}
      onPointerEnter={() => {
        setHasReleasedTop(false);
        setHasReleasedBottom(false);
        previousOverflowRef.current = document.body.style.overflow || "";
        document.body.style.overflow = "hidden";
      }}
    >
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-400">
          Guided Setup
        </p>
        <h2 className="mt-2 text-3xl font-bold text-[color:var(--text-primary)]">
          Configure your RAG pipeline in six intuitive steps
        </h2>
      </div>

      <div className="mx-auto w-full max-w-4xl">
        <Stepper
          initialStep={1}
          controlledStep={activeStep}
          disableStepIndicators
          footerClassName="hidden"
          stepCircleContainerClassName="bg-transparent border-none backdrop-blur-lg"
          contentClassName="py-8"
        >
          <Step>
            <h3 className="text-2xl font-semibold text-[color:var(--text-primary)] ">
              User Query
            </h3>
            <p className="mt-2 flex justify-center items-center text-sm text-[color:var(--text-secondary)] py-4">
              This is the starting point. A user submits a question or a request
              in plain, natural language (e.g., "What were our Q3 sales
              goals?").
            </p>
          </Step>

          <Step>
            <h3 className="text-2xl  font-semibold justify-center items-center text-[color:var(--text-primary)]">
              Data Sources
            </h3>

            <div className="mt-4 flex flex-col items-center gap-2 text-lg text-[color:var(--text-secondary)]">
              <span className="rounded-full border border-[color:var(--border-soft)] bg-[color:var(--glass-alt-surface)] px-4 py-2">
                Knowledge Base
              </span>
              <span className="text-lg text-[color:var(--text-muted)]">↓</span>
              <span className="rounded-full border border-[color:var(--border-soft)] bg-[color:var(--glass-alt-surface)] px-4 py-2">
                Web Data
              </span>
              <span className="text-lg text-[color:var(--text-muted)]">↓</span>
              <span className="rounded-full border border-[color:var(--border-soft)] bg-[color:var(--glass-alt-surface)] px-4 mb-4 py-2">
                Internal DB
              </span>
            </div>
          </Step>

          <Step>
            <h3 className="text-2xl font-semibold text-[color:var(--text-primary)]">
              Processing Pipeline
            </h3>

            <div className="relative mt-6 overflow-hidden mb-4">
              <div className="pointer-events-none" />

              <div className="relative grid gap-6 sm:grid-cols-3">
                {[
                  {
                    label: "Ingest",
                    description: "Parse & normalize sources",
                    accent: "from-blue-500 to-cyan-400",
                    stats: "",
                  },
                  {
                    label: "Chunk",
                    description: "Semantic segmentation",
                    accent: "from-violet-500 to-purple-400",
                    stats: "",
                  },
                  {
                    label: "Embed",
                    description: "High-dim vectors",
                    accent: "from-pink-500 to-rose-400",
                    stats: "",
                  },
                ].map((stage, index) => (
                  <div
                    key={stage.label}
                    className="relative flex flex-1 flex-col gap-3 rounded-3xl border border-white/10 bg-black/40 p-6 text-left shadow-[0_25px_70px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl"
                  >
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-[color:var(--text-muted)]">
                      <span>{`0${index + 1}`}</span>
                      {index < 2 && <span>↠</span>}
                    </div>
                    <div
                      className={`inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r ${stage.accent} px-3 py-1 text-xs font-semibold text-white shadow-[0_10px_25px_rgba(0,0,0,0.3)]`}
                    >
                      {stage.label}
                    </div>
                    <p className="flex justify-center items-center text-sm text-[color:var(--text-secondary)] leading-relaxed">
                      {stage.description}
                    </p>
                    <span className="text-xs text-[color:var(--text-muted)]">
                      {stage.stats}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Step>

          <Step>
            <h3 className="text-2xl font-semibold text-[color:var(--text-primary)]">
              Vector Search
            </h3>
            <p className="mb-4 mt-2 text-sm text-[color:var(--text-secondary)]">
              When the user asks a query (Step 1), their question is also
              converted into a vector. This step involves searching the vector
              database (using a tool like Qdrant, as mentioned) to find the text
              chunks with vectors that are most "similar" in meaning to the
              query's vector. This is the "Retrieval" part of RAG.
            </p>
          </Step>
          <Step>
            <h3 className="text-2xl font-semibold text-[color:var(--text-primary)]">
              RAG Generation
            </h3>
            <p className="mb-4 mt-2 text-sm text-[color:var(--text-secondary)]">
              The most relevant chunks found in the search are gathered and
              combined with the user's original query. This complete package
              (Query + Retrieved Context) is then sent to a Large Language Model
              (LLM). This is the "Augmented Generation" part.{" "}
            </p>
          </Step>
          <Step>
            <h3 className="text-2xl font-semibold text-[color:var(--text-primary)]">
              Intelligent Response
            </h3>
            <p className="mt-2 text-sm text-[color:var(--text-secondary)] mb-4">
              The LLM uses the factual context provided to it to generate a
              final answer for the user. Because this answer is "grounded" in
              the retrieved data, it is an accurate and contextual response
              rather than a guess (hallucination) from the LLM's general
              knowledge.{" "}
            </p>
          </Step>
        </Stepper>
      </div>
    </section>
  );
};

export default RagFlow;
