import React from 'react';
import Link from 'next/link';
import { getLatestQuiz } from '@utils/api';
import PageWrapper from '@layout/PageWrapper';
import Section from '@layout/Section';
import Typography from '@components/Typography';
import Button from '@components/Button';
import Countdown from 'react-countdown';

function Quiz({ quiz }) {
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
          {quiz.title && (
            <>
              <Typography type="secondary" className="mb-2">
                {quiz.title}
              </Typography>
              <Typography
                type="content"
                className="w-10/12 md:w-6/12 mx-auto text-center mb-10"
              >
                {quiz.description}
              </Typography>
              <Typography type="primary">
                <Countdown renderer={renderer} date={quiz.startAt} />
              </Typography>
              <Link href={`/quiz/${quiz._id}`}>
                <a>
                  <Button btnType="hero" className="my-5 bg-blue-500">
                    Enter
                  </Button>
                </a>
              </Link>
            </>
          )}
          {quiz.status === 'not found' && (
            <>
              <Typography type="primary">No Ongoing Quiz 😭</Typography>
              <Link href="/">
                <a>
                  <Button btnType="hero" className="my-5">
                    Go to home
                  </Button>
                </a>
              </Link>
            </>
          )}
        </div>
      </Section>
    </PageWrapper>
  );
}

export default Quiz;

export const getStaticProps = async () => {
  const res = await getLatestQuiz();
  console.log(res);
  return {
    props: {
      quiz: res.quiz,
    },
    revalidate: 3,
  };
};
