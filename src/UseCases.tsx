import { StickyScroll } from "./components/sticky-scroll-reveal";
import support from "./assets/images/support.png";
import brain from "./assets/images/brian.png";
import doc from "./assets/images/doc.png";
import train from "./assets/images/train.png";
import legal from "./assets/images/legal.png";
import contentss from "./assets/images/content.png";
import ScrollVelocity from "./components/ScrollVelocity";
export default function UseCases() {
  return (
    <section
      id="use-cases"
      className="py-10 text-[color:var(--text-primary)]"
    >
      <div className="flex flex-col items-center justify-center py-6 text-4xl font-bold md:text-5xl">
        For Every Use Case
      </div>
      <div className="my-8">
        <StickyScroll content={content}></StickyScroll>
      </div>
      <div className="py-10">
        <ScrollVelocity
          texts={[
            "Simple & Intuitive |",
            "Lightning Fast |",
            "Enterprise Ready |",
          ]}
          velocity={90}
          className="text-5xl text-[color:var(--text-primary)]"
        />
      </div>
    </section>
  );
}

const content = [
  {
    title: "Customer Support",
    description:
      "Transform customer service with intelligent systems that provide accurate, contextual responses instantly.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-[color:var(--text-primary)]">
        <img
          src={support}
          alt="Customer Support"
          style={{ height: "70%", width: "70%" }}
        />
      </div>
    ),
  },
  {
    title: "Knowledge Retrieval",
    description:
      "Efficiently find relevant information from extensive datasets for research and analysis workflows.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-[color:var(--text-primary)]">
        <img
          src={brain}
          alt="Customer Support"
          style={{ height: "70%", width: "90%" }}
        />
      </div>
    ),
  },
  {
    title: "Document Analysis",
    description:
      "Automatically summarize lengthy documents and extract key insights from research papers.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))]">
        <img
          src={doc}
          alt="Customer Support"
          style={{ height: "100%", width: "100%" }}
        />{" "}
      </div>
    ),
  },
  {
    title: "Training & Onboarding",
    description:
      "Create interactive training materials and answer employee questions using your knowledge base.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))]">
        <img
          src={train}
          alt="Customer Support"
          style={{ height: "80%", width: "80%" }}
        />{" "}
      </div>
    ),
  },
  {
    title: "Legal Research",
    description:
      "Search through legal documents, contracts, and case law with precision and contextual understanding.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))]">
        <img
          src={legal}
          alt="Customer Support"
          style={{ height: "80%", width: "80%" }}
        />{" "}
      </div>
    ),
  },
  {
    title: "Content Creation",
    description:
      "Generate blog posts, documentation, and marketing materials based on your existing knowledge.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))]">
        <img
          src={contentss}
          alt="Customer Support"
          style={{ height: "80%", width: "80%" }}
        />{" "}
      </div>
    ),
  },
];
