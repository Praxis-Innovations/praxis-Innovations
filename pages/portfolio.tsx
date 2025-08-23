import Layout from '../src/components/layout/Layout';
import Link from 'next/link';

export default function Portfolio() {
  const projects = [
    {
      id: 'ecommerce-platform',
      title: 'E-Commerce Platform',
      category: 'Web Application',
      industry: 'Retail',
      description: 'A modern, scalable e-commerce platform built with Next.js and Node.js, featuring advanced search, personalized recommendations, and seamless payment integration.',
      challenge: 'The client needed a high-performance e-commerce solution that could handle 100,000+ products and provide an exceptional user experience across all devices.',
      solution: 'We built a headless e-commerce platform using Next.js for the frontend, Node.js microservices for the backend, and integrated with multiple payment gateways and inventory management systems.',
      results: [
        '40% increase in conversion rate',
        '60% improvement in page load speed',
        '99.9% uptime achieved',
        'Scaled to handle 1M+ monthly visitors'
      ],
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'AWS'],
      image: '/portfolio/ecommerce.jpg',
      duration: '4 months',
      team: '6 developers, 2 designers, 1 PM'
    },
    {
      id: 'healthcare-app',
      title: 'Healthcare Management App',
      category: 'Mobile Application',
      industry: 'Healthcare',
      description: 'A comprehensive healthcare management application for medical professionals, featuring patient management, appointment scheduling, and telemedicine capabilities.',
      challenge: 'Healthcare providers needed a secure, HIPAA-compliant solution that could streamline patient care and improve operational efficiency.',
      solution: 'We developed a React Native mobile app with a secure backend, implementing end-to-end encryption, HIPAA compliance measures, and real-time communication features.',
      results: [
        '50% reduction in administrative tasks',
        '30% improvement in patient satisfaction',
        'HIPAA compliance achieved',
        '99.5% app store rating'
      ],
      technologies: ['React Native', 'Python', 'PostgreSQL', 'WebRTC', 'Firebase', 'HIPAA'],
      image: '/portfolio/healthcare.jpg',
      duration: '6 months',
      team: '8 developers, 3 designers, 2 QA, 1 PM'
    },
    {
      id: 'ai-analytics',
      title: 'AI-Powered Analytics Dashboard',
      category: 'Data Analytics',
      industry: 'Finance',
      description: 'An intelligent analytics platform that uses machine learning to provide real-time insights and predictive analytics for financial data.',
      challenge: 'A financial services company needed to process and analyze massive amounts of data in real-time to make informed investment decisions.',
      solution: 'We built a scalable data pipeline using Python and Apache Kafka, implemented machine learning models for pattern recognition, and created an intuitive dashboard for data visualization.',
      results: [
        '90% faster data processing',
        '85% accuracy in predictions',
        'Real-time analytics capabilities',
        '$2M+ in cost savings'
      ],
      technologies: ['Python', 'TensorFlow', 'Apache Kafka', 'React', 'Docker', 'Kubernetes'],
      image: '/portfolio/analytics.jpg',
      duration: '8 months',
      team: '10 developers, 2 data scientists, 2 designers, 1 PM'
    },
    {
      id: 'supply-chain',
      title: 'Supply Chain Optimization',
      category: 'Enterprise Software',
      industry: 'Manufacturing',
      description: 'A comprehensive supply chain management system that optimizes inventory, reduces costs, and improves operational efficiency.',
      challenge: 'A manufacturing company was struggling with inventory management, leading to stockouts and excess inventory costs.',
      solution: 'We developed a custom ERP system with advanced forecasting algorithms, real-time tracking, and automated reorder systems.',
      results: [
        '25% reduction in inventory costs',
        '40% improvement in order fulfillment',
        'Real-time visibility across supply chain',
        'ROI achieved in 8 months'
      ],
      technologies: ['Java', 'Spring Boot', 'Angular', 'Oracle', 'Docker', 'Azure'],
      image: '/portfolio/supply-chain.jpg',
      duration: '10 months',
      team: '12 developers, 4 designers, 3 QA, 2 PMs'
    }
  ];

  const categories = ['All', 'Web Application', 'Mobile Application', 'Data Analytics', 'Enterprise Software'];
  const industries = ['All', 'Retail', 'Healthcare', 'Finance', 'Manufacturing', 'Education', 'Technology'];

  return (
    <Layout
      title="Our Portfolio - Praxis Innovations"
      description="Explore our successful projects and case studies across various industries. See how we've helped clients achieve their technology goals."
      keywords="portfolio, case studies, projects, software development, web applications, mobile apps, success stories"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Our{' '}
            <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Discover how we've helped businesses across industries transform their 
            operations and achieve remarkable results through innovative technology solutions.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-neutral-300 text-neutral-600 hover:border-primary-500 hover:text-primary-600 transition-all duration-200"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="card group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image Placeholder */}
                <div className="w-full h-64 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-6xl">{project.category === 'Web Application' ? '💻' : 
                    project.category === 'Mobile Application' ? '📱' : 
                    project.category === 'Data Analytics' ? '📊' : '🏢'}</div>
                </div>

                {/* Project Info */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
                      {project.industry}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project Details */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">The Challenge</h4>
                    <p className="text-sm text-neutral-600">{project.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Our Solution</h4>
                    <p className="text-sm text-neutral-600">{project.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="font-semibold text-neutral-900 mb-3">Results</h4>
                  <ul className="space-y-1">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-neutral-600">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies & Project Info */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-neutral-100 text-neutral-700 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-neutral-700">Duration:</span>
                      <p className="text-neutral-600">{project.duration}</p>
                    </div>
                    <div>
                      <span className="font-medium text-neutral-700">Team Size:</span>
                      <p className="text-neutral-600">{project.team}</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-neutral-200">
                  <Link
                    href={`/portfolio/${project.id}`}
                    className="btn-primary w-full text-center"
                  >
                    View Case Study
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
              Our{' '}
              <span className="gradient-text">Success Metrics</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Numbers that speak to our commitment to delivering exceptional results 
              and driving real business value for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
              <div className="text-neutral-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-600 mb-2">95%</div>
              <div className="text-neutral-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">$50M+</div>
              <div className="text-neutral-600">Value Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-600 mb-2">24/7</div>
              <div className="text-neutral-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results and 
            transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-neutral-100 font-medium px-8 py-3 rounded-lg transition-all duration-300">
              Start Your Project
            </Link>
            <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium px-8 py-3 rounded-lg transition-all duration-300">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
