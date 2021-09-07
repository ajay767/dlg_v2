import React from 'react';
import PageWrapper from '@layout/PageWrapper';
import Section from '@layout/Section';
import Image from '@components/Image';
import Typography from '@components/Typography';
import Link from 'next/link';

function index() {
  return (
    <PageWrapper>
      <Section className="text-gray-500">
        <div className="w-full md:w-10/12 xl:w-8/12 p-0 md:p-5 ">
          {new Array(6).fill(-2).map((blog, index) => {
            return (
              <Link href="/blog/aha">
                <a>
                  <div
                    className="mb-10 flex justify-between items-start"
                    key={index}
                  >
                    <Image
                      className="h-36 hidden md:block  md:w-4/12 mr-4 rounded "
                      src="/assets/images/meet.jpg"
                    />
                    <div className="w-full md:w-8/12">
                      <Typography type="section" className="font-bold">
                        Why you should join DLG
                      </Typography>
                      <Typography
                        type="header-caption"
                        className="overflow-clip "
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                      </Typography>
                    </div>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </Section>
    </PageWrapper>
  );
}

export default index;
