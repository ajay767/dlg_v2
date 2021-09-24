import Wrapper from '@admin/Wrapper';
import withAuth from '@lib/withAuth';
import Navbar from '@admin/Navbar';
import Content from '@admin/Content';
import routes from '@admin/routes';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Button from '@components/Button';
import { getAllQuestion, createQuiz } from '@utils/api';
import Typography from '@components/Typography';
import { AiFillCheckSquare } from 'react-icons/ai';
import { GrCheckbox } from 'react-icons/gr';
import QuizQuestionPreview from '@components/admin/Quiz/quizQuestionPreview';
import QuizDetailForm from '@components/admin/Quiz/quizDetailForm';

function Quiz({ problems }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    duration: 10,
    startAt: '',
    endAt: '',
  });
  const [createBtnState, setCreateBtnState] = useState(false);
  const [formModal, setFormModal] = useState(false);
  const [previewModal, setPreviewModal] = useState(false);
  const [choosen, setChoosen] = useState(new Array(problems.length).fill(0));
  const [modalProblem, setModalProblem] = useState(0);

  const HandleChooseOptions = (index) => {
    let current_choosen = [...choosen];
    current_choosen[index] = current_choosen[index] ^ 1;
    setChoosen(current_choosen);
  };

  const HandleCreateQuiz = async () => {
    setCreateBtnState(true);
    let choosenProblems = [];
    choosen.forEach((selected, index) => {
      if (selected) {
        choosenProblems.push(problems[index]._id);
      }
    });

    const data = {
      questions: choosenProblems,
      ...formData,
    };
    const res = await createQuiz(data);
    setCreateBtnState(false);
    console.log(res);
  };

  const HandleModalQuestion = (index) => {
    setPreviewModal(true);
    setModalProblem(index);
  };

  return (
    <Wrapper>
      {previewModal && (
        <QuizQuestionPreview
          problems={problems}
          closeModal={() => setPreviewModal(false)}
          modalProblem={modalProblem}
        />
      )}
      <AnimatePresence>
        {formModal && (
          <QuizDetailForm
            formData={formData}
            setFormData={setFormData}
            closeModal={() => setFormModal(false)}
          />
        )}
      </AnimatePresence>
      <Navbar navItem={routes['quiz'].navbar} />
      <Content>
        <Typography type="section" className="text-gray-600 mb-5">
          All Questions
        </Typography>
        <div className="space-y-4">
          {problems.map((problem, index) => {
            return (
              <div key={index} className="flex space-x-2 items-start">
                <span
                  onClick={() => HandleChooseOptions(index)}
                  className="cursor-pointer"
                >
                  {choosen[index] ? (
                    <AiFillCheckSquare fill="#f59e0b" size="28" />
                  ) : (
                    <GrCheckbox size="24" />
                  )}
                </span>
                <Typography
                  key={index}
                  type="content"
                  className="text-gray-500 text-base cursor-pointer -mt-1"
                  onClick={() => HandleModalQuestion(index)}
                >
                  <span className="inline-block mr-2">Que :</span>
                  {problem.question}
                </Typography>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-start">
          <Button
            loading={createBtnState}
            onClick={HandleCreateQuiz}
            btnType="primary"
            className="mt-4"
          >
            Create Quiz
          </Button>
          <Button
            onClick={() => setFormModal(true)}
            btnType="primary"
            className="mt-4 mx-2"
          >
            Fill Quiz Details
          </Button>
        </div>
      </Content>
    </Wrapper>
  );
}

const authProp = {
  component: Quiz,
  allowed: ['super', 'admin'],
};

export default withAuth(authProp);

Quiz.getInitialProps = async () => {
  const response = await getAllQuestion();
  return {
    problems: response.questions,
  };
};
