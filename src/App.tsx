import React from "react";
import { styled, createGlobalStyle, keyframes } from "styled-components";
import { reset } from "styled-reset";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import "./asset/font/font.css";

import Header from "./components/Header";
import Footer from "./components/footer";
import AboutUs from "./page/AboutUs";
import BusinessAreas from "./page/BusinessAreas";
import Service from "./page/Service";
import Organization from "./page/Organization";
import Information from "./page/Information";
import Support from "./page/Support";
import WayToCome from "./page/WayToCome";
import Menu from "./components/Menu";
import { menuList } from "./components/Header";
import Error from "./page/Error";

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
      <GlobalStyles />

      <Menu onMenuClose={closeMenuHandler} isMenuOpen={isMenuOpen} />
      <DefaultWrapper className="background">
        <Header onMenuOpen={openMenuHandler} />
        <div className="main-content--wrapper">
          <picture className="mainImgWrapper">
            <source srcSet="img/mainImg.webp" type="image/webp" />
            <source srcSet="img/mainImg.png" type="image/png" />
            <img
              className="mainImgWrapper"
              id="mainImg"
              src="img/mainImg.png"
              alt="하얀 책상 위에 노트북이 올려져 있는 사진"
            />
          </picture>
          <div className="current-page">
            <h1>
              {menuList.find((el) => el.path === location.pathname)?.name}
            </h1>
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
            {/* <Route path="/Service" element={<Service />} /> */}
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </DefaultWrapper>
    </React.Fragment>
  );
}

// keyframes
const smoothAppear = keyframes`
    
    from {
      opacity: 0;
      transform: translateY(5%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  
  `;
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

    > h1 {
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

    .openAnimation {
      animation: ${smoothAppear} 1s;
    }

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

const GlobalStyles = createGlobalStyle`
  ${reset};
  /* 스크롤바 숨기기 */
  body::-webkit-scrollbar {
  display: none;
}

body {
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
}
`;

export default App;
