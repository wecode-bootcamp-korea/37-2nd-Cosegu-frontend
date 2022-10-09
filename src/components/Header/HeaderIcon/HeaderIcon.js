import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LikeIcon from "./LikeIcon";
import LoginIcon from "./LoginIcon";
import LogoutIcon from "./LogoutIcon";

const HeaderIcon = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("TOKEN")) setIsLogin(true);
  }, []);

  return (
    <IconWrap>
      <LikeIcon />
      <LoginIcon isLogin={isLogin} />
      {isLogin && <LogoutIcon isLogin={isLogin} setIsLogin={setIsLogin} />}
    </IconWrap>
  );
};

export default HeaderIcon;

const IconWrap = styled.div`
  width: 180px;
  text-align: right;

  .icon {
    margin-left: 15px;
    color: black;
    cursor: pointer;
  }
`;
