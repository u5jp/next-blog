import ButtonReadMore from 'components/ButtonReadMore';
import CategoryTag from 'components/CategoryTag';
import Image from 'next/image';
import React, { FC } from 'react';

type Props = IBlogsFields & CLASS_NAME

const CardItem: FC<Props> = ({
    className,
    categories,
    date,
    subtitle,
    thumbnail,
    title,
    slug,
}) => {
  return (
    <div className={`${className}`}>
      <div className="bl_card">
        <p>{date}</p>
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
        <div className="bl_card_imgWrap">
          <div className="bl_card_img">
            <Image
              src={`https:${thumbnail.fields.file.url}?fm=webp&h=200`}
              alt={thumbnail.fields.title}
              loading="lazy"
              height={thumbnail.fields.file.details.image.height}
              width={thumbnail.fields.file.details.image.width}
            />
          </div>
        </div>
        <div className="bl_card_textWrap">
          <p className="bl_card_title">{title.length > 20 ? title.substr(0,20) + "..." : title}</p>
          <p className="bl_card_text">{subtitle.length > 30 ? subtitle.substr(0,30) + "..." : subtitle}</p>
        </div>
        <ButtonReadMore
          slug={slug}
        />
      </div>
    </div>
  );
};

export default React.memo(CardItem);
