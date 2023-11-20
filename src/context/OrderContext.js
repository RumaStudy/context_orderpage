import { createContext, useMemo, useState, useEffect } from "react";

export const OrderContext = createContext();

export default function OrderContextProvider(props) {
  const [orderCounts, setOrderCounts] = useState({
    products: new Map(),
    options: new Map(),
  });

  const [totals, setTotals] = useState({ products: 0, options: 0, total: 0 });

  const pricePerItem = {
    products: 1000,
    options: 500,
  };

  const calculateSubtotal = (orderType, orderCounts) => {
    let optionCount = 0;
    for (const count of orderCounts[orderType].values()) {
      optionCount += count;
    }

    return optionCount * pricePerItem;
  };

  useEffect(() => {
    const productsTotal = calculateSubtotal("products", orderCounts);
    const optionsTotal = calculateSubtotal("options", orderCounts);
    const total = productsTotal + optionsTotal;
    setTotals({
      products: productsTotal,
      options: optionsTotal,
      total,
    });
  }, [orderCounts]);

  const value = useMemo(() => {
    function updateCounts(itemName, newItemCount, orderType) {
      // 불변성 유지를 위해 깊은 복사 Spread Operator
      const newOrderCounts = { ...orderCounts };
      console.log("newOrderCounts before", newOrderCounts);

      const orderCountsMap = orderCounts[orderType];
      orderCountsMap.set(itemName, parseInt(newItemCount));

      setOrderCounts(newOrderCounts);
    }

    return [{ ...orderCounts, totals }, updateCounts];
  }, [orderCounts]); // 리렌더링을 최대한 피하기 위해 useMemo()로 작성

  return <OrderContext.Provider value={value} {...props} />;
}
