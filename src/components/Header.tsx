import { styled } from "styled-components";

// height 80 80 55

const Header = () => {
  return (
    <>
      <HeaderContainer></HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.header`
  background-color: pink;
  width: 100%;
  height: 80px;
`;

export default Header;
