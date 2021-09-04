import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { options, blockType } from '@admin/editorOptions';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import withAuth from '@lib/withAuth';
import Wrapper from '@admin/Wrapper';
import Navbar from '@admin/Navbar';
import Content from '@admin/Content';
import routes from '@admin/routes';
import Button from '@components/Button';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((module) => module.Editor),
  {
    ssr: false,
  }
);

function Blogging() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const uploadImageHandler = async (file) => {
    try {
      const fd = new FormData();
      fd.append('myFile', file, file.name);
      // const res = await api.post('/', fd);
      const url = '/assets/images/tech.jpg';
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
  const uploadEditorStateHandler = async () => {
    const editorBodyInString = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );

    localStorage.setItem('blog-draft', editorBodyInString);
    console.log(JSON.parse(editorBodyInString));
  };

  useEffect(() => {
    const rawDraft = localStorage.getItem('blog-draft');
    if (rawDraft) {
      const rawContentFromStore = convertFromRaw(JSON.parse(rawDraft));
      setEditorState(EditorState.createWithContent(rawContentFromStore));
    }
  }, []);

  return (
    <Wrapper>
      <Navbar navItem={routes['blogging'].navbar} />
      <Content>
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          toolbarClassName="flex"
          editorClassName="mt-5 shadow-sm border min-h-editor p-2"
          toolbar={{
            link: { inDropdown: true },
            list: { inDropdown: true },
            options: options,
            image: {
              uploadCallback: uploadImageHandler,
              inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
              alt: { present: false, mandatory: false },
              defaultSize: {
                height: '80px',
                width: '100%',
              },
            },
          }}
        />
        <Button onClick={uploadEditorStateHandler} btnType="primary">
          Save
        </Button>
      </Content>
    </Wrapper>
  );
}

export default withAuth(Blogging);
