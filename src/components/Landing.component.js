import main from '../assets/code-speed/landing.svg'
import img from '../assets/code-speed/landing-1.svg'
import Wrapper from '../assets/wrappers/Landing'

const Landing = () => {
  return (
    <Wrapper>

    <div className='page'>
      <div className='info'>
        <h1>
          we do <span>IT</span>
        </h1>
        <p>
          I'm baby cardigan truffaut messenger bag poutine letterpress
          distillery squid irony glossier knausgaard cliche narwhal williamsburg
          farm-to-table slow-carb. Flannel craft beer everyday carry etsy
          literally 90's. Knausgaard four dollar toast offal paleo, locavore
          gluten-free quinoa four loko vice organic selfies edison bulb iPhone.
        </p>
        <a href="#contact"><button className='btn'>Contact Us</button></a>
        <img src={img} alt='team' className='img-1 main-img' />
      </div>
      <img src={main} alt='landing-page-img' className='img' />
    </div>
    </Wrapper>
  )
}

export default Landing;
