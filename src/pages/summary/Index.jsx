import React, { useState } from "react";

const Summary = () => {
  const [checked, setChecked] = useState();
  return (
    <div>
      <form>
        <input
          type="checkbox"
          name="confirm-checkbox"
          id="confirm-checkbox"
          checked={checked}
          onClick={(e) => setChecked(!checked)}
        />{" "}
        <label htmlFor="confirm-checkbox">주문하시겠습니까?</label>
        <br />
        <button type="submit" disabled={!checked}>
          주문 확인
        </button>
      </form>
    </div>
  );
};

export default Summary;
