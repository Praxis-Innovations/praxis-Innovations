import React from 'react';
import { Navbar, Landing, Services, Technology, About, Contact, Footer} from '../src/components';

export default function HomePage() {
  return (
    <>
      <div id='home' className='home'>
        <Navbar />
        <Landing />
        <Services />
        <Technology />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
