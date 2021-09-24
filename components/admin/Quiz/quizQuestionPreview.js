import Modal from '@components/Modal';
import Typography from '@components/Typography';

export default function quizQuestionPreview({
  problems,
  modalProblem,
  closeModal,
}) {
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
    </Modal>
  );
}
