import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SearchButton from './SearchButton';

type PropsOptional<T> = {
  handleSubmit: (e: any) => void;
  setText: (param:T)=>void;
  text?: T;
};

function SearchBox({
  handleSubmit,
  setText,
  text}: PropsOptional<string>) {

  return (
    <div className="bl_searchBox">
      <form onSubmit={handleSubmit}>
        <p className="bl_searchBox_header">Search Box</p>
          <input
            className="bl_searchBox_input"
            type="search"
            placeholder="Enter a keyword"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        <SearchButton disabled={text ? false : true}/>
      </form>
    </div>
  )
}

export default SearchBox
