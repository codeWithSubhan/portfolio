import Card from './Card';
import data from './Data';
import Tabs from './Tabs';
function Portfolio() {
  return (
    <section className='section projects'>
      <h2 className='section__title'>Portfolio</h2>
      <span className='section__subtitle'>My Projects</span>
      <Tabs />
      <Card data={data} no_container='true' />
    </section>
  );
}

export default Portfolio;
