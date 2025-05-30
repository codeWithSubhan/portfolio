function Tabs({ query, handleQuery, handleTabs, activeTab = "all" }) {
  return (
    <div className="filter__section">
      <div className="work__filters">
        <div className="search__project">
          <input
            type="text"
            placeholder="search projects"
            value={query}
            onChange={handleQuery}
          />
          <i className="bx bx-search-alt-2 search__icon"></i>
        </div>
        <div className="search__tabs" onClick={handleTabs}>
          <span
            className={`work__item ${
              activeTab == "all" ? "active__work" : ""
            } `}
          >
            All
          </span>
          <span
            className={`work__item ${
              activeTab == "html/css" ? "active__work" : ""
            } `}
          >
            Html/Css
          </span>
          <span
            className={`work__item ${
              activeTab == "javascript" ? "active__work" : ""
            } `}
          >
            Javascript
          </span>
          <span
            className={`work__item ${
              activeTab == "reactjs" ? "active__work" : ""
            } `}
          >
            Reactjs
          </span>
          <span
            className={`work__item ${
              activeTab == "nextjs" ? "active__work" : ""
            } `}
          >
            Nextjs
          </span>
          <span
            className={`work__item ${
              activeTab == "Typescript" ? "active__work" : ""
            } `}
          >
            Typescript
          </span>
          <span
            className={`work__item ${
              activeTab == "e-commerce" ? "active__work" : ""
            } `}
          >
            E-commerce
          </span>
          <span
            className={`work__item ${
              activeTab == "games" ? "active__work" : ""
            } `}
          >
            Games
          </span>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
