import React from "react";
import qs from "qs";

// url 쿼리 예제
const About = ({ location }) => {
  const query = qs.parse(location.search, {
    //  이 설정을 통해 문자열 맨 앞의 ?를 생략합니다.
    ignoreQueryPrefix: true,
  });
  // 쿼리의 파싱 결과 값은 문자열입니다.
  const showDetail = query.detail === "true";
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트입니다.</p>
      {showDetail && <p>detail 값을 true로 설정하셨군요!</p>}
    </div>
  );
};

export default About;
