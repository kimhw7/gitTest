import React from "react";
import ReactDom from "react-dom";
import { styled } from "styled-components";

const Backdrop = ({ onImgClose }: { onImgClose: () => void }) => {
  return <BackdropDiv onClick={onImgClose}></BackdropDiv>;
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
  isImgOpen: boolean;
}) => {
  return (
    <ModalDiv>
      <div className="content">{props.children}</div>
    </ModalDiv>
  );
};

const ModalDiv = styled.div`
  position: fixed;
  z-index: 30;
  display: flex;
`;

const portalElement = document.getElementById("overlays");

const ImgModal = (props: {
  children: React.ReactNode;
  onImgClose: () => void;
  isImgOpen: boolean;
}) => {
  return (
    <ModalContainer>
      {props.isImgOpen &&
        ReactDom.createPortal(
          <Backdrop onImgClose={props.onImgClose} />,
          portalElement!
        )}
      {ReactDom.createPortal(
        <ModalOverlay isImgOpen={props.isImgOpen}>
          {props.children}
        </ModalOverlay>,
        portalElement!
      )}
    </ModalContainer>
  );
};

const ModalContainer = styled.div``;

export default ImgModal;
