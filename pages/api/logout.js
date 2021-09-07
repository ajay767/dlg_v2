import cookie from 'cookie';

export default (req, res) => {
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      path: '/',
      expires: new Date(0),
      sameSite: 'strict',
    })
  );
  res.status(200).json({ message: 'logged out' });
};
