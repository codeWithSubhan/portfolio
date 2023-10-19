import './testimonial.css';
import { Data } from './Data';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import About from '../about/About';

function Testimonial() {
  return (
    <>
      <About />
      <section className='testimonial container section'>
        <h2 className='section__title'>Know More</h2>
        <span className='section__subtitle'>I love most</span>

        <Swiper
          className='testimonial__container'
          spaceBetween={24}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            575: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          }}
          modules={[Pagination]}
        >
          {Data.map(({ id, image, title, description }) => (
            <SwiperSlide className='testimonial__card' key={id}>
              <img src={image} alt='' className='testimonial__img' />

              <h3 className='testimonial__name'>{title}</h3>
              <p className='testimonial__description'>{description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default Testimonial;
