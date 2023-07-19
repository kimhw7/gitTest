import { styled } from "styled-components";
import { Reset } from "styled-reset";

import Footer from "./components/footer";

function App() {
  return (
    <>
      <Reset />
      <DefaultWrapper className="background">
        <div className="contentWrapper">{/* content */}</div>

        <Footer />
      </DefaultWrapper>
    </>
  );
}

const DefaultWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: 000000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default App;
