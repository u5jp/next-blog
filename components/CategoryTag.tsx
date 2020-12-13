import Link from 'next/link';

const CategoryTags = ({ className, link, category }) => {
  return (
    <div className={`${className} hp-clickable hp-hoverable`}>
      {Link && (
        <Link {...link}>
          <a>
            <p>{category}</p>
          </a>
        </Link>
      )}
    </div>
  );
};

export default CategoryTags;
