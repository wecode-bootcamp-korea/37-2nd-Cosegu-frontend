import React from "react";
import { Link } from "react-router-dom";
import { MdPermIdentity } from "react-icons/md";

const LoginIcon = () => {
  return (
    <Link to="/login">
      <MdPermIdentity size="28px" className="icon" />
    </Link>
  );
};

export default LoginIcon;
