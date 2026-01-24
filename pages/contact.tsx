import Layout from '../src/components/layout/Layout';
import Link from 'next/link';
import ContactSection from '../src/components/sections/Contact';

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
      <ContactSection show_header={false} />

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
