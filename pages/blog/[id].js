import { useState, useRef } from 'react';
import Section from '@layout/Section';
import BlogCard from '@front/BlogCard';
import Typography from '@components/Typography';
import Button from '@components/Button';
import BlogMarkdown from '@components/BlogMarkdown';

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
         <BlogMarkdown data={} />
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
