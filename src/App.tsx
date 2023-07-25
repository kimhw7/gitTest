import React, { useEffect } from "react";
import { styled } from "styled-components";
import { Reset } from "styled-reset";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/footer";
import AboutUs from "./page/AboutUs";
import Organization from "./page/Organization";
import BusinessAreas from "./page/BusinessAreas";
import Information from "./page/Information";
import Support from "./page/Support";
import WayToCome from "./page/WayToCome";
import Menu from "./components/Menu";
import { menuList } from "./components/Header";
import Error from "./page/Error";
import Service from "./page/Service";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  const openMenuHandler = () => {
    setIsMenuOpen(true);
  };
  const closeMenuHandler = () => {
    setIsMenuOpen(false);
  };

  return (
    <React.Fragment>
      <Reset />
      {isMenuOpen && <Menu onMenuClose={closeMenuHandler} />}
      <DefaultWrapper className="background">
        <Header onMenuOpen={openMenuHandler} />
        <div className="main-content--wrapper">
          <img
            className="mainImgWrapper"
            id="mainImg"
            src="img/mainImg.png"
            alt="하얀 책상 위에 노트북이 올려져 있는 사진"
          ></img>
          <div className="current-page">
            <p>{menuList.find((el) => el.path === location.pathname)?.name}</p>
          </div>
        </div>
        <div className="contentWrapper">
          {/* content */}
          <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="/organization" element={<Organization />} />
            <Route path="/businessAreas" element={<BusinessAreas />} />
            <Route path="/information" element={<Information />} />
            <Route path="/support" element={<Support />} />
            <Route path="/wayToCome" element={<WayToCome />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>

        <Footer />
      </DefaultWrapper>
    </React.Fragment>
  );
}

const DefaultWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .main-content--wrapper {
    display: flex;
    height: auto;
    flex-direction: column;
    align-items: center;
  }

  .mainImgWrapper {
    height: 160px;
    width: 98vw;
  }

  .current-page {
    width: 1024px;
    border-bottom: 1px solid #a1a3b2;
    height: 60px;
    display: flex;
    align-items: center;

    > p {
      font-size: 28px;
      font-weight: bolder;
      margin-left: 16px;
    }
  }

  @media screen and (max-width: 1023px) {
    .current-page {
      width: 744px;
    }
    .mainImgWrapper {
      height: 120px;
      width: 98vw;
    }
  }
  @media screen and (max-width: 767px) {
    .current-page {
      width: 360px;
    }
    .mainImgWrapper {
      height: 110px;
      width: 96vw;
    }
  }

  > .contentWrapper {
    width: 1024px;
    word-break: keep-all;
    min-height: calc(100vh - 463px);
    height: auto;

    @media screen and (max-width: 1023px) {
      width: 744px;
      min-height: calc(100vh - 498px);
    }
    /* 모바일 */
    @media screen and (max-width: 767px) {
      width: 360px;
      min-height: calc(100vh - 448px);
    }
  }
`;

export default App;
