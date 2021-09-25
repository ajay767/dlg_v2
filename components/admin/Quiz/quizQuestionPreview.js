import { useState } from 'react';
import Modal from '@components/Modal';
import Button from '@components/Button';
import Typography from '@components/Typography';
import { MdDelete } from 'react-icons/md';
import { deleteQuestion } from '@utils/api';

export default function quizQuestionPreview({
  problems,
  modalProblem,
  closeModal,
}) {
  const [btnState, setBtnState] = useState(false);

  const handleDelete = async () => {
    setBtnState(true);
    await deleteQuestion(problems[modalProblem]._id);
    setBtnState(false);
    closeModal();
  };
  return (
    <Modal onClose={closeModal} title={problems[modalProblem].question}>
      {problems[modalProblem].options.map((answer, index) => {
        return (
          <Typography
            key={index}
            type="content"
            className="text-base mt-2 text-gray-600"
          >
            <span className="inline-block mr-2">{index + 1}.</span>
            {answer.option}
          </Typography>
        );
      })}
      <Button loading={btnState} onClick={handleDelete} btnType="primary">
        <span className="flex items-center">
          Delete
          <MdDelete size={22} className="ml-2 text-white" />
        </span>
      </Button>
    </Modal>
  );
}
