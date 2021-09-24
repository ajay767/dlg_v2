import { useState, memo, useEffect, useCallback } from 'react';
import { BsPlus } from 'react-icons/bs';
import Typography from '@components/Typography';
import Modal from '@components/Modal';
import Button from '@components/Button';
import Lottie from '@components/Lottie';
import Countdown from 'react-countdown';
import { useRouter } from 'next/router';

const MemoizedTimer = memo(Countdown);

function QuizDashboard({
  questions,
  selectQuestion,
  currentQuestion,
  onSubmit,
  answer,
  quizEnd,
  setQuizEnd,
}) {
  const router = useRouter();
  const [timer, setTimer] = useState(Date.now() + 10 * 60 * 1000);

  function setCheckpoint(timer) {
    localStorage.setItem('quiz_player', timer);
  }

  useEffect(() => {
    const timer = parseInt(localStorage.quiz_player);
    if (timer) {
      setTimer(timer);
    }
  }, []);

  useEffect(() => {
    window.onbeforeunload = () => setCheckpoint(timer);
  });

  return (
    <div className=" bg-gray-100 rounded-md  p-4 text-gray-600">
      {quizEnd && (
        <Modal>
          <div className="h-44 relative  flex-center text-gray-700 rounded-md bg-white mx-4 p-5">
            <Lottie />
            <div className="cursor-pointer  absolute top-5 right-5 h-7 w-7 md:h-10 md:w-10 rounded-full bg-gray-200 flex-center ml-auto">
              <BsPlus
                onClick={() => {
                  setQuizEnd(!quizEnd);
                  router.push('/');
                }}
                size={30}
                className="text-gray-700  transform rotate-45"
              />
            </div>
            <Typography
              type="secondary"
              className="text-center w-full md:w-6/12 mx-auto"
            >
              Thank You For Participation😃!!
            </Typography>
          </div>
        </Modal>
      )}
      <Typography>Quiz menia</Typography>
      <Typography type="secondary">
        <MemoizedTimer
          onComplete={onSubmit}
          daysInHours
          onTick={(e) => setTimer(e.total + Date.now())}
          date={timer}
        />
      </Typography>
      <div className="my-4 flex items-center justify-start flex-wrap">
        {questions.map((question, index) => {
          if (index === currentQuestion) {
            return (
              <div
                onClick={() => selectQuestion(index)}
                key={index}
                className="w-10 h-10 m-1 cursor-pointer bg-blue-500 text-white flex-center rounded font-bold"
              >
                {index + 1}
              </div>
            );
          } else if (question._id in answer) {
            return (
              <div
                onClick={() => selectQuestion(index)}
                key={index}
                className="w-10 h-10 m-1 cursor-pointer  bg-green-500 text-white flex-center rounded font-bold"
              >
                {index + 1}
              </div>
            );
          } else {
            return (
              <div
                onClick={() => selectQuestion(index)}
                key={index}
                className="w-10 h-10 m-1 cursor-pointer  bg-white flex-center rounded font-bold"
              >
                {index + 1}
              </div>
            );
          }
        })}
      </div>
      <Button onClick={onSubmit} btnType="primary">
        Submit
      </Button>
    </div>
  );
}

export default QuizDashboard;
