import styled from 'styled-components'
const Wrapper = styled.section`
  .page {
    /* min-height: calc(100vh - 6rem); */
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: center;
    text-align: justify;
    /* margin-top: -3rem; */
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
`
export default Wrapper
