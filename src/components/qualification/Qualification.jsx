import { useState } from 'react';
import './qualification.css';

function Qualification() {
  const [toggle, setToggle] = useState(1);
  function toggleFn(index) {
    setToggle(index);
  }
  return (
    <section className='qualificatin section'>
      <h2 className='section__title'>Qualificatin</h2>
      <span className='section__subtitle'>My Journey</span>

      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          <div
            className={
              toggle === 1
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleFn(1)}
          >
            <i className='uil uil-graduation-cap qualification__icon'>
              Education
            </i>
          </div>

          <div
            className={
              toggle === 2
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleFn(2)}
          >
            <i className='uil uil-briefcase-alt qualification__icon'>
              Experience
            </i>
          </div>
        </div>

        <div className='qualification__sections'>
          <div
            className={
              toggle === 1
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>BCA Graduation</h3>
                <span className='qualification__subtitle'>Ignou - Delhi</span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> 2022
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>...</h3>
                <span className='qualification__subtitle'>__ - Delhi</span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> 2021
                </div>
              </div>
            </div>

            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>
                  12<sup>th</sup>
                </h3>
                <span className='qualification__subtitle'>CBSE - Delhi</span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> 2018
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>HTML</h3>
                <span className='qualification__subtitle'>
                  W<sup>3</sup>schools - online
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> 2022
                </div>
              </div>
            </div>

            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>CSS</h3>
                <span className='qualification__subtitle'>
                  Yahoo Baba - Youtube
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> 2022
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>Javascript</h3>
                <span className='qualification__subtitle'>
                  Jonas - Udemy Course
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> 2023
                </div>
              </div>
            </div>

            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Reactjs</h3>
                <span className='qualification__subtitle'>
                  Jonas - Udemy Course
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> 2023
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggle === 2
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Optivsio Infotect</h3>
                <span className='qualification__subtitle'>
                  Faridabad - Delhi
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> 2023 - reactjs
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>Kliff Technology</h3>
                <span className='qualification__subtitle'>
                  Rajapuri Road - Delhi
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> 2023 - reactjs
                </div>
              </div>
            </div>

            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Nsspl</h3>
                <span className='qualification__subtitle'>
                  Naraina Vihar - Delhi
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> 2022 - reactjs
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
