import Typography from "./Typography";
import TextInput from "@components/TextInput";
import Button from "@components/Button";
import FilePond from "@components/FilePond";
import { AiFillCloseCircle } from "react-icons/ai";
import Modal from "./Modal";
export default function Notification({ closeModal, formData, HandleFormData }) {
  return (
    <Modal className="fixed top-0 right-0 bottom-0 left-0 text-gray-900 bg-gray-800 bg-opacity-80 z-100 flex justify-center items-center">
      <div
        style={{
          height: "65vh",
          width: "65vw",
        }}
        className="bg-white rounded px-3 py-2 md:p-5 overflow-y-scroll"
      >
        <div className="flex justify-between">
          <Typography
            type="section"
            className="font-bold text-base text-gray-600 md:text-xl"
          >
            Enter The Blog Details Here
          </Typography>
          <span className="cursor-pointer" onClick={closeModal}>
            <AiFillCloseCircle size={25} color="white" fill="black" />
          </span>
        </div>
        <TextInput
          name="title"
          type="text"
          placeholder="Enter Your Title Here"
          label="Title"
          value={formData.title}
          setValue={(value) => HandleFormData(value, "title")}
          className="my-2"
          inputClassName="p-2 md:p-3"
        />
        <TextInput
          name="Description"
          type="text"
          placeholder="Enter Your Description Here"
          label="Description"
          value={formData.description}
          setValue={(value) => HandleFormData(value, "description")}
          className="my-2"
          inputClassName="p-2 md:p-3"
        />
        <TextInput
          name="tags"
          type="text"
          placeholder="Tags must be Seprated by commas"
          label="Tags"
          value={formData.tags}
          setValue={(value) => HandleFormData(value, "tags")}
          className="my-2 "
          inputClassName="p-2 md:p-3"
        />
        <p className="my-2 text-base text-gray-400">Blog Poster</p>
        <FilePond />
        <Button onClick={closeModal} btnType="primary">
          Continue to write Body of Blog
        </Button>
      </div>
    </Modal>
  );
}
