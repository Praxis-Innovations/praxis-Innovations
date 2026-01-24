import Link from 'next/link';
import { values_content } from '@/content/marketing';

const About = () => {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              About Us
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              Building the future,{' '}
              <span className="gradient-text">one project at a time</span>
            </h2>
            
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              Praxis Innovations is a forward-thinking technology company that specializes in 
              creating innovative software solutions for ambitious businesses. We believe that 
              technology should be an enabler, not a barrier, to your success.
            </p>
            
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Our team of experienced developers, designers, and consultants work together to 
              transform your ideas into powerful digital solutions that drive growth, efficiency, 
              and competitive advantage.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Link href="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
          </div>

          {/* Right Column - Values Grid */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values_content.map((value, value_idx) => (
                <div
                  key={value.id}
                  className="card text-center group hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${value_idx * 0.1}s` }}
                >
                  <value.Icon className="h-8 w-8 text-primary-600 mb-3 mx-auto" aria-hidden />
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              To empower businesses with innovative technology solutions that drive growth, 
              efficiency, and competitive advantage. We believe that every company deserves 
              access to world-class technology that helps them achieve their goals and 
              serve their customers better.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
