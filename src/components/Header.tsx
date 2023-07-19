import { styled } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

// height 80 80 55

const menuList = [
  {
    name: "회사소개",
    path: "/",
  },
  {
    name: "조직구성",
    path: "/organization",
  },
  {
    name: "사업분야",
    path: "/businessAreas",
  },
  {
    name: "회사기초정보",
    path: "/information",
  },
  {
    name: "고객지원",
    path: "/support",
  },
  {
    name: "오시는길",
    path: "/wayToCome",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <HeaderWrapper>
      <div className="content-container">
        <LogoWrapper className="logo-Wrapper">
          <img
            className="header-logo"
            src="img/footer-logo.png"
            alt="header 로고사진, 클릭시 메인페이지 이동"
            onClick={() => navigate("/")}
          />
        </LogoWrapper>
        <MenuWrapper className="menu-wrapper">
          <div className="menu-list">
            {menuList.map((el, idx) => {
              return (
                <li
                  key={idx}
                  className={
                    location.pathname === el.path
                      ? "menu-tab active"
                      : "menu-tab"
                  }
                  onClick={() => navigate(el.path)}
                >
                  {el.name}
                </li>
              );
            })}
          </div>
        </MenuWrapper>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
  border-bottom: 1px solid #e5e5e5;

  > .content-container {
    width: 1024px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;

const LogoWrapper = styled.div`
  > img:hover {
    cursor: pointer;
  }
`;
const MenuWrapper = styled.ul`
  min-width: 600px;
  > .menu-list {
    display: flex;
    justify-content: space-between;

    > .menu-tab {
      padding: 4px;
    }
    > .active {
      border-bottom: 1px solid #5a7fdf;
      color: #5a7fdf;
    }
    .menu-tab:hover {
      cursor: pointer;
      transition-duration: 0.2s;
      border-bottom: 1px solid #5a7fdf;
      color: #5a7fdf;
    }
  }
`;

export default Header;
