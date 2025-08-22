import React from 'react';
import { AiOutlineProject, AiOutlineCloudServer } from 'react-icons/ai';
import { BsLaptop, BsTools, BsKeyFill } from 'react-icons/bs';
import { RiFlowChart } from 'react-icons/ri';
import { FaReact } from 'react-icons/fa';
import { IoMdImages } from 'react-icons/io';
import {
  IoServer,
  IoRocketOutline,
  IoPeopleOutline,
  IoEarthOutline,
} from 'react-icons/io5';

interface ServiceItem {
  icon: React.ReactElement;
  title: string;
  about: string;
}

interface NavLink {
  id: number;
  url: string;
  text: string;
}

export const services: ServiceItem[] = [
  {
    icon: <IoPeopleOutline size='70px' color='var(--heading)' />,
    title: 'Consulting',
    about:
      'Comprehensive consulting services on Spring Cloud,Lightbend and Cloud Foundry technology stacks.',
  },
  {
    icon: <AiOutlineProject size='70px' color='var(--heading)' />,
    title: 'Project Development',
    about:
      'Our qualified team can handle the design, development, and deployment of your applications so you can focus on your core business goals.',
  },
  {
    icon: <IoRocketOutline size='70px' color='var(--heading)' />,
    title: 'Architectural Guidance',
    about:
      'High-level design and architectural advice from a team with extensive experience deploying applications into production.',
  },
  {
    icon: <IoEarthOutline size='70px' color='var(--heading)' />,
    title: 'Team Augmentation',
    about:
      'Our skilled engineers can seamlessly integrate with your in-house team, provide additional bandwidth, and adapt to your mission-critical workflow',
  },
  {
    icon: <BsLaptop size='70px' color='var(--heading)' />,
    title: 'Code Review',
    about:
      'Our in-depth mentoring and code review will help keep your applications secure, and help to lower your technical debt.',
  },
];

export const stacks: ServiceItem[] = [
  {
    icon: <FaReact size='70px' color='var(--heading)' />,
    title: 'Reactive Platforms',
    about:
      'Reactive Platforms enable building systems that are more robust, more resilient, more flexible and better positioned to meet modern demands.',
  },
  {
    icon: <RiFlowChart size='70px' color='var(--heading)' />,
    title: 'Microservices',
    about:
      'Learn why migrating from a monolithic system to a microservices-based architecture can transform your business.',
  },
  {
    icon: <AiOutlineCloudServer size='70px' color='var(--heading)' />,
    title: 'Cloud Platforms',
    about:
      'Grow from prototype to production, without having to think about capacity, reliability or performance.',
  },
  {
    icon: <BsTools size='50px' color='var(--heading)' />,
    title: 'API Gateway',
    about:
      'API Gateways make it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale.',
  },
  {
    icon: <AiOutlineProject size='70px' color='var(--heading)' />,
    title: 'Big Fast Smart Data',
    about:
      'We use cutting-edge technologies allowing us the ability to achieve big insights from trusted, contextualized, relevant, cognitive, predictive and consumable data at any scale.',
  },
  {
    icon: <BsKeyFill size='70px' color='var(--heading)' />,
    title: 'DevOps',
    about:
      'Automating and improving your software delivery process using Continuous Delivery design methods and best practices around DevOps',
  },
  {
    icon: <IoServer size='70px' color='var(--heading)' />,
    title: 'RDBMS / NoSQL',
    about:
      'We can help decide on the right datastore that best fits our client\'s data and performance needs.',
  },
  {
    icon: <IoMdImages size='70px' color='var(--heading)' />,
    title: 'UI / UX',
    about:
      'We build User interface and User experience design that provide a meaningful purpose for every visual and functional element of the product.',
  },
];

export const NavLinks: NavLink[] = [
  {
    id: 1,
    url: '#home',
    text: 'Home',
  },
  {
    id: 2,
    url: '#service',
    text: 'Service',
  },
  {
    id: 3,
    url: '#tech',
    text: 'Tech Stacks',
  },
  {
    id: 4,
    url: '#about',
    text: 'About',
  },
  {
    id: 5,
    url:'#contact',
    text: 'Contact'
  },
];
