import React from 'react';

const Technology = () => {
  const techCategories = [
    {
      title: 'Frontend',
      technologies: [
        { name: 'React', icon: '⚛️' },
        { name: 'Next.js', icon: '⚡' },
        { name: 'TypeScript', icon: '🔷' },
        { name: 'Tailwind CSS', icon: '🎨' },
        { name: 'Vue.js', icon: '💚' },
        { name: 'Angular', icon: '🅰️' }
      ]
    },
    {
      title: 'Backend',
      technologies: [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Python', icon: '🐍' },
        { name: 'Java', icon: '☕' },
        { name: 'Go', icon: '🐹' },
        { name: 'PHP', icon: '🐘' },
        { name: 'Ruby', icon: '💎' }
      ]
    },
    {
      title: 'Mobile',
      technologies: [
        { name: 'React Native', icon: '📱' },
        { name: 'Flutter', icon: '🦋' },
        { name: 'iOS (Swift)', icon: '🍎' },
        { name: 'Android (Kotlin)', icon: '🤖' },
        { name: 'Ionic', icon: '⚡' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      technologies: [
        { name: 'AWS', icon: '☁️' },
        { name: 'Azure', icon: '🔷' },
        { name: 'Google Cloud', icon: '☁️' },
        { name: 'Docker', icon: '🐳' },
        { name: 'Kubernetes', icon: '⚓' },
        { name: 'Terraform', icon: '🏗️' }
      ]
    },
    {
      title: 'Databases',
      technologies: [
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'Redis', icon: '🔴' },
        { name: 'MySQL', icon: '🐬' },
        { name: 'Elasticsearch', icon: '🔍' }
      ]
    },
    {
      title: 'AI & ML',
      technologies: [
        { name: 'TensorFlow', icon: '🧠' },
        { name: 'PyTorch', icon: '🔥' },
        { name: 'OpenAI API', icon: '🤖' },
        { name: 'Scikit-learn', icon: '📊' },
        { name: 'Hugging Face', icon: '🤗' }
      ]
    }
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Built with{' '}
            <span className="gradient-text">Modern Technology</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            We leverage the latest technologies and best practices to build scalable, 
            maintainable, and future-proof solutions for our clients.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="card group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-neutral-900 mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center text-center p-3 rounded-lg bg-neutral-50 group-hover:bg-primary-50 transition-all duration-200"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (techIndex * 0.05)}s` }}
                  >
                    <div className="text-2xl mb-2">{tech.icon}</div>
                    <span className="text-sm font-medium text-neutral-700 group-hover:text-primary-700">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6">
              Always Learning, Always Growing
            </h3>
            <p className="text-lg text-neutral-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Technology evolves rapidly, and so do we. Our team continuously learns and 
              adopts new technologies to ensure we're always delivering the best possible 
              solutions for our clients.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-neutral-600">Technologies Mastered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-600 mb-2">100+</div>
                <div className="text-neutral-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-neutral-600">Learning & Innovation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
