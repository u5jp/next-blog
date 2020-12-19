import Link from 'next/link';
import React, { FC } from 'react';

type Props = CLASS_NAME & SLUG

const ButtonItemCard:FC<Props> = ({className,slug}) => {
  return (
    <div className={`el_button ${className}`}>
      <Link
        href="/blogs/[slug]"
        as={`/blogs/${slug}`}
      >
        <a>
          <div className="el_button_inner el_button_inner__colorReverse hp-w100 hp-mt10">
            Read More
          </div>
        </a>
      </Link>
    </div>
  )
}
export default ButtonItemCard;
