import dynamic from "next/dynamic";
import { useState, useEffect, useCallback } from "react";
import { options, blockType } from "@admin/editorOptions";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import withAuth from "@lib/withAuth";
import Wrapper from "@admin/Wrapper";
import Navbar from "@admin/Navbar";
import Content from "@admin/Content";
import routes from "@admin/routes";
import Button from "@components/Button";
import { throttle } from "lodash";
import BlogDetailForm from "@admin/blog/BlogDetailForm";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { createBlog } from "../../../utils/api";
import toast from "react-hot-toast";
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((module) => module.Editor),
  {
    ssr: false,
  }
);

let LocalBase, db;
function Blogging() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: '',
    blogImage: '',
  });
  const [reset, setReset] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const updateLocalBlogData = async (content) => {
    const blogs = await db.collection("blogs").get();
    const isAlready = blogs.filter((blog) => blog.id === 1).length >= 1;
    if (isAlready) {
      db.collection("blogs").doc({ id: 1 }).update({
        content: content,
      });
    } else {
      db.collection("blogs").add({
        id: 1,
        content: content,
      });
    }
  };

  const throtteledUpdateLocalBlogData = useCallback(
    throttle(updateLocalBlogData, 500),
    []
  );

  const onEditorStateChange = async (currentEditorState) => {
    const editorBodyInString = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );
    setEditorState(currentEditorState);
    throtteledUpdateLocalBlogData(editorBodyInString);
  };

  const uploadImageHandler = async (file) => {
    try {
      const fd = new FormData();
      fd.append("myFile", file, file.name);

      const url = "/assets/images/tech2.jpg";
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
    localStorage.setItem('formData', JSON.stringify(newForm));
    setFormData(newForm);
  };

  const ResetLocalStorageHandler = async () => {
    await db.collection("blogs").doc({ id: 1 }).delete();
    localStorage.removeItem("formData");
    setEditorState(EditorState.createEmpty());
  };

  useEffect(() => {
    if (reset) {
      ResetLocalStorageHandler();
    }
  }, [reset]);

  const onLoad = (data) => {
    console.log(data);
    setReset(true);
    toast.success("Blog Successfully Created");
  };

  const uploadEditorStateHandler = async () => {
    const body = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
    const author = "DLG";
    const { title, description, tags } = formData;
    const poster = "Hey Blogger";
    const data = {
      author,
      title,
      description,
      poster,
      body,
      tags,
    };
    await createBlog(data, onLoad);
  };

  useEffect(() => {
    const init = async () => {
      LocalBase = (await import("localbase")).default;
      db = new LocalBase("db");
      const blogList = await db.collection("blogs").get();
      const draftBlog = blogList.filter((blog) => blog.id === 1);
      if (draftBlog.length > 0) {
        const rawContentFromStore = convertFromRaw(
          JSON.parse(draftBlog[0].content)
        );
        setEditorState(EditorState.createWithContent(rawContentFromStore));
      }
      const newForm = JSON.parse(localStorage.getItem("formData"));
      console.log(newForm);
      if (newForm) {
        setFormData(newForm);
      }
    };
    init();
  }, []);

  const BlogFormHandler = () => {
    setShowModal(true);
  };

  return (
    <Wrapper>
      {showModal && (
        <BlogDetailForm
          formData={formData}
          HandleFormData={HandleFormData}
          closeModal={() => setShowModal(false)}
        />
      )}
      {!showModal && <Navbar navItem={routes['blogging'].navbar} />}
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
                inputAccept: 'image/jpeg,image/jpg,image/png',
                alt: { present: false, mandatory: false },
                defaultSize: {
                  height: '80px',
                  width: '100%',
                },
              },
            }}
          />
        )}
        <Button onClick={uploadEditorStateHandler} btnType="primary">
          Create Blog
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
const authProp = {
  component: Blogging,
  allowed: ['admin'],
};
export default withAuth(authProp);
