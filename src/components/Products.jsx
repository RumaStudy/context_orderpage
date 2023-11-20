import React from "react";

const Products = ({ name, imagePath }) => {
  return (
    <div>
      <img
        src={`http://localhost:4000${imagePath}`}
        alt={`${name}_product`}
        style={{ display: "block", width: "75%", margin: "auto" }}
      />
      <form style={{ marginTop: "10px" }}>
        <label style={{ textAlign: "right" }}>{name}</label>
        <input
          type="number"
          name="quantity"
          min="0"
          defaultValue={0}
          id=""
          style={{ marginLeft: "7px" }}
        />
      </form>
    </div>
  );
};

export default Products;
