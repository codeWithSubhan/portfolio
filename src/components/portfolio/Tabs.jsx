function Tabs() {
  return (
    <div className='filter__section'>
      <div className='work__filters'>
        <div className='search__project'>
          <input type='text' placeholder='search projects' />
          <i className='bx bx-search-alt-2 search__icon'></i>
        </div>
        <div className='search__tabs'>
          <span className='work__item active__work'>All</span>
          <span className='work__item'>Html/Css</span>
          <span className='work__item'>Javascript</span>
          <span className='work__item'>Reactjs</span>
          <span className='work__item'>E-commerce</span>
          <span className='work__item'>Games</span>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
