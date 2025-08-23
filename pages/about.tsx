import Layout from '../src/components/layout/Layout';
import Link from 'next/link';

export default function About() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in technology and business strategy.',
      image: '/team/sarah.jpg',
      linkedin: '#'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Expert in scalable architecture and emerging technologies.',
      image: '/team/michael.jpg',
      linkedin: '#'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      bio: 'Award-winning designer focused on user-centered experiences.',
      image: '/team/emily.jpg',
      linkedin: '#'
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      bio: 'Full-stack expert passionate about clean code and innovation.',
      image: '/team/david.jpg',
      linkedin: '#'
    }
  ];

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
    },
    {
      icon: '🔒',
      title: 'Trust & Security',
      description: 'We prioritize the security and privacy of our clients\' data and systems.'
    },
    {
      icon: '🌍',
      title: 'Global Impact',
      description: 'We\'re committed to using technology to solve real-world problems and make a positive impact.'
    }
  ];

  const milestones = [
    { year: '2019', title: 'Company Founded', description: 'Praxis Innovations was established with a vision to democratize technology.' },
    { year: '2020', title: 'First 10 Clients', description: 'Successfully delivered projects for our first 10 clients across various industries.' },
    { year: '2021', title: 'Team Expansion', description: 'Grew our team to 15+ professionals and opened our second office.' },
    { year: '2022', title: '100+ Projects', description: 'Reached the milestone of 100+ successful project deliveries.' },
    { year: '2023', title: 'AI Integration', description: 'Launched our AI and machine learning service offerings.' },
    { year: '2024', title: 'Global Reach', description: 'Expanded to serve clients across 20+ countries worldwide.' }
  ];

  return (
    <Layout
      title="About Us - Praxis Innovations"
      description="Learn about Praxis Innovations, our mission, values, team, and journey in building modern software solutions for ambitious companies."
      keywords="about us, team, mission, values, company history, software company"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            About{' '}
            <span className="gradient-text">Praxis Innovations</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We're a team of passionate technologists, designers, and strategists 
            dedicated to building the future through innovative software solutions.
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
                access to world-class technology that helps them achieve their goals and 
                serve their customers better.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Through our expertise in software development, design, and digital transformation, 
                we help organizations navigate the complex digital landscape and emerge stronger, 
                more agile, and more competitive.
              </p>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                To be the leading technology partner for ambitious companies worldwide, 
                known for our innovative solutions, exceptional quality, and unwavering 
                commitment to client success.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                We envision a future where technology is accessible, intuitive, and 
                transformative for businesses of all sizes, enabling them to achieve 
                their full potential and make a positive impact on the world.
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
              to how we build our team and develop our solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Team */}
      <section className="section-padding bg-white" id="team">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
              Meet Our{' '}
              <span className="gradient-text">Team</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              We're a diverse team of experts passionate about technology and committed 
              to delivering exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="card text-center group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-accent-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
                <a
                  href={member.linkedin}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  <span>LinkedIn</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
              Our{' '}
              <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted technology partner, 
              here's how we've grown and evolved over the years.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary-200 h-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <div className="text-2xl font-bold text-primary-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-neutral-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
            take your business to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-neutral-100 font-medium px-8 py-3 rounded-lg transition-all duration-300">
              Get Started
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
