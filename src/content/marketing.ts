import type { LucideIcon } from 'lucide-react';
import { Code2, Handshake, Lightbulb, Palette, Rocket, Sprout, Target, Zap } from 'lucide-react';

export type MarketingService = {
  id: string;
  Icon: LucideIcon;
  title: string;
  description: string;
};

export type MarketingValue = {
  id: string;
  Icon: LucideIcon;
  title: string;
  description: string;
};

export const services_content: MarketingService[] = [
  {
    id: 'software',
    Icon: Code2,
    title: 'Software Development',
    description:
      'Custom software solutions built with modern technologies and best practices.',
  },
  {
    id: 'design',
    Icon: Palette,
    title: 'UI/UX Design',
    description:
      'Beautiful, intuitive user experiences that delight users and drive engagement.',
  },
  {
    id: 'transformation',
    Icon: Rocket,
    title: 'Digital Transformation',
    description:
      'Modernize your business processes and technology stack for the digital age.',
  },
  {
    id: 'consulting',
    Icon: Lightbulb,
    title: 'Technology Consulting',
    description:
      'Strategic guidance to help you make informed technology decisions.',
  },
];

export const values_content: MarketingValue[] = [
  {
    id: 'innovation',
    Icon: Target,
    title: 'Innovation First',
    description:
      'We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage.',
  },
  {
    id: 'partnership',
    Icon: Handshake,
    title: 'Client Partnership',
    description:
      'We believe in building long-term relationships with our clients, working as an extension of their team.',
  },
  {
    id: 'quality_speed',
    Icon: Zap,
    title: 'Quality & Speed',
    description:
      'We deliver high-quality solutions quickly without compromising on excellence or cutting corners.',
  },
  {
    id: 'growth',
    Icon: Sprout,
    title: 'Continuous Growth',
    description:
      'We constantly learn, evolve, and improve to provide better solutions for our clients.',
  },
];

