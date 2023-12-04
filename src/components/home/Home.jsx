import About from '../about/About';
import Card from '../portfolio/Card';
import Data from './Data';
// import ScrollDown from './ScrollDown';
import Social from './Social';
import './home.css';

import js from '../../assests/js.png';
import htmlcss from '../../assests/htmcss.jpg';
import reactjs from '../../assests/react.png';
const data = [
  { image: reactjs, title: 'Reactjs', code: '' },
  { image: js, title: 'Javascript', code: '' },
  { image: htmlcss, title: 'Html/Css', code: '' },
];

function Home() {
  return (
    <>
      <section className='section home' id='home'>
        <div className='home__container container grid'>
          <div className='home__content grid'>
            <Social />
            <div className='home__img' title='This is Subhan'></div>
            <Data />
          </div>
          {/* <ScrollDown /> */}
        </div>
      </section>
      <About />
      <Card data={data} />
    </>
  );
}

export default Home;
