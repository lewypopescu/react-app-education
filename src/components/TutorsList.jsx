import PropTypes from "prop-types";
import TutorItem from "./TutorItem";
import styled from "@emotion/styled";

const TutorsList = ({ tutors, fontColor }) => {
  const TutorsListStyles = styled.ul(
    {
      listStyle: "none",
    },
    (props) => ({
      color: props.color,
      padding: props.padding,
    })
  );

  function renderList(items) {
    return items.map((item) => (
      <TutorItem
        key={item.phone}
        phone={item.phone}
        firstName={item.firstName}
        lastName={item.lastName}
      />
    ));
  }

  return (
    <TutorsListStyles padding="32px" color={fontColor}>
      {renderList(tutors)}
    </TutorsListStyles>
  );
};

export default TutorsList;

TutorsList.propTypes = {
  tutors: PropTypes.array,
};
