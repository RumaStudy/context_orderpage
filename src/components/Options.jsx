import React from "react";

const Options = ({ name, description }) => {
  return (
    <form>
      <input type="checkbox" name="" id={`${name} option`} />{" "}
      <label htmlFor={`${name} option`}>{name}</label>
    </form>
  );
};

export default Options;
