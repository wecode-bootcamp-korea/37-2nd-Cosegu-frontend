import React from "react";
import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";

const LogoutIcon = ({ isLogin, setIsLogin }) => {
  const navigate = useNavigate();
  const logoutHandle = () => {
    localStorage.removeItem("TOKEN");
    setIsLogin(false);
    navigate("/");
  };

  return (
    isLogin && <MdLogout onClick={logoutHandle} size="28px" className="icon" />
  );
};

export default LogoutIcon;
