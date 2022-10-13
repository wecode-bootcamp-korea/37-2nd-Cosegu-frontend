import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "pages/Login/Login";
import Main from "pages/Main/Main";
import Recruitment from "pages/Recruitment/Recruitment";
import Faq from "pages/Faq/Faq";
import CrewRecruit from "pages/CrewRecruit/CrewRecruit";
import WishList from "pages/WishList/WishList";
import Mypage from "pages/Mypage/Mypage";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import OAuth from "pages/Login/SocialLogin/OAuth";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/signin/" element={<OAuth />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/crewrecruit" element={<CrewRecruit />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
