import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  //부모의 경로까지 써줄 필요 없다
  //element안에서 화살표 함수 쓸 필요 없다
  //하위 페이지 있다면 부모 라우트에 /* 써줘야 함 exact 대체
  const activeStyle = {
    background: "black",
    color: "white",
  };
  return (
    <div>
      <h3>사용자목록: </h3>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => activeStyle}
            to={"/profiles/velopert"}
          >
            velopert
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => activeStyle}
            to={"/profiles/woojin"}
          >
            woojin
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/*" element={<div>select user</div>} />
        <Route path="/:username" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Profiles;
