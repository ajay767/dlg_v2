import { useState, memo, useEffect } from 'react';
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
        <Modal
          title="Submitted successfully"
          onClose={() => {
            setQuizEnd(!quizEnd);
            onSubmit();
            router.push('/quiz');
          }}
        >
          <Lottie />
          <div className="my-10">
            <Typography
              type="content"
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
