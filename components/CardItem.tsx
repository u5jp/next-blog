import CategoryTag from 'components/CategoryTag';
import Link from 'next/link';
import { FC } from 'react';

type Props = fields & className

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
                <img src={thumbnail.fields.file.url} />
              </div>
              <div className="bl_card_textWrap">
                <p className="bl_card_title">{title}</p>
                <p className="bl_card_text">{subtitle}</p>
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
