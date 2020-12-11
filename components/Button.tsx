import React from 'react';

type PropsOptional<T> = {
  className?: string;
  hitEnd: boolean;
  setSize: (param:T)=>void;
  size: T;
};

function Button({className,hitEnd,setSize,size}:PropsOptional<number>) {
  return (
    <div className={`c-button ${className}`}>
      <button
        disabled={hitEnd}
        onClick={() => { setSize(size + 1)}}
        className="c-button_inner">
        Read More
      </button>
    </div>
  )
}
export default Button;
