"use client";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

const LoadingPage = ({ loading }) => {
  return (
    <ClipLoader
      color="#0284C7"
      loading={loading}
      cssOverride={override}
      size={200}
      aria-label="Loading Spinner"
    />
  );
};

export default LoadingPage;
