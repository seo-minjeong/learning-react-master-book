import React from "react";
import { withRouter } from "react-router-dom";
import WithRouterSample from "./WithRouterSample";

// url 파라미터 예제
// (...)
const data = {
  velopert: {
    name: "김민준",
    desciption: "리액트를 좋아하는 개발자",
  },
  velopert: {
    name: "홍길동",
    desciption: "고전 소설 홍길동전의 주인공",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      (...)
      <WithRouterSample />
    </div>
  );
};

export default Profile;
