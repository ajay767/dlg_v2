import { getPlaiceholder } from 'plaiceholder';

const baseURL = 'https://dlg-v2.vercel.app';

const blurImg = async (req, res) => {
  try {
    const url = req.body.src.startsWith('http')
      ? req.body.src
      : `${baseURL}${req.body.src}`;
    const data = await getPlaiceholder(url);
    res.status(200).json({ base64: data.base64 });
  } catch (err) {
    console.log(err);
    res.status(404).json({ status: 'error' });
  }
};

export default blurImg;
