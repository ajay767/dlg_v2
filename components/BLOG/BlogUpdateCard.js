import dynamic from 'next/dynamic';
import { useState } from 'react';
import { options, blockType } from '@admin/editorOptions';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import withAuth from '@lib/withAuth';
import Wrapper from '@admin/Wrapper';
import Content from '@admin/Content';
import routes from '@admin/routes';
import Button from '@components/Button';
import BlogDetailForm from '@admin/blog/BlogDetailForm';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { updateBlog } from '@utils/api';
import toast from 'react-hot-toast';
import { uploadImageHandler } from '@components/BLOG/BlogFuntions';
import PreviewBlogCard from './PreviewBlogCard';
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((module) => module.Editor),
  {
    ssr: false,
  }
);

export default function BlogUpdateCard({ blog }) {
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    title: blog.title,
    description: blog.description,
    tags: blog.tags.join(','),
  });
  const [blogModal, setBlogModal] = useState(false);
  const [previewModal, setPreviewModal] = useState(false);
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(convertFromRaw(JSON.parse(blog.body)))
  );
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const HandleFormData = (value, field) => {
    const newForm = { ...formData };
    newForm[field] = value;
    localStorage.setItem('formData', JSON.stringify(newForm));
    setFormData(newForm);
  };
  const HandleResetEditor = () => {
    const newForm = {
      title: '',
      description: '',
      tags: '',
    };
    const newFiles = [];
    setEditorState(EditorState.createEmpty());
    setFiles(newFiles);
    setFormData(newForm);
  };
  const UpdateBlogHandler = async () => {
    const { title, description, tags } = formData;
    const newTags = tags.split(',');
    const poster = files.length > 0 ? files[0].url : null;
    const body = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
    const data = {
      title,
      description,
      newTags,
      body,
    };
    if (poster) {
      data.poster = poster;
    }
    const onLoad = (data) => {
      console.log(data);
      toast.success('Blog Successfully Updated!!');
    };
    const id = blog._id;
    await updateBlog(id, data, onLoad);
  };
  return (
    <Wrapper>
      {blogModal && (
        <BlogDetailForm
          closeModal={() => setBlogModal(false)}
          formData={formData}
          HandleFormData={HandleFormData}
          files={files}
          setFiles={setFiles}
        />
      )}
      {previewModal && (
        <PreviewBlogCard
          blogBody={convertToRaw(editorState.getCurrentContent())}
          closePreviewModal={() => setPreviewModal(false)}
        />
      )}
      <Content>
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          toolbarClassName='flex sticky z-20 !justify-start'
          editorClassName='mt-5 z-10 sticky shadow-sm border min-h-editor p-2'
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
        <Button onClick={UpdateBlogHandler} btnType='primary'>
          Update Blog
        </Button>
        <div className='inline ml-2'>
          <Button onClick={HandleResetEditor} btnType='primary'>
            Reset
          </Button>
        </div>
        <div className='inline ml-2'>
          <Button onClick={() => setBlogModal(true)} btnType='primary'>
            Fill Blog Details
          </Button>
        </div>
        <div className='inline ml-2'>
          <Button onClick={() => setPreviewModal(true)} btnType='primary'>
            Preview
          </Button>
        </div>
      </Content>
    </Wrapper>
  );
}
