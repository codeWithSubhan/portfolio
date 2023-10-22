import { Link } from 'react-router-dom';
import './card.css';
function Card({ data, no_container = false }) {
  if (!no_container) {
    return (
      <section className='section container'>
        <h2 className='section__title'>Portfolio</h2>
        <span className='section__subtitle'>My Projects</span>
        <div className='home_portfolio'>
          {data.map((card, i) => (
            <Link to='portfolio' key={i}>
              <div className='portfolio__card'>
                <div className='image'>
                  <img src={card.image} className='portfolio__img' />
                </div>

                <h3 className='portfolio__title '>{card.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    );
  }
  return (
    <div className='home_portfolio'>
      {data.map((card, i) => (
        <a href={card.demo} rel='noreferrer' target='_blank' key={i}>
          <div className='portfolio__card'>
            <div className='image'>
              <img src={i + '.PNG'} className='portfolio__img' />
            </div>
            <h3 className='portfolio__title '>{card.title}</h3>
            <span className='about__subtitle'>
              <a href={card.code} rel='noreferrer' target='_blank'>
                <i className='uil uil-github-alt'></i> source code
              </a>
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Card;
