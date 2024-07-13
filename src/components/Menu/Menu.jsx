import MenuItem from '../MenuItem';
import PropTypes from 'prop-types';
import './Menu.css'

function Menu({ items, isVisible = true }) {
  // const { items, title, isVisible } = props;

  if (!isVisible) {
    return <button>{'<'}</button>;
  }

  return (
    <ul className='sidebar-menu'>
      {items.map((el, index) => {
        return <MenuItem key={index} item={el} isActive={index === 0} />;
      })}
    </ul>
  );
}

// const Menu = () => {
//     return <div>Menu</div>
// }

Menu.propTypes = {
  items: PropTypes.array.isRequired,
  isVisible: PropTypes.bool
};

export default Menu;
