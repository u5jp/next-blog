import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LIST_VIEW_ICONS = ["list", "border-all"];

const FilteringMenu = ({ onChange, filter }) => {
  return (
    <div>
      <FontAwesomeIcon
        className="u-clickable u-hoverable"
        size="2x"
        //TODO:typescriptERROR
        // icon={LIST_VIEW_ICONS[filter.view.list]}
        icon="list"
        onClick={() => {
          //クリック時に親onChangeに引数を伝搬
          onChange("view", { list: +!filter.view.list });
        }}
      />
    </div>
  );
};

export default FilteringMenu;
