import CategoryTag from 'components/CategoryTag';
import { FC } from 'react';

type Props = fields & className

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
        <img src={thumbnail.fields.file.url} alt={thumbnail.fields.title} />
      </div>
      <h2 className="bl_blogHeader_subtitle">{subtitle}</h2>
    </div>
  );
}

export default BlogHeader;
