import Layout from '../src/components/layout/Layout';
import Link from 'next/link';

export default function Contact() {
  return (
    <Layout
      title="Contact Us - Praxis Innovations"
      description="Get in touch with Praxis Innovations to discuss your project requirements. We're here to help bring your technology vision to life."
      keywords="contact, get quote, project inquiry, software development, consultation"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Let's{' '}
            <span className="gradient-text">Work Together</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Ready to start your next project? Get in touch with us and let's discuss 
            how we can help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            {/* Email Contact */}
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12">
              <div className="text-5xl mb-6">📧</div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Drop us an email and we'll get back to you as soon as possible. 
                We'd love to hear about your project ideas.
              </p>
              <a
                href="mailto:info.praxisinnovations@gmail.com"
                className="inline-flex items-center text-xl font-medium text-primary-600 hover:text-primary-700 transition-colors duration-200"
              >
                info.praxisinnovations@gmail.com
              </a>
            </div>

            {/* Why Choose Us */}
            <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
              <h3 className="font-semibold text-neutral-900 mb-6 text-xl">
                Why Choose Us?
              </h3>
              <ul className="space-y-3 text-neutral-600">
                <li className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                  Free consultation and project assessment
                </li>
                <li className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                  Transparent pricing and timelines
                </li>
                <li className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                  Ongoing support and maintenance
                </li>
                <li className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                  Dedicated project manager
                </li>
              </ul>
            </div>
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
            Explore our services to see how we can help you achieve your technology goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="bg-white text-primary-600 hover:bg-neutral-100 font-medium px-8 py-3 rounded-lg transition-all duration-300">
              Explore Services
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
