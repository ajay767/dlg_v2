import React, { useState } from 'react';
import Cookies from 'js-cookie';
// Import React FilePond
import { FilePond, File, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// Our app
function FilePondComponent({ label, className, files, setFiles }) {
  const [filepondFiles, setFilepondFiles] = useState([]);
  return (
    <div className={`${className}`}>
      <label className='text-base font-medium text-gray-400 mb-2'>
        {label}
      </label>
      <FilePond
        files={filepondFiles}
        onupdatefiles={setFilepondFiles}
        allowMultiple={false}
        maxFiles={1}
        server={{
          url: `${process.env.NEXT_PUBLIC_SERVER}/api/v2/upload`,
          process: {
            headers: {
              authorization: Cookies.get('token'),
            },
            onload: (response) => {
              const res = JSON.parse(response);
              setFiles([...files, { url: res.url, id: res.id }]);
            },
            onerror: (err) => {
              console.log(err);
            },
          },
        }}
        name='file'
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  );
}

export default FilePondComponent;
