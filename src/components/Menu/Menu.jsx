import PropTypes from 'prop-types';

import './Menu.css';

import MenuItem from '../Menu/';

function Menu({ items }) {
  return (
    <ul className="sidebar-menu">
      {items.map((el, index) => {
        return <MenuItem key={index} item={el} isActive={index === 0} />;
      })}
    </ul>
  );
}

Menu.propTypes = {
  items: PropTypes.array,
  isVisible: PropTypes.bool,
};

export default Menu;
