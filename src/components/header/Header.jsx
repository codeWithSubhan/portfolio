import { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [Toggle, showMenu] = useState(false);

  window.addEventListener('scroll', function () {
    const scrollUp = document.querySelector('.header');
    if (this.scrollY >= 560) scrollUp.classList.add('show-header');
    else scrollUp.classList.remove('show-header');
  });
  return (
    <header className='header'>
      <div className='slow'>
        <nav className='nav container'>
          <a href='index.html' className='nav__logo'>
            subhan
          </a>

          <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
            <ul className='nav__list grid'>
              <li className='nav__item'>
                <Link to='/' className='nav__link active-link'>
                  <i className='uil uil-estate nav__icon'></i>Home
                </Link>
              </li>
              <li className='nav__item'>
                <Link to='about' className='nav__link'>
                  <i className='uil uil-user nav__icon'></i>About
                </Link>
              </li>
              <li className='nav__item'>
                <Link to='skills' className='nav__link'>
                  <i className='uil uil-file-alt nav__icon'></i>Skills
                </Link>
              </li>
              <li className='nav__item'>
                <Link to='qualification' className='nav__link'>
                  <i className='uil uil-briefcase nav__icon'></i>
                  Qualification
                </Link>
              </li>
              <li className='nav__item'>
                <Link to='portfolio' className='nav__link'>
                  <i className='uil uil-scenery nav__icon'></i>
                  Porfolio
                </Link>
              </li>
              <li className='nav__item'>
                <Link to='contact' className='nav__link'>
                  <i className='uil uil-message nav__icon'></i>Contact
                </Link>
              </li>
            </ul>
            <i
              className='uil uil-times nav__close'
              onClick={() => showMenu(!Toggle)}
            ></i>
          </div>

          <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
            <i className='uil uil-apps'></i>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
