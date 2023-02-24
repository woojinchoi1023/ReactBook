import React from "react";
import { useNavigate } from "react-router-dom";

const NavigateSample = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <div>
      <button onClick={handleGoBack}>goBack</button>
      <button onClick={handleGoHome}>GO HOME</button>
    </div>
  );
};

export default NavigateSample;
