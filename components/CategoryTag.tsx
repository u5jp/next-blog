import Link from "next/link";

const CategoryTags = ({ className, link, category }) => {
  return (
    <div className={`${className} u-clickable u-hoverable`}>
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
