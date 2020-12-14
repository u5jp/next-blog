import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CategoryTags = ({ index, className, link, category }) => {
  return (
    <>
      {index === 0 ?
        <FontAwesomeIcon
          size="1x"
          icon="tags"
          className={`${className}_tag`}
        />:""}
      <div className={`${className} hp-clickable hp-hoverable`}>
        {Link && (
          <Link {...link}>
            <a>
              <p>{category}</p>
            </a>
          </Link>
        )}
        </div>
    </>
  );
};

export default CategoryTags;
