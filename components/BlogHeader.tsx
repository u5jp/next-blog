import CategoryTag from 'components/CategoryTag';
import Image from 'next/image';
import { FC } from 'react';

type Props = IBlogsFields & CLASS_NAME

const BlogHeader:FC<Props> = ({
  className,
  date,
  title,
  subtitle,
  thumbnail,
  categories,
}) => {
  return (
    <div className={`bl_blogHeader ${className}_header`}>
      <p className="bl_blogHeader_date">{date}</p>
      <h1 className="bl_blogHeader_title">{title}</h1>
      <div className="bl_blogHeader_categories bl_category_wrapper">
        {categories.map((category, index) => (
          <CategoryTag
            key={index}
            index={index}
            className="bl_category"
            {...category.fields}
          />
          )
        )}
      </div>
      <div className="bl_blogHeader_imgWrap">
        <Image
          src={`https:${thumbnail.fields.file.url}?fm=webp&w=700`}
          alt={thumbnail.fields.title}
          loading="lazy"
          height={thumbnail.fields.file.details.image.height}
          width={thumbnail.fields.file.details.image.width}
        />
      </div>
      <h2 className="bl_blogHeader_subtitle">{subtitle}</h2>
    </div>
  );
}

export default BlogHeader;
