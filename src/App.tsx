import React from "react";
import { styled } from "styled-components";
import { Reset } from "styled-reset";
import { Routes, Route, useLocation } from "react-router-dom";
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
        <img
          className="mainImgWrapper"
          src="img/mainImg.png"
          alt="하얀 책상 위에 노트북이 올려져 있는 사진"
        ></img>
        <div className="current-page">
          <p>{menuList.find((el) => el.path === location.pathname)!.name}</p>
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
          </Routes>
        </div>

        <Footer />
      </DefaultWrapper>
    </React.Fragment>
  );
}

const DefaultWrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > .mainImgWrapper {
    width: 98vw;
  }

  > .current-page {
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
  }
  @media screen and (max-width: 767px) {
    .current-page {
      width: 360px;
    }
  }

  > .contentWrapper {
    width: 1024px;
    word-break: keep-all;

    @media screen and (max-width: 1023px) {
      width: 744px;
    }
    /* 모바일 */
    @media screen and (max-width: 767px) {
      width: 360px;
    }
  }
`;

export default App;
