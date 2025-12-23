const Contact = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Let's{' '}
            <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Ready to start your next project? Get in touch with us and let's discuss 
            how we can help bring your vision to life.
          </p>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          {/* Email Contact */}
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Get in Touch
            </h3>
            <p className="text-neutral-600 mb-6">
              Drop us an email and we'll get back to you as soon as possible.
            </p>
            <a
              href="mailto:info.praxisinnovations@gmail.com"
              className="inline-flex items-center text-xl font-medium text-primary-600 hover:text-primary-700 transition-colors duration-200"
            >
              info.praxisinnovations@gmail.com
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mt-12">
            <h4 className="font-semibold text-neutral-900 mb-4">
              Why Choose Us?
            </h4>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-600">
              <span className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-2"></span>
                Free consultation
              </span>
              <span className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-2"></span>
                Transparent pricing
              </span>
              <span className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-2"></span>
                Ongoing support
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
