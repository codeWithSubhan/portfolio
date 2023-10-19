import About from '../about/About';
import Data from './Data';
import ScrollDown from './ScrollDown';
import Social from './Social';
import './home.css';

function Home() {
  return (
    <section className='home section' id='home'>
      <div className='home__container container grid'>
        <div className='home__content grid'>
          <Social />

          <div className='home__img' title='This is Subhan'></div>
          <Data />
        </div>

        {/* <ScrollDown /> */}
      </div>

      <About />
    </section>
  );
}

export default Home;
