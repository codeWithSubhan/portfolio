import { useState } from 'react';
import Card from './Card';
import data from './Data';
import Tabs from './Tabs';

function Portfolio() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([...data]);
  const [activeTab, setactiveTab] = useState('all');

  function handleQuery(e) {
    const searchTerm = e.target.value;
    setQuery(searchTerm);
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );
    setResults(filtered);
  }

  function handleTabs(e) {
    if (!e.target.innerHTML) return;
    setactiveTab(e.target.innerHTML.toLowerCase().trim());

    if (e.target.innerHTML.toLowerCase().trim() == 'all')
      return setResults(data);

    setResults(
      data.filter((item) =>
        item.keyword
          .toLowerCase()
          .trim()
          .includes(e.target.innerHTML.toLowerCase().trim())
      )
    );
  }

  return (
    <section className='section projects'>
      <h2 className='section__title'>Portfolio</h2>
      <span className='section__subtitle'>My Projects</span>
      <Tabs
        query={query}
        setQuery={setQuery}
        handleQuery={handleQuery}
        handleTabs={handleTabs}
        activeTab={activeTab}
      />
      <Card data={results} no_container='true' />
    </section>
  );
}

export default Portfolio;
