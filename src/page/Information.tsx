import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import documentList from "../asset/data/inforamtionData";

const Information = () => {
  const navigate = useNavigate();
  return (
    <DefaultWrapper className="openAnimation">
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
              <div onClick={() => navigate(el.link)}>
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
`;

export default Information;
