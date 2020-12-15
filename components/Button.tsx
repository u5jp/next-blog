import React, { FC } from 'react';

type PropsOptional<T> = {
  className?: string;
  hitEnd: boolean;
  setSize: (param:T)=>void;
  size: T;
};

const Button:FC<PropsOptional<number>> = ({className,hitEnd,setSize,size}) => {
  return (
    <div className={`el_button ${className}`}>
      <button
        disabled={hitEnd}
        onClick={() => { setSize(size + 1)}}
        className="el_button_inner">
        Read More
      </button>
    </div>
  )
}
export default Button;
