import React from "react";
import { useParams } from "react-router-dom";
import WithRouterSample from "./WithRouterSample";

const data = {
  velopert: {
    name: "김민준",
    discription: "react lover",
  },
  woojin: {
    name: "최우진",
    discription: "me",
  },
};

const Profile = () => {
  const { username } = useParams(); //url파라미터 사용법
  const profile = data[username];
  if (!profile) {
    return <div>Unknown User.</div>;
  }
  return (
    <>
      <div>
        <h2>
          {username}, {profile.name}
        </h2>
        <p>{profile.discription}</p>
        <WithRouterSample />
      </div>
    </>
  );
};

export default Profile;
