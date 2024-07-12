import MenuItem from './MenuItem';
import PropTypes from 'prop-types';

function Menu({ items, isVisible = true }) {
  // const { items, title, isVisible } = props;

  if (!isVisible) {
    return <button>{'<'}</button>;
  }

  return (
    <>
      <ul>
        {items.map((el, index) => {
          return <MenuItem key={index} item={el} />;
        })}
      </ul>
      <button>{'<'}</button>
    </>
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
