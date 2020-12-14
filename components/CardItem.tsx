import CategoryTag from 'components/CategoryTag';
import Link from 'next/link';

const CardItem = ({
  className,
  title,
  subtitle,
  date,
  src,
  categories,
  link,
}) => {
  return (
    <div className={`${className} hp-clickable hp-hoverable`}>
      {Link && (
        <Link {...link}>
          <a>
            <div className="bl_card">
              <p>{date}</p>
              <div className="bl_card_imgWrap">
                <img src={src} />
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
                    category={category.fields.category}
                    link={{
                      href: "/category/[slug]",
                      as: `/category/${category.fields.slug}`,
                    }}
                  />
                ))}
              </div>
            </div>
          </a>
        </Link>
      )}
    </div>
  );
};

export default CardItem;
