import { useState } from 'react';
import Modal from '@components/Modal';
import TextInput from '@components/TextInput';
import TextArea from '@components/TextArea';
import Button from '@components/Button';
export default function QuizDetailForm({ formData, setFormData, closeModal }) {
  const [title, setTitle] = useState(formData?.title);
  const [description, setDescription] = useState(formData?.description);
  const [startAt, setStartAt] = useState(formData?.startAt);
  const [endAt, setEndAt] = useState(formData?.endAt);
  const [duration, setDuration] = useState(formData?.duration);

  const handleFormData = () => {
    const data = { title, startAt, endAt, duration, description };
    setFormData({ ...formData, ...data });
    closeModal();
  };
  return (
    <Modal
      title="Quiz Details"
      onClose={closeModal}
      style={{ minHeight: '40vh' }}
    >
      <div>
        <TextInput
          value={title}
          setValue={setTitle}
          label="Title"
          className="mt-1"
        />
        <TextArea
          label="Description"
          className="mt-1"
          inputClassName="md:p-3 p-2"
          value={description}
          setValue={setDescription}
        />
        <TextInput
          value={duration}
          setValue={setDuration}
          label="Duration (min)"
          className="mt-1"
        />
        <TextInput
          type="date"
          value={startAt}
          setValue={setStartAt}
          label="Start Date"
          className="mt-1"
        />
        <TextInput
          type="date"
          value={endAt}
          setValue={setEndAt}
          label="End Date"
          className="mt-1"
        />

        <Button onClick={handleFormData} btnType="primary">
          Continue Creating Quiz
        </Button>
      </div>
    </Modal>
  );
}
