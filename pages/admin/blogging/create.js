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
import { useRouter } from 'next/router';

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((module) => module.Editor),
  {
    ssr: false,
  }
);

function Blogging() {
  const router = useRouter();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = async (currentEditorState) => {
    const editorBodyInString = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );
    localStorage.setItem('blog-draft', editorBodyInString);
    setEditorState(currentEditorState);
  };

  const uploadImageHandler = async (file) => {
    try {
      const fd = new FormData();
      fd.append('myFile', file, file.name);

      const url = '/assets/images/tech2.jpg';
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

  const ResetLocalStorageHandler = () => {
    localStorage.removeItem('blog-draft');
    router.reload(window.location.pathname);
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
              inputAccept: 'image/jpeg,image/jpg,image/png',
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
        <div className="inline ml-2">
          <Button onClick={ResetLocalStorageHandler} btnType="primary">
            Reset
          </Button>
        </div>
      </Content>
    </Wrapper>
  );
}

export default withAuth(Blogging);
