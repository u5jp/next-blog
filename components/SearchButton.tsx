import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SearchButton({disabled}) {
  return (
    <div className="el_inputButton">
      <input
        className="el_inputButton_inner"
        type="submit"
        value="search"
        disabled={disabled}
      />
      <FontAwesomeIcon
        className="el_inputButton_icon"
        size="1x"
        icon="search"/>
    </div>
  )
}

export default SearchButton
