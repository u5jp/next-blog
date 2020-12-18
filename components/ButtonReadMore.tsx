


import React, { FC } from 'react';

type MORE_BLOG = {
  hitEnd?: boolean;
  setSize?: (param:number)=>void;
  size?: number;
}

type Props = CLASS_NAME & MORE_BLOG

const ButtonReadMore: FC<Props> =
  ({ className, hitEnd, setSize, size }) => {
    return (
      <div className={`el_button ${className}`}>
        <button
          disabled={hitEnd}
          onClick={() => { setSize(size + 1) }}
          className="el_button_inner">
          Read More
      </button>
      </div>
    )
  };

export default React.memo(ButtonReadMore);
