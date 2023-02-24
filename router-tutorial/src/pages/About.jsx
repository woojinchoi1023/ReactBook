import React from "react";
import { useSearchParams } from "react-router-dom";

const About = () => {
  const [serachParams] = useSearchParams();
  const showDetail = serachParams.get("detail");
  return (
    <>
      <h1>소개 page</h1>
      {showDetail && <div>detail true!!</div>}
    </>
  );
};

export default About;
