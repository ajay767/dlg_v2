import { useState } from 'react';
import Typography from '../../Typography';
import TextInput from '@components/TextInput';
import TextArea from '@components/TextArea';
import Button from '@components/Button';
import FilePond from '@components/FilePond';
import { AiFillCloseCircle } from 'react-icons/ai';
import Modal from '@components/Modal';

export default function Notification({ closeModal, formData, setFormData }) {
  const [files] = useState([]);

  const HandleFormData = (value, field) => {
    const newForm = { ...formData };
    newForm[field] = value;
    localStorage.setItem('formData', JSON.stringify(newForm));
    setFormData(newForm);
  };

  return (
    <Modal title="Blog Details" onClose={closeModal}>
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

      <FilePond
        label="Poster"
        setFiles={(res) => HandleFormData(res[0].url, 'poster')}
        files={files}
        className="my-2"
      />
      <Button onClick={closeModal} btnType="primary">
        Continue to write Body of Blog
      </Button>
    </Modal>
  );
}
