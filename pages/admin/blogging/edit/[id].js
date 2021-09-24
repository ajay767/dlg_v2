import { useState } from 'react';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import Wrapper from '@admin/Wrapper';
import Content from '@admin/Content';
import Button from '@components/Button';
import BlogDetailForm from '@admin/blog/BlogDetailForm';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import toast from 'react-hot-toast';
import PreviewBlogCard from '@admin/blog/PreviewBlog';
import Draftjs from '@admin/blog/DraftEditor';
import { blogUploader } from '@utils/blogHelper';
import { getBlog } from '@utils/api';
import withAuth from '@lib/withAuth';

function BlogUpdate({ blog }) {
  const [submitBtnState, setSubmitBtnState] = useState(false);

  const [formData, setFormData] = useState({
    title: blog.title,
    description: blog.description,
    tags: blog.tags.join(','),
    poster: blog.poster,
    author: blog.author,
  });

  const [blogModal, setBlogModal] = useState(false);

  const [previewModal, setPreviewModal] = useState(false);
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(convertFromRaw(JSON.parse(blog.body)))
  );

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const HandleResetEditor = () => {
    const newForm = {
      title: '',
      description: '',
      tags: '',
      poster: '',
      author: 'DLG',
    };
    setEditorState(EditorState.createEmpty());
    setFormData(newForm);
  };

  const UpdateBlogHandler = async () => {
    const body = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
    const data = { ...formData, body };

    const onLoad = (data) => {
      console.log(data);
      setSubmitBtnState(false);
      toast.success('Blog Successfully Updated!!');
    };
    setSubmitBtnState(true);
    await blogUploader({
      data,
      method: 'update',
      id: blog._id,
      onLoad,
    });
  };

  return (
    <Wrapper>
      {blogModal && (
        <BlogDetailForm
          closeModal={() => setBlogModal(false)}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {previewModal && (
        <PreviewBlogCard
          blogBody={convertToRaw(editorState.getCurrentContent())}
          closePreviewModal={() => setPreviewModal(false)}
        />
      )}
      <Content>
        <Draftjs initialState={editorState} onChange={onEditorStateChange} />

        <div className="flex items-center flex-wrap justify-start">
          <Button
            loading={submitBtnState}
            onClick={UpdateBlogHandler}
            btnType="primary"
          >
            Update Blog
          </Button>
          <Button
            className="ml-2"
            onClick={HandleResetEditor}
            btnType="primary"
          >
            Reset
          </Button>
          <Button
            className="ml-2"
            onClick={() => setBlogModal(true)}
            btnType="primary"
          >
            Fill Blog Details
          </Button>
          <Button
            className="ml-2"
            onClick={() => setPreviewModal(true)}
            btnType="primary"
          >
            Preview
          </Button>
        </div>
      </Content>
    </Wrapper>
  );
}

BlogUpdate.getInitialProps = async (ctx) => {
  const blog = await getBlog({ id: ctx.query.id });
  return {
    blog,
  };
};

const authProp = {
  component: BlogUpdate,
  allowed: ['admin'],
};

export default withAuth(authProp);
