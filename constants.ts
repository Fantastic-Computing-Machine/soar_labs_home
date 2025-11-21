import { 
  Database, 
  Zap, 
  Shield, 
  Cpu, 
  Layers, 
  FileText, 
  Search, 
  Brain, 
  MessageSquare 
} from 'lucide-react';
import { Feature, PipelineStep, Stat, UseCase } from './types';

export const PIPELINE_STEPS: PipelineStep[] = [
  {
    id: 1,
    title: "Ingest",
    subtitle: "Universal Data Connectors",
    description: "Seamlessly ingest data from PDFs, websites, databases, and APIs. Soar Labs automatically cleans and normalizes raw inputs.",
    icon: Database
  },
  {
    id: 2,
    title: "Process",
    subtitle: "Smart Chunking & Embedding",
    description: "Content is split into semantic chunks and converted into high-dimensional vectors using state-of-the-art embedding models.",
    icon: Layers
  },
  {
    id: 3,
    title: "Retrieve",
    subtitle: "Vector Search < 50ms",
    description: "Hybrid search combines keyword precision with semantic understanding to find the exact context needed for the query.",
    icon: Search
  },
  {
    id: 4,
    title: "Generate",
    subtitle: "Multi-LLM Synthesis",
    description: "Relevant context is fed into Gemini, GPT-4, or Groq to generate accurate, hallucination-free responses instantly.",
    icon: Brain
  }
];

export const FEATURES: Feature[] = [
  {
    title: "Multi-LLM Orchestration",
    description: "Switch between Gemini Pro, GPT-4, and Claude instantly based on cost, speed, or accuracy requirements.",
    icon: Cpu
  },
  {
    title: "Enterprise Security",
    description: "SOC2 compliant infrastructure with role-based access control (RBAC) and private VPC deployment options.",
    icon: Shield
  },
  {
    title: "Sub-100ms Latency",
    description: "Optimized vector indexing and caching layers ensure your users never stare at a loading spinner.",
    icon: Zap
  },
  {
    title: "Hybrid Search",
    description: "Combines dense vector retrieval with sparse keyword search (BM25) for maximum relevance.",
    icon: Search
  }
];

export const STATS: Stat[] = [
  { value: "100", label: "Response Time", suffix: "ms" },
  { value: "10", label: "Documents Processed", suffix: "M+" },
  { value: "99.9", label: "Uptime SLA", suffix: "%" },
  { value: "500", label: "Enterprise Teams", suffix: "+" }
];

export const USE_CASES: UseCase[] = [
  {
    title: "Customer Support Automation",
    description: "Deflect 60% of support tickets by letting Soar Labs answer FAQs using your existing knowledge base.",
    image: "https://picsum.photos/800/600?random=1",
    tags: ["Support", "Chatbots"]
  },
  {
    title: "Legal Document Analysis",
    description: "Instantly retrieve clauses, precedents, and summaries from thousands of legal PDF contracts.",
    image: "https://picsum.photos/800/600?random=2",
    tags: ["Legal", "Analysis"]
  },
  {
    title: "Technical Documentation",
    description: "Help developers find code snippets and API usage examples from your documentation instantly.",
    image: "https://picsum.photos/800/600?random=3",
    tags: ["DevTools", "Docs"]
  },
  {
    title: "Internal Knowledge Search",
    description: "Connect Notion, Slack, and Drive to create a single source of truth for your employees.",
    image: "https://picsum.photos/800/600?random=4",
    tags: ["Enterprise", "Internal"]
  }
];