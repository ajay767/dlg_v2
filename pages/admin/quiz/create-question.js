import Wrapper from '@admin/Wrapper';
import withAuth from '@lib/withAuth';
import Navbar from '@admin/Navbar';
import Content from '@admin/Content';
import routes from '@admin/routes';
import { useState } from 'react';
import { createQuestion } from '@utils/api';
import Button from '@components/Button';
import TextInput from '@components/TextInput';
import { stringPermutations } from '@utils/func';

function Question() {
  const [btnState, setBtnState] = useState(false);
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([
    {
      option: '',
      correct: true,
    },
  ]);

  const HandleOptions = () => {
    const currentOptions = [...options];
    currentOptions.push({
      option: '',
    });
    setOptions(currentOptions);
  };

  const HandleOptionState = (value, index) => {
    const currentOptions = [...options];
    options[index].option = value;
    setOptions(currentOptions);
  };

  const HandleSubmitQuestion = async () => {
    setBtnState(true);
    let totalPerm = 1;
    let str = Object.keys(options)
      .map((curr, ind) => {
        totalPerm *= ind + 1;
        return ind;
      })
      .join('');
    const suffeledOptions = stringPermutations(str);
    const optionsArrangement = suffeledOptions[
      Math.floor(Math.random() * totalPerm)
    ]
      .split('')
      .map((i) => i * 1);
    const suffeled = optionsArrangement.map((curr) => options[curr]);
    const data = { question, options: suffeled };
    const res = await createQuestion(data);
    setBtnState(false);
  };

  return (
    <Wrapper>
      <Navbar navItem={routes['quiz'].navbar} />
      <Content>
        <TextInput
          label="Question"
          className="w-full md:w-4/5"
          value={question}
          setValue={setQuestion}
        />
        {options.map((optionBox, index) => {
          return (
            <div key={index}>
              {index !== 0 ? (
                <TextInput
                  label={`Option ${index + 1}`}
                  className="w-full md:w-4/5 mt-1"
                  value={optionBox.option}
                  setValue={(value) => HandleOptionState(value, index)}
                />
              ) : (
                <TextInput
                  label={`Correct Option`}
                  value={optionBox.option}
                  className="w-full md:w-4/5 mt-1"
                  setValue={(value) => HandleOptionState(value, index)}
                />
              )}
            </div>
          );
        })}
        <div className="flex items-center justify-start">
          <Button
            onClick={HandleOptions}
            className="inline-block"
            btnType="primary"
          >
            Add options
          </Button>
          <Button
            loading={btnState}
            onClick={HandleSubmitQuestion}
            className="inline-block ml-2"
            btnType="primary"
          >
            Save
          </Button>
        </div>
      </Content>
    </Wrapper>
  );
}

const authProp = {
  component: Question,
  allowed: ['super', 'admin'],
};
export default withAuth(authProp);
