import HighlightCode from 'components/HighlightCode';
import Image from 'next/image';
import { FC } from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { MARKS } from '@contentful/rich-text-types';

type Props = CLASS_NAME & BODY

const options = {
  renderNode: {
    "embedded-asset-block": ({ data }) =>
      <div className="bl_blogBody_img">
        <Image
          src={`https:${data.target.fields.file.url}?fm=webp&w=500`}
          alt={data.target.fields.title}
          loading="lazy"
          height={data.target.fields.file.details.image.height}
          width={data.target.fields.file.details.image.width}
        />
      </div>
  },
  renderMark: {
    [MARKS.CODE]: (text) => <HighlightCode>{text}</HighlightCode>,
  },
};

const BlogContent
  : FC<Props>
  = ({ className, body }) => {
  return (
    <div className={`${className}_body bl_blogBody`}>
      {documentToReactComponents(body, options)}
    </div>
  );
};

export default BlogContent;
