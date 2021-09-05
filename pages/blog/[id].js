import { useState, useRef } from 'react';
import Section from '@layout/Section';
import Header from '@front/Header';
import Footer from '@front/Footer';
import BlogCard from '@front/BlogCard';
import Typography from '@components/Typography';
import Button from '@components/Button';
import Image from 'next/image';
import Gist from 'react-gist';

import SwiperNavigation from '@components/swiper/NavButton';
import SwiperSection from '@components/swiper/SwiperSection';
import PageWrapper from '../../components/layout/PageWrapper';

function BlogPage() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [loadCommentBtn, setLoadCommentBtn] = useState(true);

  const loadComments = () => {
    setLoadCommentBtn(false);

    window.disqus_config = function () {
      this.page.url = window.location.href;
      this.page.identifier = 'ddhidhfu';
    };

    const script = document.createElement('script');
    script.src = 'https://dlgmits.disqus.com/embed.js';
    script.setAttribute('data-timestamp', Date.now().toString());

    document.body.appendChild(script);
  };

  return (
    <PageWrapper>
      <Section>
        <div className="blog__container text-gray-600 mb-10">
          <Typography type="secondary" className="text-gray-700">
            Why you should join us?
          </Typography>
          <Typography type="content" className="my-5">
            Wired is a <span className="highlight">massively</span> popular
            publication, good at capturing real insights into the tech world, no
            stranger to topics like <span className="bold">technology</span>,
            entertainment, science, culture, politics, and social media.
            Informed and comprehensive, Wired is basically the perfect tech blog
            to follow.
          </Typography>
          <div className="blog__poster">
            <Image
              placeholder="blur"
              blurDataURL="L44.b_n:DhbC.As;aJWAR4s:x^WX"
              src="/assets/images/tech.jpg"
              layout="responsive"
              width="100%"
              height="100%"
            />
          </div>

          <Typography type="content" className="my-5">
            Wired is a massively popular publication, good at capturing real
            insights into the tech world, no stranger to topics like technology,
            entertainment, science, culture, politics, and social media.
            Informed and comprehensive, Wired is basically the perfect tech blog
            to follow.
          </Typography>

          <Typography type="content" className="my-5">
            Wired is a massively popular publication, good at capturing real
            insights into the tech world, no stranger to topics like technology,
            entertainment, science, culture, politics, and social media.
            Informed and comprehensive, Wired is basically the perfect tech blog
            to follow.
          </Typography>

          <Typography type="section" className="">
            Features
          </Typography>

          <Typography type="content" className="my-5">
            Wired is a <span className="bold"> massively</span> popular
            publication, <b>good at capturing </b>
            real insights into the tech world, no stranger to topics like
            technology, entertainment, science, <b>culture</b>, politics, and
            social media. Informed and comprehensive, Wired is basically the
            perfect tech blog to follow.the tech world, no stranger to topics
            like technology, entertainment, science, culture, politics, and
            social media. Informed and <a href="/">comprehensive</a>, Wired is
            basically the perfect tech blog to follow.
          </Typography>

          <Typography type="section">Perks of DLG</Typography>
          <Typography className="list-decimal" type="list-item">
            Testing
          </Typography>
          <Typography className="list-decimal" type="list-item">
            watch money heist
          </Typography>
          <Typography className="list-decimal" type="list-item">
            next season is on december
          </Typography>

          <Gist id="013c3d1c5385ac253d0af27d06d53f06" />
          <div className="blog__poster">
            <Image
              placeholder="blur"
              blurDataURL="L44.b_n:DhbC.As;aJWAR4s:x^WX"
              src="/assets/images/tech2.jpg"
              layout="responsive"
              width="100%"
              height="100%"
            />
          </div>
          <Typography
            className="blockqoute"
            className="my-10"
            type="blockquote"
          >
            " Nothing in the life is to be feared, it is only to be
            understood... now it's the time to understand more, so that we can
            fear less." - Marie Curie
          </Typography>
          {loadCommentBtn && (
            <Button btnType="primary" onClick={loadComments}>
              Load Comments
            </Button>
          )}
          <div id="disqus_thread" className="my-5"></div>
        </div>
      </Section>
      <Section>
        <div className="mb-5 flex items-center justify-between">
          <div>
            <Typography className="text-gray-700" type="secondary">
              Related Blogs
            </Typography>
            <Typography className="text-gray-500" type="header-caption">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography>
          </div>
          <SwiperNavigation nextRef={nextRef} prevRef={prevRef} />
        </div>
        <SwiperSection
          data={new Array(9).fill(2)}
          nextRef={nextRef}
          prevRef={prevRef}
          component={BlogCard}
          className="my-10"
        />
      </Section>
    </PageWrapper>
  );
}

export default BlogPage;
