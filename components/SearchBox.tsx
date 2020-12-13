import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type PropsOptional<T> = {
  handleSubmit: (e: any) => void;
  setText: (param:T)=>void;
  text?:T
};

function SearchBox({
  handleSubmit,
  setText,
  text }: PropsOptional<string>) {

  return (
    <div className="bl-searchBox">
      <form onSubmit={handleSubmit}>
        <p className="bl-searchBox_header">Search Box</p>
        <div className="bl-searchBox_textArea">
          <input
            className="bl-searchBox_input"
            type="search"
            placeholder="Enter a keyword"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <div className="bl-button2">
          <FontAwesomeIcon
            className="bl-button2_icon"
            size="1x"
            icon="search"/>
          <input
            className="bl-button2_inner"
            type="submit"
            value="search"/>
        </div>
      </form>
    </div>
  )
}

export default SearchBox
