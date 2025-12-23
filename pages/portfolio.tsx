import Layout from '../src/components/layout/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function Portfolio() {
  const project = {
    title: 'EvenX',
    category: 'Mobile Application',
    description: 'An intuitive expense splitting app that makes sharing costs with friends, roommates, and groups effortless. EvenX simplifies group finances so you can focus on what matters.',
    website: 'https://evenx.io/',
    isPlaceholder: false
  };

  return (
    <Layout
      title="Our Portfolio - Praxis Innovations"
      description="Explore our work and see how we help clients achieve their technology goals."
      keywords="portfolio, projects, software development, web applications"
    >
      {/* Combined Hero + Project Section */}
      <section className="pt-28 pb-12 bg-gradient-to-br from-primary-50 to-accent-50 min-h-[calc(100vh-80px)]">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-3">
              Our{' '}
              <span className="gradient-text">Work</span>
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Building innovative solutions that make a difference.
            </p>
          </div>

          {project.isPlaceholder ? (
            // Placeholder state
            <div className="max-w-xl mx-auto text-center">
              <div className="bg-white rounded-2xl p-10 shadow-lg">
                <div className="text-5xl mb-4">🚀</div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-3">
                  Coming Soon
                </h2>
                <p className="text-neutral-600 mb-6">
                  We're currently working on exciting projects.
                </p>
                <Link href="/contact" className="btn-primary inline-block">
                  Start a Project With Us
                </Link>
              </div>
            </div>
          ) : (
            // EvenX project - horizontal layout
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  {/* Logo Side */}
                  <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-8 md:p-12 flex items-center justify-center">
                    <Image
                      src="/evenx-logo.png"
                      alt="EvenX Logo"
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </div>
                  
                  {/* Content Side */}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium w-fit mb-4">
                      {project.category}
                    </span>
                    <h2 className="text-3xl font-bold text-neutral-900 mb-3">
                      {project.title}
                    </h2>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center w-fit"
                    >
                      Visit EvenX
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you bring your ideas to life 
            with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-neutral-100 font-medium px-8 py-3 rounded-lg transition-all duration-300">
              Get in Touch
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
