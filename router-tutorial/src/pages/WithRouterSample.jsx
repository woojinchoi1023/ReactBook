import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const WithRouterSample = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <h4>location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)}
        rows={7}
        readOnly={true}
      />
      <h4>Match</h4>
      <textarea
        value={JSON.stringify(params, null, 2)}
        rows={7}
        readOnly={true}
      />
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        HOME
      </button>
    </div>
  );
};

export default WithRouterSample;
