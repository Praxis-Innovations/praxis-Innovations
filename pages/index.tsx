import Layout from '../src/components/layout/Layout';
import Hero from '../src/components/sections/Hero';
import Services from '../src/components/sections/Services';
import About from '../src/components/sections/About';
import Technology from '../src/components/sections/Technology';
import Contact from '../src/components/sections/Contact';

export default function Home() {
  return (
    <Layout
      title="Praxis Innovations - Modern Software Solutions"
      description="We build modern software for ambitious companies. Expert software development, UI/UX design, and digital transformation consulting."
      keywords="software development, web development, mobile apps, UI/UX design, digital transformation, consulting"
    >
      <Hero />
      <Services />
      <About />
      <Technology />
      <Contact />
    </Layout>
  );
}
