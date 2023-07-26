import { styled } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

import Modal from "./Modal";
import { menuList } from "./Header";

type Props = {
  onMenuClose: () => void;
  isMenuOpen: boolean;
};

const Menu = ({ onMenuClose, isMenuOpen }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const onMenuClick = (path: string) => {
    onMenuClose();
    navigate(path);
  };

  return (
    <Modal onMenuClose={onMenuClose} isMenuOpen={isMenuOpen}>
      <MenuContainer>
        <div className="header">
          <AiOutlineClose className="close" onClick={onMenuClose} />
        </div>
        <ul>
          {menuList.map((el, idx) => (
            <li
              key={idx + "menu"}
              className={
                el.path === location.pathname ? "menu-tab active" : "menu-tab"
              }
              onClick={() => onMenuClick(el.path)}
            >
              {el.name}
            </li>
          ))}
        </ul>
      </MenuContainer>
    </Modal>
  );
};

const MenuContainer = styled.nav`
  width: 100%;
  height: 50%;

  > .header {
    width: 100%;
    background-color: #007776;
    height: 70px;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    font-size: 3rem;
    .close {
      margin-right: 30px;
    }
    .close:hover {
      cursor: pointer;
      color: #ffffff;
    }
  }

  .menu-tab {
    border-bottom: 1px solid #a1a3b2;
    font-size: 1.7rem;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .menu-tab:hover {
    cursor: pointer;
    border-bottom: 1px solid #5a7fdf;
    color: #5a7fdf;
    background-color: #f6f6f6;
    font-size: 1.8rem;
  }
  .active {
    border-bottom: 1px solid #5a7fdf;
    color: #5a7fdf;
    background-color: #f6f6f6;
    font-size: 1.8rem;
  }
`;

export default Menu;
