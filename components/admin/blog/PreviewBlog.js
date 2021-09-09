import Modal from '@components/Modal';
import { BsPlus } from 'react-icons/bs';
import BlogMarkdown from '@components/BlogMarkdown';
import Typography from '../../Typography';

export default function PreviewBlogCard({ closePreviewModal, blogBody }) {
  return (
    <Modal>
      <div className="bg-white w-11/12 h-2/3 md:w-8/12 lg:w-6/12 rounded p-3 md:p-5 overflow-y-scroll scrollbar-hide">
        <div className="flex justify-between mb-2">
          <Typography
            type="section"
            className="font-bold text-base text-gray-600 md:text-xl"
          >
            Preview
          </Typography>
          <div
            onClick={closePreviewModal}
            className="transform rotate-45 cursor-pointer h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center"
          >
            <BsPlus size={35} />
          </div>
        </div>
        <BlogMarkdown data={blogBody} />
      </div>
    </Modal>
  );
}
