import React from "react";
import { useRecoilValue } from "recoil";
import { ReadNewUsers } from "../../Global/RecoilStateManagement";

const Loading = () => {
  const AccessUserData = useRecoilValue(ReadNewUsers);
  console.log(AccessUserData);
  return (
    <div>
      Page coming soon.............Loading
      {AccessUserData?.email}
    </div>
  );
};

export default Loading;
