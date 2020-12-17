import React, { FC } from 'react';

import SearchButton from './SearchButton';

type PropsOptional<T> = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setText: (param:T)=>void;
  text: T;
  search?: T;
};

const SearchBox: FC<PropsOptional<string>> =
  ({ handleSubmit, setText, text, search }) => {

  return (
    <div className="bl_searchBox">
      <form onSubmit={handleSubmit}>
        <p className="bl_searchBox_header">Search Box</p>
          <label>
          <input
              aria-label="search box"
              className="bl_searchBox_input"
              type="search"
              placeholder="Enter a keyword"
              value={text}
              onChange={e => setText(e.target.value)}
            />
          </label>
          <SearchButton disabled={
            text && text !==search?false:true
            }
          />
      </form>
    </div>
  )
}

export default SearchBox
