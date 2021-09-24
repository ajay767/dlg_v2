import { useState, useRef } from 'react';
import Section from '../layout/Section';
import Typography from '../Typography';
import BlogCard from './BlogCard';

import SwiperNavigation from '@components/swiper/NavButton';
import SwiperSection from '@components/swiper/SwiperSection';

function Blogging({ blogs }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Section className="my-10">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <Typography className="text-gray-700" type="secondary">
            Latest Blogs
          </Typography>
          <Typography className="text-gray-500" type="header-caption">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
        </div>
        <SwiperNavigation nextRef={nextRef} prevRef={prevRef} />
      </div>

      <SwiperSection
        className="my-10"
        data={blogs}
        nextRef={nextRef}
        prevRef={prevRef}
        component={BlogCard}
      />
    </Section>
  );
}

export default Blogging;
