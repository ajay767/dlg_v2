import cookie from 'cookie';

export default (req, res) => {
  const token = 'this-is-my-strong-cookie-http-only';
  const role = req.body.email === 'aju@gmail.com' ? 'super' : 'admin';

  res.status(200).json({ token, role });
};
