import React, { FC } from 'react';

import SearchButton from './SearchButton';

type PropsOptional<T> = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setText: (param:T)=>void;
  text?: T;
};

const SearchBox: FC<PropsOptional<string>> =
  ({handleSubmit,setText,text}) => {

  return (
    <div className="bl_searchBox">
      <form onSubmit={handleSubmit}>
        <p className="bl_searchBox_header">Search Box</p>
          <label>
            <input
              className="bl_searchBox_input"
              type="search"
              placeholder="Enter a keyword"
              value={text}
              onChange={e => setText(e.target.value)}
            />
          </label>
        <SearchButton disabled={text ? false : true}/>
      </form>
    </div>
  )
}

export default SearchBox
