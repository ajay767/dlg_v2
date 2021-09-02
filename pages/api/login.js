// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cookies from '../../middlewares/cookies';

export default cookies((req, res) => {
  console.log(req.body);
  const token = 'this-is-my-strong-cookie';
  res.cookie('token', token, {
    httpOnly: true,
    secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
  });
  res.status(200).json({ token });
});
