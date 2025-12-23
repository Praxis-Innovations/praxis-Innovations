import Layout from '../src/components/layout/Layout';
import Link from 'next/link';

export default function About() {
  const values = [
    {
      icon: '🎯',
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage.'
    },
    {
      icon: '🤝',
      title: 'Client Partnership',
      description: 'We believe in building long-term relationships with our clients, working as an extension of their team.'
    },
    {
      icon: '⚡',
      title: 'Quality & Speed',
      description: 'We deliver high-quality solutions quickly without compromising on excellence or cutting corners.'
    },
    {
      icon: '🌱',
      title: 'Continuous Growth',
      description: 'We constantly learn, evolve, and improve to provide better solutions for our clients.'
    }
  ];

  return (
    <Layout
      title="About Us - Praxis Innovations"
      description="Learn about Praxis Innovations, our mission, values, and commitment to building modern software solutions."
      keywords="about us, mission, values, software company, startup"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            About{' '}
            <span className="gradient-text">Praxis Innovations</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We're a young and passionate team dedicated to building the future 
            through innovative software solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and competitive advantage. We believe that every company deserves 
                access to world-class technology that helps them achieve their goals.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                As a startup, we bring fresh perspectives and agility to every project. 
                We're not bogged down by bureaucracy—we move fast, iterate quickly, 
                and deliver real value.
              </p>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                To become a trusted technology partner for ambitious companies, 
                known for our innovative solutions, exceptional quality, and genuine 
                commitment to client success.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                We're at the beginning of our journey, but we're driven by a clear 
                purpose: to build technology that makes a real difference for the 
                businesses we work with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
              Our{' '}
              <span className="gradient-text">Values</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              These core values guide everything we do, from how we work with clients 
              to how we approach every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="card text-center group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {value.description}
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
            Ready to Work Together?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your technology goals and 
            bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-neutral-100 font-medium px-8 py-3 rounded-lg transition-all duration-300">
              Get in Touch
            </Link>
            <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium px-8 py-3 rounded-lg transition-all duration-300">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
