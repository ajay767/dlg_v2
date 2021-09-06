import Typography from './Typography';
import CustomImageComponent from './Image';
import Gist from 'react-gist';
import reactHTMLParser from 'react-html-parser';

function BlogMarkdown({ data = {} }) {
  const renderBlog = () => {
    return data.blocks.map((block) => {
      switch (block.type) {
        case 'header-one': {
          return (
            <Typography
              key={block.key}
              type="secondary"
              className="text-gray-700 my-2"
            >
              {block.text}
            </Typography>
          );
        }
        case 'header-two': {
          return (
            <Typography key={block.key} type="section">
              {block.text}
            </Typography>
          );
        }
        case 'atomic': {
          const atomicKey = block.entityRanges[0].key;
          const src = data.entityMap[atomicKey].data.src;
          return (
            <div key={block.key}>
              <CustomImageComponent
                className="blog__poster mb-4"
                src={src}
                alt="digital Learning group"
              />
            </div>
          );
        }

        case 'code': {
          return <Gist id={block.text} key={block.key} />;
        }

        case 'blockquote': {
          return (
            <Typography key={block.key} className="my-10" type="blockquote">
              {block.text}
            </Typography>
          );
        }
        case 'unordered-list-item': {
          return (
            <Typography key={block.key} type="list-item" className="list-disc">
              {block.text}
            </Typography>
          );
        }
        case 'ordered-list-item': {
          return (
            <Typography
              key={block.key}
              type="list-item"
              className="list-decimal "
            >
              {block.text}
            </Typography>
          );
        }
        default: {
          let text = block.text;
          let extraLength = 0;
          block.inlineStyleRanges.forEach((inlineStyle) => {
            if (inlineStyle.style === 'BOLD') {
              let str = text;
              const start = inlineStyle.offset + extraLength;
              const len = inlineStyle.length;

              text =
                str.slice(0, start) +
                '<span class="bold">' +
                str.slice(start, start + len) +
                '</span>' +
                str.slice(start + len);
              extraLength = 26;
            }

            if (inlineStyle.style.startsWith('bgcolor')) {
              let str = text;
              const start = inlineStyle.offset + extraLength;
              const len = inlineStyle.length;

              text =
                str.slice(0, start) +
                '<span class="highlight">' +
                str.slice(start, start + len) +
                '</span>' +
                str.slice(start + len);
              extraLength = 26;
            }
          });
          return (
            <Typography type="content" key={block.key} className="mb-4">
              {reactHTMLParser(text)}
            </Typography>
          );
        }
      }
    });
  };
  return (
    <div className=" text-gray-600 mb-10">
      {Boolean(Object.keys(data).length) && renderBlog()}
    </div>
  );
}

export default BlogMarkdown;
