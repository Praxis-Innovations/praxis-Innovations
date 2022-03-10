import styled from 'styled-components'

const Wrapper = styled.header`
  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }

  /* @media screen and (min-width: 992px) {
    .section {
      width: 95vw;
    }
  } */

  /*
=============== 
Navbar
===============
*/
  nav {
    background: var(--light);
    padding: var(--margin);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 100%;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-center {
    padding: 1rem 0;
  }
  .nav-toggle {
    font-size: 1.5rem;
    color: var(--heading);
    background: transparent;
    border-color: transparent;
    transition: all 0.3s linear;
    cursor: pointer;
  }
  .nav-toggle:hover {
    color: #03befc;
    transform: rotate(90deg);
  }
  .logo {
    height: 40px;
  }
  .links a {
    color: var(--heading);
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    display: block;
    padding: 0.5rem 1rem;
    transition: all 0.3s linear;
  }
  .links a:hover {
    background: #dae8f2;
    color: #03befc;
    padding-left: 1.5rem;
  }

  .links-container {
    height: 0;
    overflow: hidden;
    transition: all 0.3s linear;
  }
  .show-container {
    height: 10rem;
  }
  @media screen and (min-width: 1000px) {
    nav {
      padding: 0 10%;
    }
    .nav-center {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .nav-toggle {
      display: none;
    }
    .links-container {
      height: auto !important;
    }
    .links {
      display: flex;
    }
    .links a {
      padding: 0;
      margin: 0 0.5rem;
    }
    .links a:hover {
      padding: 0;
      background: transparent;
    }
  }
  /* nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    /* position: sticky; */
  /* }

  .logo {
    display: flex;
    justify-content: center;
    align-items: start;
    width: 300px;
    margin-bottom: 1.5rem;
  }  */

  /* .nav-links li {
    display: inline-block;
    font-size: 1.25rem;
    text-transform: capitalize;
    padding: 2rem 0;
    color: rgb(0, 164, 244);
  }
  .nav-links a {
    text-decoration: none;
    font-size: 1.25rem;
    text-transform: capitalize;
    padding: 1rem 1rem;
    color: rgb(0, 164, 244);
    transition: all 0.3s linear;
    letter-spacing: 0.1rem;
  } */
  /* .nav-links a:hover {
    /* background: rgb(0, 164, 244); */
  /* color: #03befc;
  }
  .toggle-btn {
    display: none;
  }

  @media screen and (max-width: 1000px) {
  } */
`

  export default Wrapper;