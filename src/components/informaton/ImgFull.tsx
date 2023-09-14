import styled from "styled-components";

import ImgModal from "./ImgModal";

type Props = {
  onImgClose: () => void;
  isImgOpen: boolean;
  fullImgSrc: string;
  name: string;
};
const ImgFull = ({ onImgClose, isImgOpen, fullImgSrc, name }: Props) => {
  return (
    <ImgModal onImgClose={onImgClose} isImgOpen={isImgOpen}>
      <ImgWrapper>
        <img id="fullImg" src={fullImgSrc} alt={name} />
      </ImgWrapper>
    </ImgModal>
  );
};

const ImgWrapper = styled.div`
  #fullImg {
    max-height: 80vh;
    max-width: 80vw;
  }
`;

export default ImgFull;
