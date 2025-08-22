import React from 'react';
import styled from 'styled-components';
import { FaRocket } from 'react-icons/fa';

const LandingSection = styled.section`
  .page {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: center;
    text-align: justify;
    margin: var(--margin);
    padding: 5rem 0 20px;
    grid-gap: 10rem;
  }

  .info {
    margin-top: 3rem;
  }
  h1 {
    font-weight: 900;
    color: #334e68;
    span {
      color: var(--heading);
    }
  }

  .img-1 {
    width: 100%;
    display: block;
    object-fit: cover;
    padding-top: -5rem;
  }

  .img {
    width: 100%;
    display: block;
    object-fit: cover;
  }

  @media screen and (max-width: 1000px) {
    .page {
      grid-gap: 3rem;
    }
    .main-img {
      display: none;
    }
    .info {
      margin: 7rem 0;
    }
  }

  @media screen and (max-width: 600px) {
    .page {
      display: grid;
      grid-template-columns: 1fr;
    }
    .img {
      display: none;
    }
  }
`;

const Landing: React.FC = () => {
  return (
    <LandingSection>
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
          <img src='/landing-1.svg' alt='team' className='img-1 main-img' />
        </div>
        <img src='/landing.svg' alt='landing-page-img' className='img' />
      </div>
    </LandingSection>
  );
};

export default Landing;
