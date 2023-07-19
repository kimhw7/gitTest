import React from "react";
import { styled } from "styled-components";
import { Reset } from "styled-reset";

import Footer from "./components/footer";

function App() {
  return (
    <React.Fragment>
      <Reset />
      <DefaultWrapper className="background">
        <div className="contentWrapper">{/* content */}</div>

        <Footer />
      </DefaultWrapper>
    </React.Fragment>
  );
}

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

const DefaultWrapper = styled.div`
  html {
    font-size: 10px;
  }
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default App;
