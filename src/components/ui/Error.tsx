import React from 'react';
import styled from 'styled-components';

const ErrorSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  background: var(--light);
  
  img {
    width: 300px;
    margin-bottom: 2rem;
  }
  
  h3 {
    color: var(--heading);
    margin-bottom: 1rem;
    font-size: 2rem;
  }
  
  p {
    color: var(--text);
    font-size: 1.1rem;
  }
  
  @media screen and (max-width: 600px) {
    img {
      width: 200px;
    }
    
    h3 {
      font-size: 1.5rem;
    }
  }
`;

const Error: React.FC = () => {
  return (
    <ErrorSection>
      <div>
        <img src='/404.svg' alt='error' />
        <h3>ohh! page not found</h3>
        <p>We can't seem to find the page you're looking for</p>
      </div>
    </ErrorSection>
  );
};

export default Error;
