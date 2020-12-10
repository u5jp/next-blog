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
          <p className="categoryWrap_category" key={index}>
            {category.fields.category}
          </p>
        ))}
      </div>
      <h2 className="blogHeader_subtitle">{subtitle}</h2>
      <div className="blogHeader_imgWrap">
        <img src={thumbnail.fields.file.url} alt={thumbnail.fields.title} />
      </div>
    </div>
  );
}
