import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Error = () => {
  const navigate = useNavigate();

  return (
    <DefaultWrapper className="openAnimation">
      <section>
        <img src="img/footer-logo.png" />
      </section>
      <section>
        404 Error
        <br />
        Page not found
        <br />
        return to <a href="/">main</a>
      </section>
    </DefaultWrapper>
  );
};

const DefaultWrapper = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #007776;
  font-size: 4.8rem;
  color: #ffffff;
  min-height: 360px;
`;

export default Error;
