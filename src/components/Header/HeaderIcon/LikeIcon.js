import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import variables from "styles/variables";

const LikeIcon = () => {
  return (
    <LinkIcon to="/wishlist">
      <AiOutlineHeart size="28px" className="icon" />
      <LikeCount>3</LikeCount>
    </LinkIcon>
  );
};

export default LikeIcon;

const LinkIcon = styled(Link)`
  position: relative;
`;

const LikeCount = styled.div`
  ${variables.flexSet("center", "center")};
  position: absolute;
  top: -20px;
  left: 34px;
  width: 20px;
  height: 20px;
  padding-top: 2px;
  color: white;
  background: ${(props) => props.theme.mainColor};
  border-radius: 50%;
`;
