import React from "react";
import { CircleLoader } from "react-spinners";

const LoadingSpinner = ({ loading }) => {
  return (
    <div className="loading-spinner-container">
      <CircleLoader color={"#1789c9"} loading={loading} size={500} />
    </div>
  );
};

export default LoadingSpinner;
