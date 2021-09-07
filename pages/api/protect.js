import cookie from 'cookie';

export default (req, res) => {
  console.log('Incoming request for protect');
  const cookieStr = req.headers.cookie || '';
  const token = cookie.parse(cookieStr).token;
  if (!token) {
    res.status(200).json({ auth: false });
  } else res.status(200).json({ auth: true });
};
