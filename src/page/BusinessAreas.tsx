import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import businessAreaList from "../asset/data/businessAreaData";

const BusinessAreas = () => {
  const navigate = useNavigate();

  return (
    <DefaultWrapper className="openAnimation">
      {businessAreaList.map((el, idx) => {
        return (
          <div
            className={
              idx % 2 === 1
                ? "businessArea-wrapper reverse"
                : "businessArea-wrapper"
            }
            key={idx + "businessArea"}
          >
            <picture className="businessArea-img">
              <source srcSet={el.webpSrc} type="image/webp" />
              <source srcSet={el.imgSrc} type="image/png" />

              <img
                className="businessArea-img-inner"
                src={el.imgSrc}
                alt={el.title + "사진"}
              />
            </picture>
            <TextWrapper className="textWrapper">
              <h2 className="title">{el.title}</h2>
              {el.content.map((el, idx) => {
                return (
                  <p className="content" key={idx + "content"}>
                    {el}
                  </p>
                );
              })}
              {idx === 0 && (
                <button
                  className="serviceButton"
                  onClick={() => navigate("/service")}
                >
                  해당 서비스 확인하기
                </button>
              )}
            </TextWrapper>
          </div>
        );
      })}
    </DefaultWrapper>
  );
};

const DefaultWrapper = styled.main`
  font-size: 1.4rem;
  width: 100%;
  .businessArea-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 32px 8px;

    .businessArea-img {
      width: 350px;
      height: 350px;

      .businessArea-img-inner {
        width: 100%;
      }
    }
  }
  .reverse {
    flex-direction: row-reverse;
  }
  // 모바일
  @media screen and (max-width: 767px) {
    .businessArea-wrapper {
      flex-direction: column;
      align-items: center;

      .businessArea-img {
        width: 100%;
      }
    }
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  color: #808080;
  line-height: 1.5;
  .title {
    font-size: 1.7rem;
    font-weight: bolder;
  }

  .content {
    margin-top: 12px;
  }

  .serviceButton {
    padding: 8px;
    margin-top: 8px;
    margin-bottom: 32px;
    border: 1px solid #808080;
    border-radius: 5px;
    min-height: 40px;
  }

  .serviceButton:hover {
    cursor: pointer;
  }
  // 모바일
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`;

export default BusinessAreas;
