import dynamic from 'next/dynamic';
import { uploadImageHandler } from '@utils/blogHelper';
import { options } from '@admin/editorOptions';
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((module) => module.Editor),
  {
    ssr: false,
  }
);

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Draftjs = ({ initialState, onChange }) => {
  return (
    <Editor
      editorState={initialState}
      onEditorStateChange={onChange}
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
  );
};

export default Draftjs;
