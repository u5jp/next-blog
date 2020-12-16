import Link from 'next/link';
import { FC } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = ICategoriesFields & CLASS_NAME & INDEX

const CategoryTags:FC<Props> = (
  {
    index,
    className,
    slug,
    category,
  }
) => {
  return (
    <>
      {index === 0 ?
        <div className={`${className}_tagWrap`}>
          <FontAwesomeIcon
            size="1x"
            icon="tags"
          />
        </div>:""}
        <object className={`${className} hp-clickable hp-hoverable`}>
          {Link && (
            <Link
              href="/category/[slug]"
              as = {`/category/${slug}`}
            ><a>
                <p>{category}</p>
            </a></Link>
          )}
        </object>
    </>
  );
};

export default CategoryTags;
