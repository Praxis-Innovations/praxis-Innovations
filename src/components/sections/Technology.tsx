import React from 'react';
import styled from 'styled-components';
import { stacks } from '../../constants/data';

const TechnologySection = styled.section`
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
    color: var(--white);
  }
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
    margin: var(--margin);
    padding: 3rem 0;
  }
  article {
    background: var(--dark);
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    text-align: center;
    transition: all 0.3s linear;
    border: 1px solid var(--heading);
  }
  article:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
  }
  .inline {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  span {
    display: block;
  }
  h4 {
    color: var(--white);
    margin: 0;
    font-size: 1.2rem;
  }
  p {
    color: var(--light);
    line-height: 1.6;
  }
`;

const Technology: React.FC = () => {
  return (
    <TechnologySection className='dark' id='tech'>
      <h3>Technology</h3>
      <div className='container'>
        {stacks.map((stack, index) => {
          const { icon, title, about } = stack;
          return (
            <div key={index}>
              <article>
                <div className='inline'>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                </div>
                <p>{about}</p>
              </article>
            </div>
          );
        })}
      </div>
    </TechnologySection>
  );
};

export default Technology;
