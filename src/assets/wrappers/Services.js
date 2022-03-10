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
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5rem;
    margin: var(--margin);
    padding: 3rem 0;
  }
  article {
    background: var(--dark);
    padding: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span,
    h5 {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    h5 {
      color: #334e68;
      font-weight: 600;
      padding-top: 10px;
    }
  }

  @media screen and (max-width: 1000px) {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin: var(--margin);
      grid-gap: 1rem;
    }
  }

  @media screen and (max-width: 480px) {
    .container {
      display: grid;
      grid-template-columns: 1fr;
      margin: var(--margin);
      grid-gap: 1rem;
    }
  }
`
export default Wrapper;