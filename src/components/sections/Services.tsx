import Link from 'next/link';

const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Software Development',
      description: 'Custom web applications, mobile apps, and enterprise software built with modern technologies and best practices.',
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user experiences that delight users and drive engagement across all devices.',
    },
    {
      icon: '🚀',
      title: 'Digital Transformation',
      description: 'Modernize your business processes and technology stack to stay competitive in the digital age.',
    },
    {
      icon: '💡',
      title: 'Consulting',
      description: 'Strategic technology consulting to help you make informed decisions and achieve your business goals.',
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Our{' '}
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            We offer comprehensive technology solutions to help your business grow, 
            innovate, and stay ahead of the competition.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card group-hover:scale-105 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="text-4xl mb-4">{service.icon}</div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
              Ready to start your project?
            </h3>
            <p className="text-lg text-neutral-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals with our technology expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Started
              </Link>
              <Link href="/portfolio" className="btn-outline">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
