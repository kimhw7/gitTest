import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import documentList from "../asset/data/inforamtionData";
import ImgFull from "../components/informaton/ImgFull";
import { type } from "os";

type ClickedImg = {
  fullImgSrc: string;
  name: string;
};
const Information = () => {
  const [isImgOpen, setIsImgOpen] = useState<boolean>(false);
  const [clickedImg, setClickedImg] = useState<undefined | ClickedImg>(
    undefined
  );
  const closeImgHandler = () => {
    setIsImgOpen(false);
  };
  const openImgHandler = (src: string, imgName: string) => {
    setClickedImg({ fullImgSrc: src, name: imgName });
    setIsImgOpen(true);
  };
  const navigate = useNavigate();
  return (
    <DefaultWrapper className="openAnimation">
      {clickedImg && isImgOpen && (
        <ImgFull
          onImgClose={closeImgHandler}
          isImgOpen={isImgOpen}
          fullImgSrc={clickedImg.fullImgSrc}
          name={clickedImg.name}
        />
      )}
      <div className="text-wrapper">
        <p className="text">
          상호: (주)인포필드
          <br />
          사업자 등록 번호: 201-86-00247
        </p>
      </div>
      <div className="docu-wrapper">
        {documentList.map((el, idx) => {
          return (
            <Docu className="docu" key={idx + "docu"}>
              <div
                className="imgWrapper"
                onClick={() => openImgHandler(el.link, el.name)}
              >
                <picture>
                  <source srcSet={el.webpSrc} type="image/webp" />
                  <source srcSet={el.imgSrc} type="image/png" />
                  <img
                    src={el.imgSrc}
                    alt={`${el.name} 서류 미리보기 사진, 클릭 시 사진 링크 이동`}
                  />
                </picture>
              </div>
              <p>{el.name}</p>
            </Docu>
          );
        })}
      </div>
    </DefaultWrapper>
  );
};

const DefaultWrapper = styled.main`
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  .text {
    line-height: 1.4;
  }

  .docu-wrapper {
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: end;
    margin-top: 32px;
    margin-bottom: 32px;
    // 모바일
    @media screen and (max-width: 767px) {
      flex-direction: column;
      align-items: center;
      margin-top: 0;
    }
  }
`;
const Docu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 130px;
  }
  > p {
    margin-top: 8px;
  }
  // 모바일
  @media screen and (max-width: 767px) {
    margin-top: 32px;
  }
  .imgWrapper:hover {
    cursor: pointer;
  }
`;

export default Information;
