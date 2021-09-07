import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { options, blockType } from "@admin/editorOptions";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import withAuth from "@lib/withAuth";
import Wrapper from "@admin/Wrapper";
import Navbar from "@admin/Navbar";
import Content from "@admin/Content";
import routes from "@admin/routes";
import Button from "@components/Button";
import { debounce } from "../../../components/debounce";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useRouter } from "next/router";
import Notification from "@components/Notification";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
);

function Blogging() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: "",
    blogImage: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = async (currentEditorState) => {
    const editorBodyInString = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );
    localStorage.setItem("blog-draft", editorBodyInString);
    setEditorState(currentEditorState);
  };
  const uploadImageHandler = async (file) => {
    try {
      const fd = new FormData();
      fd.append("myFile", file, file.name);
      // const res = await api.post('/', fd);
      const url = "/assets/images/tech.jpg";
      const response = {
        data: {
          link: url,
        },
      };
      return response;
    } catch (err) {
      console.log(err);
    }
  };
  const HandleFormData = (value, field) => {
    const newForm = { ...formData };
    newForm[field] = value;
    localStorage.setItem("formData", JSON.stringify(newForm));
    setFormData(newForm);
  };
  const uploadEditorStateHandler = async () => {
    const editorBodyInString = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );
    localStorage.setItem("blog-draft", editorBodyInString);
    console.log(JSON.parse(editorBodyInString));
  };
  const ResetLocalStorageHandler = () => {
    localStorage.removeItem("blog-draft");
    localStorage.removeItem("formData");
    router.reload(window.location.pathname);
  };
  useEffect(() => {
    const rawDraft = localStorage.getItem("blog-draft");
    if (rawDraft) {
      const rawContentFromStore = convertFromRaw(JSON.parse(rawDraft));
      setEditorState(EditorState.createWithContent(rawContentFromStore));
    }
    const newForm = JSON.parse(localStorage.getItem("formData"));
    if (newForm) {
      setFormData(newForm);
    }
  }, []);

  const BlogFormHandler = () => {
    setShowModal(true);
  };

  return (
    <Wrapper>
      {showModal && (
        <Notification
          formData={formData}
          HandleFormData={HandleFormData}
          closeModal={() => setShowModal(false)}
        />
      )}
      {!showModal && <Navbar navItem={routes["blogging"].navbar} />}
      <Content>
        {!showModal && (
          <Editor
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            toolbarClassName="flex sticky z-20 !justify-start"
            editorClassName="mt-5 z-10 sticky shadow-sm border min-h-editor p-2"
            toolbar={{
              link: { inDropdown: true },
              list: { inDropdown: true },
              options: options,
              image: {
                uploadCallback: uploadImageHandler,
                inputAccept: "image/jpeg,image/jpg,image/png",
                alt: { present: false, mandatory: false },
                defaultSize: {
                  height: "80px",
                  width: "100%",
                },
              },
            }}
          />
        )}
        <Button onClick={uploadEditorStateHandler} btnType="primary">
          Save
        </Button>
        <div className="inline ml-2">
          <Button onClick={ResetLocalStorageHandler} btnType="primary">
            Reset
          </Button>
        </div>
        <div className="inline ml-2">
          <Button onClick={BlogFormHandler} btnType="primary">
            Fill Blog Details
          </Button>
        </div>
      </Content>
    </Wrapper>
  );
}

export default withAuth(Blogging);
