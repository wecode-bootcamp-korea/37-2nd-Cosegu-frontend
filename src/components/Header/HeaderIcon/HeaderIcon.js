import React from "react";
import styled from "styled-components";
import LikeIcon from "./LikeIcon";
import LoginIcon from "./LoginIcon";
import LogoutIcon from "./LogoutIcon";

const HeaderIcon = () => {
  return (
    <IconWrap>
      <LikeIcon />
      <LoginIcon />
      <LogoutIcon />
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
