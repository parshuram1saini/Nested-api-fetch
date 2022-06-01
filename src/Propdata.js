import React from "react";
import PropTypes from "prop-types";

function Propdata({ name, image }) {
  return (
    <div>
      <h2> hello {name}</h2>
      <img src={image} alt="mypicture" />
    </div>
  );
}
Propdata.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Propdata;
