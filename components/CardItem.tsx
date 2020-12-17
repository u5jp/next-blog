import CategoryTag from 'components/CategoryTag';
import Link from 'next/link';
import { FC } from 'react';

type Props = IBlogsFields & CLASS_NAME

const CardItem:FC<Props> = ({
    className,
    categories,
    date,
    subtitle,
    thumbnail,
    title,
    slug,
  }) => {
  return (
    <div className={`${className} hp-clickable hp-hoverable`}>
      {Link && (
        <Link
          href="/blogs/[slug]"
          as={`/blogs/${slug}`}
        ><a>
            <div className="bl_card">
              <p>{date}</p>
              <div className="bl_card_imgWrap">
                <img src={`${thumbnail.fields.file.url}?fm=webp&h=150`} height="150" alt={thumbnail.fields.title}/>
              </div>
              <div className="bl_card_textWrap">
                <p className="bl_card_title">{title.length > 20 ? title.substr(0,20) + "..." : title}</p>
                <p className="bl_card_text">{subtitle.length > 30 ? subtitle.substr(0,30) + "..." : subtitle}</p>
              </div>
              <div className="bl_card_categories bl_category_wrapper">
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
            </div>
        </a></Link>
      )}
    </div>
  );
};

export default CardItem;
