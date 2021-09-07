import dynamic from 'next/dynamic';
import { useState, useEffect, useCallback } from 'react';
import { options, blockType } from '@admin/editorOptions';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import withAuth from '@lib/withAuth';
import Wrapper from '@admin/Wrapper';
import Navbar from '@admin/Navbar';
import Content from '@admin/Content';
import routes from '@admin/routes';
import Button from '@components/Button';
import { throttle } from 'lodash';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((module) => module.Editor),
  {
    ssr: false,
  }
);

let LocalBase, db;
function Blogging() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

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
    throttle(updateLocalBlogData, 2000),
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
    updateLocalBlogData(editorBodyInString);
  };

  const ResetLocalStorageHandler = async () => {
    await db.collection('blogs').doc({ id: 1 }).delete();
    setEditorState(EditorState.createEmpty());
  };

  useEffect(() => {
    const init = async () => {
      LocalBase = (await import('localbase')).default;
      db = new LocalBase('db');
    };
    init();
  }, []);

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
    };
    init();
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
