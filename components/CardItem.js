import Link from "next/link";

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
    <div className={className}>
      {Link && (
        <Link {...link}>
          <a>
            <div className="card">
              <p>{date}</p>
              <div className="card_imgWrap">
                <img src={src} />
              </div>
              <div className="card_textWrap">
                <p className="card_title">{title}</p>
                <p className="card_text">{subtitle}</p>
              </div>
              <div className="card_categories categoryWrap">
                {categories.map((category, index) => (
                  <p className="categoryWrap_category" key={index}>
                    {category.fields.category}
                  </p>
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
