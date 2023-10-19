import { Link } from 'react-router-dom';
import './footer.css';
function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <h1 className='footer__title'>
          <Link to='/'>Subhan</Link>
        </h1>

        <ul className='footer__list'>
          <li>
            <Link to='about' className='footer__link'>
              About
            </Link>
          </li>
          <li>
            <Link to='portfolio' className='footer__link'>
              Projects
            </Link>
          </li>
          <li>
            <Link to='skills' className='footer__link'>
              Skills
            </Link>
          </li>
        </ul>

        <div className='footer__social'>
          <a
            href='#'
            className='footer__social-link'
            title='github'
            onClick={(e) => {
              e.preventDefault();
              alert('I am working on it');
            }}
          >
            <i className='bx bxl-facebook'></i>
          </a>
          <a
            href='#'
            className='footer__social-link'
            onClick={(e) => {
              e.preventDefault();
              alert('I am working on it');
            }}
          >
            <i className='bx bxl-linkedin'></i>
          </a>
          <a
            href='#'
            className='footer__social-link'
            onClick={(e) => {
              e.preventDefault();
              alert('I am working on it');
            }}
          >
            <i className='bx bxl-twitter'></i>
          </a>
        </div>

        <span className='footer__copy'>&#169; Subhan. All rights reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
