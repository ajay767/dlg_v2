import PropTypes from 'prop-types';
import TextInput from './../TextInput';
import TextArea from './../TextArea';
import Button from './../Button';
import FilePondComponent from '../FilePond';

function EventForm({ formData, setFormData, handleForm, disabled = false }) {
  const handleEventSubmit = (e) => {
    e.preventDefault();
    handleForm(formData);
  };

  const handleFormInput = (value, fieldName) => {
    const updatedFormData = { ...formData };
    updatedFormData[fieldName] = value;
    setFormData(updatedFormData);
  };

  return (
    <div className="w-full my-2">
      <form
        onSubmit={handleEventSubmit}
        className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2"
      >
        <TextInput
          value={formData.eventName}
          setValue={(value) => handleFormInput(value, 'eventName')}
          type="text"
          label="Event Name"
        />
        <TextInput
          value={formData.chiefGuest}
          setValue={(value) => handleFormInput(value, 'chiefGuest')}
          type="text"
          label="Chief Guest"
        />
        <TextInput
          value={formData.eventDate}
          setValue={(value) => handleFormInput(value, 'eventDate')}
          type="date"
          label="Event Date"
        />
        <TextInput
          value={formData.organiser}
          setValue={(value) => handleFormInput(value, 'organiser')}
          type="text"
          label="Organiser"
        />
        <TextArea
          label="Overview"
          value={formData.overview}
          setValue={(value) => handleFormInput(value, 'overview')}
        />
        <TextArea
          label="Description"
          value={formData.description}
          setValue={(value) => handleFormInput(value, 'description')}
        />
        <div className=" md:col-span-2">
          <FilePondComponent label="Upload File" />
        </div>
        <div className="col-span-1 md:col-span-2">
          <Button btnType="primary" disabled={disabled} type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

EventForm.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  handleForm: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default EventForm;
