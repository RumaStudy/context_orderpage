import React from "react";

const ErrorBanner = ({ message }) => {
  let errorMessage = message || "에러가 발생했습니다.";
  return (
    <div
      style={{
        backgroundColor: "#50acec",
        color: "white",
        textAlign: "center",
        height: "70px",
      }}
    >
      {errorMessage}
    </div>
  );
};

export default ErrorBanner;
