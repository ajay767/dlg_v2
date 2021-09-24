import Draftjs from '@admin/blog/DraftEditor';
import { blogUploader, resetLocalStorage } from '@utils/blogHelper';
import { useState, useEffect, useCallback } from 'react';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import withAuth from '@lib/withAuth';
import Wrapper from '@admin/Wrapper';
import Navbar from '@admin/Navbar';
import Content from '@admin/Content';
import routes from '@admin/routes';
import Button from '@components/Button';
import { throttle } from 'lodash';
import BlogDetailForm from '@admin/blog/BlogDetailForm';
import toast from 'react-hot-toast';
let LocalBase, db;

function BlogCardComponent() {
  const [submitBtnState, setSubmitBtnState] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: '',
    poster: '',
    author: 'DLG',
  });

  const [reset, setReset] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const updateLocalBlogData = async (content) => {
    const blogs = await db.collection('blogs').get();
    const isAlready = blogs.filter((blog) => blog.id === 1).length >= 1;
    if (isAlready) {
      db.collection('blogs').doc({ id: 1 }).update({
        content: content,
      });
    } else {
      db.collection('blogs').add({
        id: 1,
        content: content,
      });
    }
  };

  const throtteledUpdateLocalBlogData = useCallback(
    throttle(updateLocalBlogData, 1000),
    []
  );

  const onEditorStateChange = async (currentEditorState) => {
    const editorBodyInString = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );
    setEditorState(currentEditorState);
    throtteledUpdateLocalBlogData(editorBodyInString);
  };

  const BlogFormHandler = () => {
    setShowModal(true);
  };

  const handleBlogUpload = async () => {
    const body = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
    const data = {
      ...formData,
      body,
    };

    const onLoad = () => {
      setReset(true);
      setSubmitBtnState(false);

      toast.success('Blog Successfully Created');
    };
    setSubmitBtnState(true);
    await blogUploader({ data, onLoad });
  };

  useEffect(() => {
    const init = async () => {
      LocalBase = (await import('localbase')).default;
      db = new LocalBase('db');
      const blogList = await db.collection('blogs').get();
      const draftBlog = blogList.filter((blog) => blog.id === 1);
      if (draftBlog.length > 0) {
        const rawContentFromStore = convertFromRaw(
          JSON.parse(draftBlog[0].content)
        );
        setEditorState(EditorState.createWithContent(rawContentFromStore));
      }
      const newForm = JSON.parse(localStorage.getItem('formData'));
      console.log(newForm);
      if (newForm) {
        setFormData(newForm);
      }
    };
    init();
  }, []);

  useEffect(() => {
    const handler = async () => {
      if (reset) {
        await resetLocalStorage({ db, collection: 'blogs', id: 1 });
        setEditorState(EditorState.createEmpty());
      }
    };
    handler();
  }, [reset]);

  return (
    <Wrapper>
      {showModal && (
        <BlogDetailForm
          setFormData={setFormData}
          formData={formData}
          closeModal={() => setShowModal(false)}
        />
      )}

      <Navbar navItem={routes['blogging'].navbar} />
      <Content>
        {!showModal && (
          <Draftjs initialState={editorState} onChange={onEditorStateChange} />
        )}
        <div className="flex items-center justify-start flex-wrap">
          <Button
            loading={submitBtnState}
            onClick={handleBlogUpload}
            btnType="primary"
          >
            Create Blog
          </Button>

          <Button
            onClick={() =>
              resetLocalStorage({ db, collection: 'blogs', id: 1 })
            }
            btnType="primary"
            className="ml-2"
          >
            Reset
          </Button>
          <Button className="ml-2" onClick={BlogFormHandler} btnType="primary">
            Fill Blog Details
          </Button>
        </div>
      </Content>
    </Wrapper>
  );
}
const authProp = {
  component: BlogCardComponent,
  allowed: ['admin'],
};
export default withAuth(authProp);
