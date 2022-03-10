import styled from "styled-components";

const Wrapper = styled.section`
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
`

export default Wrapper