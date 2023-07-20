import { styled } from "styled-components";

import Modal from "./Modal";

type Props = {
  onMenuClose: () => void;
};

const Menu = ({ onMenuClose }: Props) => {
  return (
    <Modal onMenuClose={onMenuClose}>
      <MenuContainer></MenuContainer>
    </Modal>
  );
};

const MenuContainer = styled.nav`
  width: 90rem;
  height: 100%;
  background-color: #ffffff;
`;

export default Menu;
