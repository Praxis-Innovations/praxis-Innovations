import Layout from '../src/components/layout/Layout';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      id: 'software',
      icon: '💻',
      title: 'Software Development',
      description: 'Custom software solutions built with modern technologies and best practices.',
    },
    {
      id: 'design',
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user experiences that delight users and drive engagement.',
    },
    {
      id: 'transformation',
      icon: '🚀',
      title: 'Digital Transformation',
      description: 'Modernize your business processes and technology stack for the digital age.',
    },
    {
      id: 'consulting',
      icon: '💡',
      title: 'Technology Consulting',
      description: 'Strategic guidance to help you make informed technology decisions.',
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
                <p className="text-neutral-600">
                  {service.description}
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
