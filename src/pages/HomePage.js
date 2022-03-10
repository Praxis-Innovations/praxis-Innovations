import { Navbar, Landing, Services, Technology, About, Contact, Footer} from '../components';


const Home = () => {
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

export default Home;