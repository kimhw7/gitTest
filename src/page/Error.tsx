import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import React, { useEffect } from "react";

const Error = () => {
  const navigate = useNavigate();
  //   useEffect(() => {
  //     navigate("/");
  //   }, []);

  return (
    <DefaultWrapper>
      404 Error
      <br />
      Page not found
    </DefaultWrapper>
  );
};

const DefaultWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #007776;
  font-size: 4.8rem;
  color: #ffffff;
  min-height: 360px;
`;

export default Error;
