import cookie from 'cookie';

export default (req, res) => {
  const cookieStr = req.headers.cookie || '';
  const token = cookie.parse(cookieStr).token;
  if (!token) {
    res.status(200).json({ auth: false });
  } else res.status(200).json({ auth: true });
};
