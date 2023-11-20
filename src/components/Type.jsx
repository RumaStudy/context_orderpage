import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Products from "./Products";
import Options from "./Options";
import ErrorBanner from "./ErrorBanner";
import { OrderContext } from "../context/OrderContext";

const Type = ({ orderType }) => {
  // asynced Items State
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  // Context API Operating
  const [orderData, updateItemCount] = useContext(OrderContext);
  console.log(orderData, updateItemCount);

  // async Getting Items
  const axiosURL = `http://localhost:4000`;
  const loadItems = async (orderType) => {
    try {
      let response = await axios.get(`${axiosURL}/${orderType}`);
      setItems(response.data);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);

  const ItemComponent = orderType === "products" ? Products : Options;
  const OptionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      description={item.description}
    />
  ));

  if (error) {
    return <ErrorBanner message="에러가 발생했습니다." />;
  }

  return (
    <div>
      <h2>주문 종류</h2>
      <p>개당 가격</p>
      <p>총 가격: </p>
      <div
        style={{
          display: "flex",
          flexDirection: orderType === "options" ? "column" : "row",
        }}
      >
        {OptionItems}
      </div>
    </div>
  );
};

export default Type;
