import { useState, useEffect, useRef } from 'react';
import logo from '../assets/code-speed/nav-logo-.png'
import {NavLinks} from '../assets/data';
import { FaBars } from 'react-icons/fa'
import Wrapper from '../assets/wrappers/Navbar'

const Navbar = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // for container div
  const linksContainerRef = useRef(null)

  // for ul 
  const linksRef = useRef(null)

  useEffect(() => {
    // checks height of links in ul
    const linksHeight = linksRef.current.getBoundingClientRect().height

    if (isSidebarOpen) {
      // if navbar menu is open sets height of div = height of links in ul
      // this will automatically set height of container if we add or remove links from ul

      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {

      // if navbar menu is closed sets height of div = 0

      linksContainerRef.current.style.height = '0px'
    }
  }, [isSidebarOpen]);

  const handleClick = (e) => {
    e.preventDefault();

    // get which link is clicked
    const target = e.target.getAttribute('href');
    // this gives location of each section from navbar when clicked
    const location = document.querySelector(target).offsetTop

    // this method always places navbar on top of section with corresponding id or href.
    window.scrollTo({
      left: 0,
      top: location - 80,
    });

    // automatically closes sidebar menu when clicked on menu links.
    setIsSidebarOpen(!isSidebarOpen);
  }
  return (
    <Wrapper id='nav'>
      <nav>
        <div className="nav-center">
          <div className='nav-header'>
           <a href='#home'>
              <img src={logo} alt='logo' className='logo' />
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
              const { id, url, text } = link
              return (
                <li key={id}>
                  <a href={url} onClick={handleClick}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>

        </div>
      </nav>
    </Wrapper>
  )
}

export default Navbar
