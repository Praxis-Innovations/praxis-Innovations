import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { NavLinks } from '../../constants/data';
import { FaBars } from 'react-icons/fa';

const NavbarHeader = styled.header`
  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }

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
`;

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  // for container div
  const linksContainerRef = useRef<HTMLDivElement>(null);

  // for ul 
  const linksRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    // checks height of links in ul
    const linksHeight = linksRef.current?.getBoundingClientRect().height;

    if (isSidebarOpen && linksHeight !== undefined) {
      // if navbar menu is open sets height of div = height of links in ul
      // this will automatically set height of container if we add or remove links from ul
      if (linksContainerRef.current) {
        linksContainerRef.current.style.height = `${linksHeight}px`;
      }
    } else {
      // if navbar menu is closed sets height of div = 0
      if (linksContainerRef.current) {
        linksContainerRef.current.style.height = '0px';
      }
    }
  }, [isSidebarOpen]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // get which link is clicked
    const target = e.currentTarget.getAttribute('href');
    if (!target) return;
    
    // this gives location of each section from navbar when clicked
    const element = document.querySelector(target);
    if (!element) return;
    
    const location = (element as HTMLElement).offsetTop;

    // this method always places navbar on top of section with corresponding id or href.
    window.scrollTo({
      left: 0,
      top: location - 80,
    });

    // automatically closes sidebar menu when clicked on menu links.
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <NavbarHeader id='nav'>
      <nav>
        <div className="nav-center">
          <div className='nav-header'>
            <a href='#home'>
              <img src='/nav-logo-.png' alt='logo' className='logo' />
            </a>

            <button
              className='nav-toggle'
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <FaBars />
            </button>
          </div>

          <div className='links-container' ref={linksContainerRef}>
            <ul className='links' ref={linksRef}>
              {NavLinks.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url} onClick={handleClick}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </NavbarHeader>
  );
};

export default Navbar;
