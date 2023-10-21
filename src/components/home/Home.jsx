import About from '../about/About';
import Card from '../portfolio/Card';
import Data from './Data';
// import ScrollDown from './ScrollDown';
import Social from './Social';
import './home.css';

import js from '../../assests/js.png';
import htmlcss from '../../assests/htmcss.jpg';
import reactjs from '../../assests/react.svg';
const data = [
  { image: htmlcss, title: 'Html/Css', code: '' },
  { image: js, title: 'Javascript', code: '' },
  { image: reactjs, title: 'Reactjs', code: '' },
];

function Home() {
  return (
    <section className='home' id='home'>
      <div className='home__container container grid'>
        <div className='home__content grid'>
          <Social />
          <div className='home__img' title='This is Subhan'></div>
          <Data />
        </div>
        {/* <ScrollDown /> */}
      </div>

      <About />
      <Card data={data} />
    </section>
  );
}

export default Home;
