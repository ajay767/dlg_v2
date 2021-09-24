import React from 'react';
import Link from 'next/link';
import PageWrapper from '@layout/PageWrapper';
import Section from '@layout/Section';
import Typography from '@components/Typography';
import Button from '@components/Button';
import Countdown from 'react-countdown';

function index() {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    const hour = Math.floor(hours / 10);
    const day = Math.floor(days / 10);
    const min = Math.floor(minutes / 10);
    const sec = Math.floor(seconds / 10);
    return (
      <div className="flex-center ">
        <div className="mx-4 flex flex-col justify-center items-center">
          <Typography type="content">Days</Typography>
          <Typography type="primary">{day ? days : `0${days}`}</Typography>
        </div>
        :
        <div className="mx-4 flex flex-col justify-center items-center">
          <Typography type="content">Hour</Typography>
          <Typography type="primary">{hour ? hours : `0${hours}`}</Typography>
        </div>
        :
        <div className="mx-4 flex flex-col justify-center items-center">
          <Typography type="content">Min</Typography>
          <Typography type="primary">
            {min ? minutes : `0${minutes}`}
          </Typography>
        </div>
        :
        <div className="mx-4 flex flex-col justify-center items-center">
          <Typography type="content">Sec</Typography>
          <Typography type="primary">
            {sec ? seconds : `0${seconds}`}
          </Typography>
        </div>
      </div>
    );
  };
  return (
    <PageWrapper>
      <Section style={{ minHeight: '60vh' }}>
        <div
          style={{ minHeight: '50vh' }}
          className="flex justify-center  items-center flex-col text-gray-600 "
        >
          <Typography type="secondary" className="mb-2">
            Quiz Mania
          </Typography>
          <Typography
            type="content"
            className="w-10/12 md:w-4/12 mx-auto text-center mb-10"
          >
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical
          </Typography>
          <Typography type="primary">
            <Countdown
              renderer={renderer}
              date={Date.now() + 5 * 24 * 60 * 60 * 1000}
            />
          </Typography>
          <Link href="/quiz/614b8907fa70ca2c34297a1b">
            <a>
              <Button btnType="hero" className="my-5 bg-blue-500">
                Enter
              </Button>
            </a>
          </Link>
        </div>
      </Section>
    </PageWrapper>
  );
}

export default index;
