import Wrapper from '@admin/Wrapper';
import Navbar from '@admin/Navbar';
import Content from '@admin/Content';
import routes from '@admin/routes';
import { useState } from 'react';
import Button from '@components/Button';
import { problem } from './problem';
import Typography from '@components/Typography';
import { AiFillCheckSquare } from 'react-icons/ai';
import { GrCheckbox } from 'react-icons/gr';
import QuizQuestionPreview from '@components/admin/Quiz/quizQuestionPreview';
import QuizDetailForm from '@components/admin/Quiz/quizDetailForm';
const problems = problem;

export default function Quiz() {
  const [choosen, setChoosen] = useState(new Array(problems.length).fill(0));
  const [showModal, setShowModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [modalProblem, setModalProblem] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const HandleChooseOptions = (index) => {
    let current_choosen = [...choosen];
    current_choosen[index] = current_choosen[index] ^ 1;
    setChoosen(current_choosen);
  };
  const HandleCreateQuiz = () => {
    let choosenProblems = [];
    choosen.forEach((selected, index) => {
      if (selected) {
        choosenProblems.push(problems[index]._id);
      }
    });
    console.log(choosenProblems);
  };
  const HandleModalQuestion = (index) => {
    setShowModal(true);
    setModalProblem(index);
  };

  return (
    <Wrapper>
      {showModal && (
        <QuizQuestionPreview
          problems={problems}
          setShowModal={setShowModal}
          modalProblem={modalProblem}
        />
      )}
      {showDetailModal && (
        <QuizDetailForm
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          closeModal={setShowDetailModal}
        />
      )}
      <Navbar navItem={routes['quiz'].navbar} />
      <Content>
        <Typography type='section' className='text-gray-600 mb-5 ml-1 pb-1'>
          All Questions
        </Typography>
        <div className='space-y-4'>
          {problems.map((problem, index) => {
            return (
              <div key={index} className='flex space-x-2 items-start'>
                <span
                  onClick={() => HandleChooseOptions(index)}
                  className='cursor-pointer'
                >
                  {choosen[index] ? (
                    <AiFillCheckSquare fill='#f59e0b' size='21' />
                  ) : (
                    <span className='inline-block transform translate-x-0.5  translate-y-0.5 '>
                      <GrCheckbox size='16.9' />
                    </span>
                  )}
                </span>
                <Typography
                  key={index}
                  type='section'
                  className='text-gray-500 text-base cursor-pointer -mt-1'
                  onClick={() => HandleModalQuestion(index)}
                >
                  <span className='inline-block mr-2'>Que :</span>
                  {problem.question}
                </Typography>
              </div>
            );
          })}
        </div>
        <Button onClick={HandleCreateQuiz} btnType='primary' className='mt-4'>
          Create Quiz
        </Button>
        <Button
          onClick={() => setShowDetailModal(true)}
          btnType='primary'
          className='mt-4 mx-2'
        >
          Fill Quiz Details
        </Button>
      </Content>
    </Wrapper>
  );
}
