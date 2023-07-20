import React, { Fragment } from "react";
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

const ModalOverlay = (props: { children: React.ReactNode }) => {
  return (
    <ModalDiv className="modal">
      <div className="content">{props.children}</div>
    </ModalDiv>
  );
};

const ModalDiv = styled.div`
  position: fixed;
  left: 50%;
  width: 50%;
  background-color: white;
  padding: 1rem;
  height: 100vh;
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
`;

const portalElement = document.getElementById("overlays");

const Modal = (props: {
  children: React.ReactNode;
  onMenuClose: () => void;
}) => {
  return (
    <ModalContainer>
      {ReactDom.createPortal(
        <Backdrop onMenuClose={props.onMenuClose} />,
        portalElement!
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement!
      )}
    </ModalContainer>
  );
};

const ModalContainer = styled.div``;

export default Modal;
