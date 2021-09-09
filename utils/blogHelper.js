import { updateBlog, createBlog } from '@utils/api';
import axios from 'axios';

export const uploadImageHandler = async (file) => {
  try {
    const fd = new FormData();
    fd.append('file', file, file.name);
    const url = `${process.env.NEXT_PUBLIC_SERVER}/api/v2/upload`;
    const { data } = await axios.post(url, fd);
    const response = {
      data: {
        link: data.url,
      },
    };
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const resetLocalStorage = async ({ db, collection, id }) => {
  await db.collection(collection).doc({ id: id }).delete();
  localStorage.removeItem('formData');
};

export const blogUploader = async ({
  data,
  method = 'create',
  id = null,
  onLoad,
}) => {
  const tags = data.tags;

  const formData = {
    ...data,
    tags: typeof tags === 'object' ? tags : tags.split(','),
  };
  console.log(formData, 'from   handler');
  if (method === 'create') {
    await createBlog(formData, onLoad);
  } else await updateBlog(id, formData, onLoad);
};
