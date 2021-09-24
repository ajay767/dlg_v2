import { useState } from 'react';
import { useRouter } from 'next/router';
import { getAllQuiz, getQuiz } from '@utils/api';
import PageWrapper from '@layout/PageWrapper';
import Section from '@layout/Section';
import Typography from '@components/Typography';
import Response from '@public/response.json';

import RegisterCard from '@components/front/Quiz/RegisterCard';
import QuizDashboard from '@components/front/Quiz/QuizDashboard';
import QuestionForm from '@components/front/Quiz/QuestionForm';
import toast from 'react-hot-toast';

const data = Response;
console.log(data.quiz[0].questions);

function quiz() {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const [quiz, setquiz] = useState(false);
  const [quizEnd, setQuizEnd] = useState(false);
  const [answer, setAnswer] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState(data.quiz[0].questions);

  const handleRegistrationForm = (data) => {
    console.log(data);
    if (!data.name || !data.email) {
      toast.error('Invalid Form Details');
    } else {
      setquiz(true);
    }
  };

  const selectQuestion = (index) => {
    setCurrentQuestion(index);
  };

  const handleAnswer = (questionID, answerID) => {
    setAnswer({ ...answer, [questionID]: answerID });
  };

  const handleSubmit = () => {
    console.log(answer);
    localStorage.removeItem('quiz_player');
    setQuizEnd(true);
  };

  return (
    <PageWrapper>
      <Section>
        <div className="mt-10 mb-10">
          <Typography className=" text-center text-gray-700" type="secondary">
            Quiz Menia
          </Typography>
          <Typography
            className=" text-center text-gray-500"
            type="header-caption"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
        </div>
        <div className="flex-center">
          {!quiz && (
            <RegisterCard handleRegistrationForm={handleRegistrationForm} />
          )}
          {quiz && (
            <div
              style={{ minHeight: '40vh' }}
              className="w-full grid grid-cols-12 my-10"
            >
              <div className="col-span-12 row-start-2 md:row-start-1  md:col-span-4 lg:col-span-3  md:p-4 mb-5 md:my-0">
                <QuizDashboard
                  quizEnd={quizEnd}
                  setQuizEnd={setQuizEnd}
                  answer={answer}
                  onSubmit={handleSubmit}
                  questions={questions}
                  currentQuestion={currentQuestion}
                  selectQuestion={selectQuestion}
                />
              </div>
              <div className="w-full col-span-12 md:col-span-8  lg:col-span-9   rounded-md    mx-auto  bg-white md:p-4 text-gray-500">
                <QuestionForm
                  answer={answer}
                  handleAnswer={handleAnswer}
                  current={questions[currentQuestion]}
                  selectQuestion={selectQuestion}
                  index={currentQuestion}
                  total={questions.length}
                />
              </div>
            </div>
          )}
        </div>
      </Section>
    </PageWrapper>
  );
}

export default quiz;

export const getStaticPaths = async () => {
  const response = await getAllQuiz();
  let data;
  if (response.status === 'fail') {
    data = [];
  } else {
    data = response.quiz;
  }
  const paths = data.map((quiz) => {
    return {
      params: {
        id: quiz._id,
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const response = await getQuiz({ id: params.id });
  if (response.status === 'fail') {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      quiz: response,
    },
    revalidate: 3, // Incremental Site Generation
  };
};
