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
