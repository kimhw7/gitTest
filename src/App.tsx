import React from "react";
import { styled } from "styled-components";
import { Reset } from "styled-reset";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/footer";
import AboutUs from "./page/AboutUs";
import Organization from "./page/Organization";
import BusinessAreas from "./page/BusinessAreas";
import Information from "./page/Information";
import Support from "./page/Support";
import WayToCome from "./page/WayToCome";

function App() {
  return (
    <React.Fragment>
      <Reset />
      <DefaultWrapper className="background">
        <Header />
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
  height: 100vh;
  @media screen and (max-width: 1023px) {
    height: calc(100vh - 60px);
  }
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default App;
