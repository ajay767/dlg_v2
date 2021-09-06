import cookie from 'cookie';

export default (req, res) => {
  const token = 'this-is-my-strong-cookie-http-only';
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      path: '/',
      maxAge: 60 * 60,
      sameSite: 'strict',
    })
  );
  res.status(200).json({ token });
};
