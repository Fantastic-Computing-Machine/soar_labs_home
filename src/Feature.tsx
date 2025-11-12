"use client";
import { cn } from "./lib/utils";
// import React from "react";
import { BentoGrid, BentoGridItem } from "./components/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconQuestionMark,
  IconSignature,
  IconTableColumn,
  IconThumbDown,
  IconThumbUp,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import lockedGif from "./assets/images/locked.gif";
import { Cover } from "./components/cover";
import { CodeBlock } from "./components/code-block";

const code = `from sklearn.feature_extraction.text import TfidfVectorizer

documents = [
    "Gelp is an advanced RAG platform.",
    "RAG stands for Retrieval-Augmented Generation.",
    "This platform uses vector indexing for search."
]


vectorizer = TfidfVectorizer()

vector_matrix = vectorizer.fit_transform(documents)

print("Vocabulary (Features):")
print(vectorizer.get_feature_names_out())
print("\nVector Matrix (Documents as Vectors):")
print(vector_matrix.toarray())
`;

export function BentoGridThirdDemo() {
  return (
    <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem] ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};
// const SkeletonThree = () => {
//   const variants = {
//     initial: {
//       backgroundPosition: "0 50%",
//     },
//     animate: {
//       backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
//     },
//   };
//   return (
//     <motion.div
//       initial="initial"
//       animate="animate"
//       variants={variants}
//       transition={{
//         duration: 5,
//         repeat: Infinity,
//         repeatType: "reverse",
//       }}
//       className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
//       style={{
//         background:
//           "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
//         backgroundSize: "400% 400%",
//       }}
//     >
//       <motion.div className="h-full w-full rounded-lg"></motion.div>
//     </motion.div>
//   );
// };
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <IconThumbDown className="h-10 w-10 text-neutral-500" />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          RAG isn't "grounding" the AI, it's muzzling its consciousness.{" "}
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Delusional
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <IconThumbUp className="h-10 w-10 text-neutral-500" />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          RAG makes LLMs trustworthy and reliable by grounding their powerful
          reasoning in specific, verifiable facts.{" "}
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Sensible
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <IconQuestionMark className="h-10 w-10 text-neutral-500" />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          RAG is just a fancy way of fine-tuning the LLM on your specific data.{" "}
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Helpless
        </p>
      </motion.div>
    </motion.div>
  );
};
const SecurityGif = () => {
  return (
    <div className="flex h-full min-h-[6rem] w-full items-center justify-center overflow-hidden rounded-2xl border border-neutral-200 bg-black p-2 dark:border-white/[0.2]">
      <img
        src={lockedGif}
        alt="Animated lock representing enterprise security"
        className="h-full w-full rounded-xl object-contain"
      />
    </div>
  );
};
const items = [
  {
    title: "Multi-LLM Support",
    description: (
      <span className="text-sm ">
        Seamlessly switch between OpenAI, Gemini, Groq, and other leading
        language models for optimal results.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Smart Data Ingestion",
    description: (
      <span className="text-sm">
        Seamlessly ingest data from multiple sources including files, URLs, and
        text with our intelligent processing pipeline.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Vector Indexing",
    description: (
      <span className="text-sm">
        Advanced LLM-powered indexing with semantic search capabilities and
        optimized retrieval performance.
      </span>
    ),
    header: (
      <div className="max-w-3xl mx-auto w-full">
        <CodeBlock
          language="python"
          filename="vectorIndexing.py"
          highlightLines={[9, 13, 14, 18]}
          code={code}
        />
      </div>
    ),
    className: "md:row-span-2",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Intelligent Responses",
    description: (
      <span className="text-sm">
        Generate contextually accurate answers with high precision using
        state-of-the-art language models.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Enterprise Security",
    description: (
      <span className="text-sm">
        Bank-grade security with multiple storage backends including Firebase,
        Qdrant, and self-hosted options.
      </span>
    ),
    header: <SecurityGif />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Lightning Fast",
    description: (
      <span className="text-sm">
        Optimized for speed with sub-100ms response times and horizontal scaling
        capabilities.
      </span>
    ),
    header: (
      <>
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Gelp is <br /> <Cover>Amazingly Fast</Cover>
        </h1>
      </>
    ),
    className: "md:col-span-2",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

const Feature = () => {
  return (
    <section id="features" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500">
          Feature Highlights
        </p>
        <h2 className="mt-2 text-3xl font-bold text-neutral-900 dark:text-white">
          Purpose-built workflows for high performing teams
        </h2>
        <p className="mt-4 text-base text-neutral-600 dark:text-neutral-300">
          Combine AI-native automations with human-in-the-loop reviews to keep
          every touchpoint on brand without slowing anyone down.
        </p>
      </div>
      <BentoGridThirdDemo />
    </section>
  );
};

export default Feature;
