import { LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PipelineStep {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface UseCase {
  title: string;
  description: string;
  image: string;
  tags: string[];
}