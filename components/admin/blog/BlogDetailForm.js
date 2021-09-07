import Typography from '../../Typography';
import TextInput from '@components/TextInput';
import TextArea from '@components/TextArea';
import Button from '@components/Button';
import FilePond from '@components/FilePond';
import { AiFillCloseCircle } from 'react-icons/ai';
import Modal from '@components/Modal';

export default function Notification({ closeModal, formData, HandleFormData }) {
  return (
    <Modal>
      <div className="bg-white w-11/12 md:w-8/12 lg:w-6/12  rounded p-3 md:p-5 overflow-y-scroll scrollbar-hide">
        <div className="flex justify-between">
          <Typography
            type="section"
            className="font-bold text-base text-gray-600 md:text-xl"
          >
            Blog Details
          </Typography>
          <span className="cursor-pointer" onClick={closeModal}>
            <AiFillCloseCircle size={24} color="white" fill="#2a2a2a" />
          </span>
        </div>
        <div className="my-2">
          <TextInput
            name="title"
            type="text"
            label="Title"
            value={formData.title}
            setValue={(value) => HandleFormData(value, 'title')}
            className="my-2"
            inputClassName="p-2 md:p-3"
          />
          <TextArea
            name="Description"
            type="text"
            label="Description"
            value={formData.description}
            setValue={(value) => HandleFormData(value, 'description')}
            className="my-2"
            inputClassName="p-2 md:p-3"
          />
          <TextInput
            name="tags"
            type="text"
            label="Tags"
            value={formData.tags}
            setValue={(value) => HandleFormData(value, 'tags')}
            className="my-2 "
            inputClassName="p-2 md:p-3"
          />
        </div>
        <p className="my-2 text-base text-gray-400">Poster</p>
        <FilePond />
        <Button onClick={closeModal} btnType="primary">
          Continue to write Body of Blog
        </Button>
      </div>
    </Modal>
  );
}
