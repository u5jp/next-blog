import CategoryTag from 'components/CategoryTag';

export default function blogHeader({
  className,
  date,
  title,
  subtitle,
  thumbnail,
  categories,
}) {
  return (
    <div className={`blogHeader ${className}`}>
      <p className="blogHeader_date">{date}</p>
      <h1 className="blogHeader_title">{title}</h1>
      <div className="blogHeader_categories categoryWrap">
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
      <h2 className="blogHeader_subtitle">{subtitle}</h2>
      <div className="blogHeader_imgWrap">
        <img src={thumbnail.fields.file.url} alt={thumbnail.fields.title} />
      </div>
    </div>
  );
}
