import Layout from '../src/components/layout/Layout';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      id: 'software',
      icon: '💻',
      title: 'Software Development',
      description: 'Custom software solutions built with modern technologies and best practices.',
      features: [
        'Web Applications',
        'Mobile Apps (iOS & Android)',
        'Enterprise Software',
        'API Development',
        'Microservices Architecture',
        'Legacy System Modernization'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'Python', 'Java', 'Go', 'React Native', 'Flutter'],
      process: [
        'Requirements Analysis',
        'Architecture Design',
        'Development & Testing',
        'Deployment & Launch',
        'Ongoing Support'
      ]
    },
    {
      id: 'design',
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user experiences that delight users and drive engagement.',
      features: [
        'User Research & Personas',
        'Wireframing & Prototyping',
        'Visual Design Systems',
        'Interactive Prototypes',
        'Usability Testing',
        'Design Handoff'
      ],
      tools: ['Figma', 'Sketch', 'Adobe Creative Suite', 'InVision', 'Principle'],
      deliverables: [
        'User Personas',
        'User Journey Maps',
        'Wireframes',
        'High-Fidelity Mockups',
        'Interactive Prototypes',
        'Design System Documentation'
      ]
    },
    {
      id: 'transformation',
      icon: '🚀',
      title: 'Digital Transformation',
      description: 'Modernize your business processes and technology stack for the digital age.',
      features: [
        'Process Automation',
        'Cloud Migration',
        'Data Strategy & Analytics',
        'Legacy System Integration',
        'Change Management',
        'Performance Optimization'
      ],
      benefits: [
        'Increased Efficiency',
        'Cost Reduction',
        'Better Customer Experience',
        'Data-Driven Decisions',
        'Competitive Advantage'
      ]
    },
    {
      id: 'consulting',
      icon: '💡',
      title: 'Technology Consulting',
      description: 'Strategic guidance to help you make informed technology decisions.',
      features: [
        'Technology Strategy',
        'Architecture Review',
        'Team Augmentation',
        'Project Management',
        'Security Audits',
        'Performance Reviews'
      ],
      expertise: [
        'Cloud Architecture',
        'DevOps & CI/CD',
        'Security & Compliance',
        'Scalability Planning',
        'Technology Selection'
      ]
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your business goals, challenges, and requirements.',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Strategy & Design',
      description: 'We create a comprehensive strategy and design the solution architecture.',
      icon: '📋'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Our team builds and thoroughly tests your solution using best practices.',
      icon: '⚙️'
    },
    {
      step: '04',
      title: 'Deployment & Launch',
      description: 'We deploy your solution and ensure everything is running smoothly.',
      icon: '🚀'
    },
    {
      step: '05',
      title: 'Support & Growth',
      description: 'We provide ongoing support and help you scale and improve your solution.',
      icon: '🌱'
    }
  ];

  return (
    <Layout
      title="Our Services - Praxis Innovations"
      description="Comprehensive software development, UI/UX design, digital transformation, and technology consulting services to help your business grow."
      keywords="software development, web development, mobile apps, UI/UX design, digital transformation, technology consulting"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Our{' '}
            <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to help your business grow, 
            innovate, and stay ahead of the competition.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="card text-center group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-4">
                  {service.description}
                </p>
                <Link
                  href={`#${service.id}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group-hover:translate-x-1 transition-all duration-200"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          {services.map((service, serviceIndex) => (
            <div key={service.id} id={service.id} className="mb-20 last:mb-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className={serviceIndex % 2 === 0 ? 'order-1' : 'order-2'}>
                  <div className="text-6xl mb-6">{service.icon}</div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                    {service.title}
                  </h2>
                  <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                        What We Offer
                      </h3>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-neutral-600">
                            <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {service.technologies && (
                      <div>
                        <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                          Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {service.tools && (
                      <div>
                        <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                          Tools We Use
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {service.tools.map((tool) => (
                            <span
                              key={tool}
                              className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {service.benefits && (
                      <div>
                        <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                          Benefits
                        </h3>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-center text-neutral-600">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div className={serviceIndex % 2 === 0 ? 'order-2' : 'order-1'}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    {service.process && (
                      <>
                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                          Our Process
                        </h3>
                        <div className="space-y-4">
                          {service.process.map((step, stepIndex) => (
                            <div key={stepIndex} className="flex items-start space-x-3">
                              <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                {stepIndex + 1}
                              </div>
                              <div>
                                <h4 className="font-medium text-neutral-900">{step}</h4>
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    )}

                    {service.deliverables && (
                      <>
                        <h3 className="text-xl font-semibold text-neutral-900 mb-4 mt-6">
                          Deliverables
                        </h3>
                        <ul className="space-y-2">
                          {service.deliverables.map((deliverable) => (
                            <li key={deliverable} className="flex items-center text-neutral-600">
                              <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-2"></span>
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
              Our{' '}
              <span className="gradient-text">Process</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and 
              maximum value for your investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div
                key={step.step}
                className="text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="text-2xl font-bold text-primary-600 mb-2">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and how we can help you 
            achieve your technology goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-neutral-100 font-medium px-8 py-3 rounded-lg transition-all duration-300">
              Start Your Project
            </Link>
            <Link href="/portfolio" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium px-8 py-3 rounded-lg transition-all duration-300">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
