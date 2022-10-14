import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { API } from "config";
import styled from "styled-components";
import variables from "styles/variables";
import theme from "styles/theme";

const LikeIcon = () => {
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    fetch(`${API.HEADER}/likes`, {
      method: "GET",
      headers: {
        authorization: localStorage.getItem("TOKEN"),
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((res) => res.json())
      .then((res) => setLikeCount(res.likeList.length));
  }, []);

  return (
    <LinkIcon to="/wishlist">
      <AiOutlineHeart size="28px" className="icon" />
      {Boolean(likeCount) && <LikeCount>{likeCount}</LikeCount>}
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
  background: ${theme.mainColor};
  border-radius: 50%;
`;
