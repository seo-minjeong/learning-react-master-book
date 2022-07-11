import React from "react";
import { Link, Route } from "react-router-dom";
import Profile from "../../Profile";
import WithRouterSample from "./WithRouterSample";

// url 파라미터 예제

const Profiles = () => {
  return (
    <div>
      (...)
      <WithRouterSample />
    </div>
    // <div>
    //   <h3>사용자 목록:</h3>
    //   <ul>
    //     <li>
    //       <Link to="/profiles/velopert">velopert</Link>
    //     </li>
    //     <li>
    //       <Link to="/profiles/gildont">gildont</Link>
    //     </li>
    //   </ul>

    //   <Route
    //     path="/profiles"
    //     exact
    //     render={() => <div>사용자를 선택해 주세요.</div>}
    //   />
    //   <Route path="/profiles/:username" component={Profile} />
    // </div>
  );
};

export default Profiles;
