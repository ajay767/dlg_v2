import withAuth from '@lib/withAuth';
import Modal from '@components/Modal';
import { convertToRaw } from 'draft-js';
import { AiFillCloseCircle } from 'react-icons/ai';
import BlogMarkdown from '@components/BlogMarkdown';
import Typography from '../Typography';
function PreviewBlogCard({ closePreviewModal, blogBody }) {
  return (
    <Modal>
      <div className='bg-white w-11/12 h-2/3 md:w-8/12 lg:w-6/12 rounded p-3 md:p-5 overflow-y-scroll scrollbar-hide'>
        <div className='flex justify-between'>
          <Typography
            type='section'
            className='font-bold text-base text-gray-600 md:text-xl'
          >
            Preview
          </Typography>
          <span className='cursor-pointer' onClick={closePreviewModal}>
            <AiFillCloseCircle size={24} color='white' fill='#2a2a2a' />
          </span>
        </div>
        <BlogMarkdown data={blogBody} />
      </div>
    </Modal>
  );
}
const authProp = {
  component: PreviewBlogCard,
  allowed: ['admin'],
};
export default withAuth(authProp);
