import React from "react";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";

const LogoutIcon = () => {
  return (
    <Link to="/">
      <MdLogout size="28px" className="icon" />
    </Link>
  );
};

export default LogoutIcon;
