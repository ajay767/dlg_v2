import Modal from '@components/Modal';
import Typography from '@components/Typography';
import TextInput from '@components/TextInput';
import TextArea from '@components/TextArea';
import Button from '@components/Button';
import { AiOutlinePlusCircle } from 'react-icons/ai';
export default function QuizDetailForm({
  title,
  setTitle,
  description,
  setDescription,
  closeModal,
}) {
  return (
    <Modal>
      <div
        style={{ height: '72vh' }}
        className='bg-white w-11/12 md:w-8/12 lg:w-6/12  rounded p-3 md:p-5 overflow-y-scroll scrollbar-hide'
      >
        <div className='flex justify-between'>
          <Typography
            type='section'
            className='text-2xl text-gray-600 font-bold '
          >
            Fill Detail from
          </Typography>
          <AiOutlinePlusCircle
            onClick={() => closeModal(false)}
            className='cursor-pointer text-3xl transform rotate-45 text-gray-700'
          />
        </div>
        <TextInput
          value={title}
          setValue={setTitle}
          label='Title'
          className='mt-1'
        />
        <TextArea
          label='Description'
          className='mt-1'
          inputClassName='md:p-3 p-2'
          value={description}
          setValue={setDescription}
        />
        <Button onClick={() => closeModal(false)} btnType='primary'>
          Continue Creating Quiz
        </Button>
      </div>
    </Modal>
  );
}
