import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 3rem;
    margin: var(--margin);
    font-family: 'Roboto Condensed', Sans-Serif;
    font-weight: 700;
    line-height: 1.3;
    text-transform: capitalize;
    letter-spacing: 1px;
    color: var(--heading);
  }
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10rem;
    margin: var(--margin);
    padding: 3rem 0;

    img {
      width: 100%;
    }
  }

  @media screen and (max-width: 1000px) {
    img {
      display: none;
    }
    .container {
      display: grid;
      grid-template-columns: 1fr;
      padding: 1.5rem 0;
    }
    p {
      justify-content: center;
    }
  }
`;

const About: React.FC = () => {
  return (
    <AboutSection className='light' id='about'>
      <h3>About Us</h3>
      <div className='container'>
        <img src='/about.svg' alt='some light about us' />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className='container'>
        <p>
          I'm baby la croix live-edge kombucha kogi polaroid, sriracha lo-fi
          small batch pok pok gentrify crucifix vexillologist waistcoat. Yuccie
          90's dreamcatcher hella, poutine copper mug celiac you probably
          haven't heard of them kombucha meggings hoodie cloud bread put a bird
          on it. Messenger bag drinking vinegar fashion axe, fixie green juice
          shoreditch offal neutra sustainable unicorn. Pickled offal jean shorts
          hoodie, lumbersexual tousled selvage craft beer butcher meggings
          chambray man braid yuccie.
        </p>
        <img src='/about-2.svg' alt="about" />
      </div>
    </AboutSection>
  );
};

export default About;
