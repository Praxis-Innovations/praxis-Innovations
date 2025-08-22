import React from 'react';
import styled from 'styled-components';
import { services } from '../../constants/data';

const ServicesSection = styled.section`
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
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 2rem;
    margin: var(--margin);
    padding: 3rem 0;
  }
  article {
    background: var(--white);
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: all 0.3s linear;
  }
  article:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
  span {
    display: block;
    margin-bottom: 1rem;
  }
  h5 {
    color: var(--heading);
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }
  p {
    color: var(--text);
    line-height: 1.6;
  }
`;

const Services: React.FC = () => {
  return (
    <ServicesSection className='light' id='service'>
      <h3>Services</h3>
      <div className='container'>
        {services.map((service, index) => {
          const { icon, title, about } = service;
          return (
            <div key={index}>
              <article>
                <span>{icon}</span>
                <h5>{title}</h5>
                <p>{about}</p>
              </article>
            </div>
          );
        })}
      </div>
    </ServicesSection>
  );
};

export default Services;
