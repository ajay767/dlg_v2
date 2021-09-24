import Modal from '@components/Modal';
import Typography from '@components/Typography';
import { AiFillCloseCircle } from 'react-icons/ai';

export default function quizQuestionPreview({
  problems,
  modalProblem,
  setShowModal,
}) {
  const cardStyles = {
    height: '50vh',
  };
  return (
    <Modal>
      <div
        style={cardStyles}
        className='rounded bg-white p-2 w-full lg:w-2/3 md:w-4/5'
      >
        <div className='flex items-start justify-between'>
          <Typography type='section' className='leading-tight mb-3 text-base'>
            {problems[modalProblem].question}
          </Typography>
          <span
            onClick={() => setShowModal(false)}
            className='inline-block cursor-pointer ml-3'
          >
            <AiFillCloseCircle fill='#000' size='25' />
          </span>
        </div>
        {problems[modalProblem].options.map((answer, index) => {
          return (
            <Typography
              key={index}
              type='section'
              className='text-base text-gray-600'
            >
              <span className='inline-block mr-2'>{index + 1}.</span>
              {answer.option}
            </Typography>
          );
        })}
      </div>
    </Modal>
  );
}
