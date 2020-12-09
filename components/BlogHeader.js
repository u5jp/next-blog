export default function BlogHead({
  className,
  date,
  title,
  subtitle,
  thumbnail,
}) {
  return (
    <div className={className}>
      <p>{date}</p>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <img src={thumbnail.url} alt={thumbnail.title} />
    </div>
  );
}
