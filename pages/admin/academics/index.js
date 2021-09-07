import { useState } from 'react';
import withAuth from '@lib/withAuth';
import routes from '@components/admin/routes';
import NavBar from '@components/admin/Navbar';
import Wrapper from '@components/admin/Wrapper';
import Content from '@components/admin/Content';
import TextInput from '@components/TextInput';
import Button from '@components/Button';
import Typography from '@components/Typography';
import FilePondComponent from '@components/FilePond';

const AddMaterial = () => {
  const [formData, setFormData] = useState({
    branch: '',
    semester: '',
    year: '',
    subject: '',
    material: '',
    subjectCode: '',
    tags: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleFormInput = (value, fieldName) => {
    const updatedFormData = { ...formData };
    updatedFormData[fieldName] = value;
    setFormData(updatedFormData);
  };

  const renderPins = () => {
    return formData.tags.split(',').map((item, index) => {
      if (item !== '' || item !== ' ') {
        return (
          <p
            key={index}
            className="bg-gray-200 m-2 rounded-full p-2 px-4 text-gray-600 text-xs font-medium inline-block"
          >
            {item}
          </p>
        );
      } else return null;
    });
  };

  return (
    <Wrapper>
      <NavBar navItem={routes['academics'].navbar} />
      <Content>
        <Typography type="section" className="text-gray-500">
          Add new Material
        </Typography>

        <form
          onSubmit={handleFormSubmit}
          className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4"
        >
          <TextInput
            name="branch"
            type="text"
            label="Branch"
            value={formData.branch}
            setValue={(value) => handleFormInput(value, 'branch')}
          />

          <TextInput
            name="semester"
            type="text"
            label="Semester"
            value={formData.semester}
            setValue={(value) => handleFormInput(value, 'semester')}
          />

          <TextInput
            name="year"
            type="number"
            label="Year"
            value={formData.year}
            setValue={(value) => handleFormInput(value, 'year')}
          />

          <TextInput
            name="subject"
            type="text"
            label="Subject"
            value={formData.subject}
            setValue={(value) => handleFormInput(value, 'subject')}
          />
          <TextInput
            name="subjectCode"
            type="number"
            label="Subject Code"
            value={formData.subjectCode}
            setValue={(value) => handleFormInput(value, 'subjectCode')}
          />

          <TextInput
            name="tags"
            label="Tags"
            value={formData.tags}
            setValue={(value) => handleFormInput(value, 'tags')}
          />
          <div
            style={{ minHeight: '35px' }}
            className="p-2 border border-gray-400 border-dashed rounded-md"
          >
            {!Boolean(formData.tags.length) && (
              <p className=" text-center m-2 rounded-full p-2 px-4 text-gray-400 text-xs font-medium ">
                No Tags
              </p>
            )}
            {Boolean(formData.tags.length) && renderPins()}
          </div>
          <div className="my-2 md:col-span-2">
            <FilePondComponent label="Upload File" />
          </div>

          <Button btnType="primary" type="submit">
            Submt
          </Button>
        </form>
      </Content>
    </Wrapper>
  );
};

const authProp = {
  component: AddMaterial,
  allowed: ['super'],
};

export default withAuth(authProp);
