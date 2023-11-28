import { Link } from 'react-router-dom';
import './footer.css';
import toast from 'react-hot-toast';
function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <h1 className='footer__title'>
          <Link to='/'>Subhan</Link>
        </h1>

        <ul className='footer__list'>
          <li>
            <Link to='qualification' className='footer__link'>
              Experience
            </Link>
          </li>
          <li>
            <Link to='skills' className='footer__link'>
              Skills
            </Link>
          </li>
          <li>
            <Link to='portfolio' className='footer__link'>
              Projects
            </Link>
          </li>
        </ul>

        <div className='footer__social'>
          <a
            href='https://www.facebook.com/profile.php?id=61553167987349'
            className='footer__social-link'
            title='facebook'
            target='_blank'
            rel='noreferrer'
          >
            <i className='bx bxl-facebook'></i>
          </a>
          <a
            href='#'
            className='footer__social-link'
            onClick={(e) => {
              e.preventDefault();
              toast.error('I am working on it');
            }}
          >
            <i className='bx bxl-linkedin'></i>
          </a>
          <a
            href='#'
            className='footer__social-link'
            onClick={(e) => {
              e.preventDefault();
              toast.error('I am working on it');
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
