import React from "react";
import { BounceLoader } from "react-spinners";
import "./styleLoading.css";
const LoadingSpinner = ({ loading }) => {
  return (
    <div className="loading-spinner-container flex center">
      <h1>Loading</h1>
      <BounceLoader color={"#1789c9"} loading={loading} size={75} />
    </div>
  );
};

export default LoadingSpinner;
