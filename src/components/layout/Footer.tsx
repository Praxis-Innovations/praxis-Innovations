import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  padding: 0 10%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--light);
  height: 80.5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  p {
    display: inline-block;
    color: var(--heading);
    padding: 1rem;
    margin: 0;
  }
`;

const Footer: React.FC = () => {
  // automatically updates year 
  const year = new Date().getFullYear();
  
  return (
    <FooterSection>
      <p>&#169;<span> {year}</span> Praxis Innovations</p> 
    </FooterSection>
  );
};

export default Footer;
