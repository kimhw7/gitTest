import { styled } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

interface Props {
  onMenuOpen: () => void;
}

export const menuList = [
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

const Header = (props: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <HeaderWrapper>
      <div className="content-container">
        <LogoWrapper className="logo-Wrapper">
          <picture className="header-logo">
            <source srcSet="img/footer-logo.webp" type="image/webp" />
            <source srcSet="img/footer-logo.png" type="image/png" />
            <img
              className="header-logo"
              src="img/footer-logo.png"
              alt="header 로고사진, 클릭시 메인페이지 이동"
              onClick={() => navigate("/")}
            />
          </picture>
        </LogoWrapper>
        <MenuWrapper className="menu-wrapper">
          <ul className="menu-list">
            {menuList.map((el, idx) => {
              return (
                <li
                  key={idx + "menu"}
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
          </ul>
          <div className="menuIcon-wrapper">
            <IoMenu className="icon" onClick={props.onMenuOpen} />
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

    .menu-wrapper > .menuIcon-wrapper {
      display: none;
    }
  }

  @media screen and (max-width: 1023px) {
    .content-container {
      width: 744px;

      .menu-wrapper > .menuIcon-wrapper {
        display: block;
        display: flex;
        justify-content: end;
      }
    }
    .icon {
      font-size: 44px;
    }
    .icon:hover {
      cursor: pointer;
    }
    .header-logo {
      width: 150px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  /* 모바일 */
  @media screen and (max-width: 767px) {
    .content-container {
      width: 100%;
    }
    .menu-wrapper {
      min-width: 200px;
    }
  }
`;

const LogoWrapper = styled.div`
  > img:hover {
    cursor: pointer;
  }
`;
const MenuWrapper = styled.div`
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
      scale: 1.1;
    }
    .menu-tab:hover {
      cursor: pointer;
      transition-duration: 0.2s;
      border-bottom: 1px solid #5a7fdf;
      color: #5a7fdf;
      scale: 1.1;
    }
  }
  @media screen and (max-width: 1023px) {
    .menu-list {
      display: none;
    }
  }
`;

export default Header;
