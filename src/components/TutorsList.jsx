import PropTypes from 'prop-types';
import TutorItem from './TutorItem';

const TutorsList = ({ tutors }) => {
  function renderList(items) {
    return items.map(item => (
      <TutorItem key={item.phone} phone={item.phone} firstName={item.firstName} lastName={item.lastName} />
    ));
  }

  return <ul>{renderList(tutors)}</ul>;
};

export default TutorsList;

TutorsList.propTypes = {
  tutors: PropTypes.array,
};
