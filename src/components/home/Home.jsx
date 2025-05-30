import About from "../about/About";
import Card from "../portfolio/Card";
import Data from "./Data";
// import ScrollDown from './ScrollDown';
import Social from "./Social";
import "./home.css";

import js from "../../assests/js.png";
import ts from "../../assests/Typescript.png";
import htmlcss from "../../assests/htmcss.jpg";
import reactjs from "../../assests/react.png";
import nextjs from "../../assests/nextjs.png";
import node from "../../assests/Node.svg";
const data = [
  { image: reactjs, title: "Reactjs", code: "" },
  { image: nextjs, title: "Nextjs", code: "" },
  { image: js, title: "Javascript", code: "" },
  { image: ts, title: "Typescript", code: "" },
  { image: htmlcss, title: "Html/Css", code: "" },
  { image: node, title: "Nodejs", code: "" },
];

function Home() {
  return (
    <>
      <section className="section home" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <Social />
            <div className="home__img" title="This is Subhan"></div>
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
