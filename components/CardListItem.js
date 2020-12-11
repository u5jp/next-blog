import Link from "next/link";
import CategoryTag from "components/CategoryTag";

const CardListItem = ({
  className,
  title,
  subtitle,
  date,
  categories,
  link,
}) => {
  return (
    <div className={`${className} u-clickable u-hoverable`}>
      {Link && (
        <Link {...link}>
          <a>
            <div className="card">
              <p>{date}</p>
              <div className="card_textWrap">
                <p className="card_title">{title}</p>
                <p className="card_text">{subtitle}</p>
              </div>
              <div className="card_categories categoryWrap">
                {categories.map((category, index) => (
                  <CategoryTag
                    key={index}
                    className="categoryWrap_category"
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

export default CardListItem;
