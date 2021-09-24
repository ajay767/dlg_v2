import Typography from '@components/Typography';
import Button from '@components/Button';

function QuestionForm({
  selectQuestion,
  total,
  index,
  current,
  handleAnswer,
  answer,
}) {
  const { question, options, _id: questionID } = current;

  return (
    <div>
      <Typography type="title" className="text-gray-600">
        {question}
      </Typography>
      <div className="mt-10 md:ml-5">
        {options.map((current, index) => {
          return (
            <div className="flex items-center justify-start mt-4" key={index}>
              <input
                onChange={(e) => handleAnswer(questionID, e.target.value)}
                checked={answer[questionID] === current._id}
                className="h-6 w-6 border-2 p-px border-gray-300 rounded-full mr-2 bg-green-500 text-green-500"
                type="radio"
                id={current._id}
                name={questionID}
                value={current._id}
              />
              <Typography type="section" className="text-gray-600">
                <label htmlFor={current._id}>{current.option}</label>
              </Typography>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center my-8">
        <Button
          onClick={() => {
            selectQuestion(index - 1);
          }}
          disabled={index === 0}
          btnType="primary"
        >
          Prev
        </Button>
        <Button
          onClick={() => {
            selectQuestion(index + 1);
          }}
          disabled={index === total - 1}
          btnType="primary"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default QuestionForm;
