import React from "react";
import PropTypes from "prop-types";
const MyComponent = ({ name, favoriteNumber, children }) => {
  // const { name, children } = props;
  return (
    <>
      <h1>this is Component</h1>
      <h2>{name}</h2>
      <h3>children: {children}</h3>
      <h3>favoriteNumber: {favoriteNumber}</h3>
    </>
  );
};

MyComponent.defaultProps = {
  name: "default val",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
