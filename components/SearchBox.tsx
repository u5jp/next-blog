import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <div className="bl_button2">
          <input
            className="bl_button2_inner"
            type="submit"
            value="search"
            disabled={text?false:true}
          />
          <FontAwesomeIcon
            className="bl_button2_icon"
            size="1x"
            icon="search"/>
        </div>
      </form>
    </div>
  )
}

export default SearchBox
