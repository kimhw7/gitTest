import React from "react";
import ReactDom from "react-dom";
import { styled } from "styled-components";

const Backdrop = ({ onMenuClose }: { onMenuClose: () => void }) => {
  return <BackdropDiv onClick={onMenuClose}></BackdropDiv>;
};

const BackdropDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

const ModalOverlay = (props: {
  children: React.ReactNode;
  isMenuOpen: boolean;
}) => {
  return (
    <AnimationWrapper>
      <ModalDiv className={props.isMenuOpen ? "sidebar active" : "sidebar"}>
        <div className="content">{props.children}</div>
      </ModalDiv>
    </AnimationWrapper>
  );
};

const AnimationWrapper = styled.div`
  .sidebar {
    left: 100%;
    transition: 0.5s;
  }

  .sidebar.active {
    left: 50%;
    transition: 0.7s;
  }
`;
const ModalDiv = styled.div`
  position: fixed;
  width: 50%;
  background-color: white;
  height: 100vh;
  z-index: 30;
`;

const portalElement = document.getElementById("overlays");

const Modal = (props: {
  children: React.ReactNode;
  onMenuClose: () => void;
  isMenuOpen: boolean;
}) => {
  return (
    <ModalContainer>
      {props.isMenuOpen &&
        ReactDom.createPortal(
          <Backdrop onMenuClose={props.onMenuClose} />,
          portalElement!
        )}
      {ReactDom.createPortal(
        <ModalOverlay isMenuOpen={props.isMenuOpen}>
          {props.children}
        </ModalOverlay>,
        portalElement!
      )}
    </ModalContainer>
  );
};

const ModalContainer = styled.div``;

export default Modal;
