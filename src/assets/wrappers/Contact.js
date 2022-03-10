import styled from 'styled-components'

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
  .section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10rem;
    margin: var(--margin);
    padding: 7rem 0;

    .contact-section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      justify-content: center;
      column-gap: 5rem;

      img {
        width: 100%;
      }
    }

    h2 {
      font-size: 26px;
      font-weight: 300;
      color: #334e68;
    }
    p {
      font-size: 18px;
    }
    a {
      text-decoration: none;
      color: var(--heading);
    }

    form {
      input,
      textarea {
        width: 100%;
        padding: 0.5rem 1rem;
        margin: 0.5rem 0;
        border: 1px solid #486581;
      }
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      textarea {
        min-height: 150px;
      }
      button {
        margin: 0.5rem 0;
      }
    }
  }

  @media screen and (max-width: 1500px) {
    section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 5rem;
    }
    .contact-section {
      display: grid;
      grid-template-columns: 0.25fr;
      grid-gap: 0;
    }
    .contact-info {
      grid-column: 1;
    }
    img {
      display: none;
    }
  }

  @media screen and (max-width: 1000px) {
    .section {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 5rem;
    }
    .contact-info {
      display: grid;
      grid-column: 1;
    }
    img {
      display: none;
    }
  }
  @media screen and (max-width: 680px) {

    .contact-section {
      display: grid;
      grid-template-columns: 1fr;
    }
    .contact-info {
      width: 100%;
    }
  }
  /* @media screen and (max-width: 480px) {
    img {
      display: none;
    }
    .contact-section {
      display: grid;
      grid-template-columns: 1fr;
    }
  } */
`

export default Wrapper;