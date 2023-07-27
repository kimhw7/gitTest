import { styled } from "styled-components";

import supportList from "../asset/data/supportData";

const Support = () => {
  return (
    <DefaultContainer className="openAnimation">
      {supportList.map((el, idx) => {
        return (
          <SupportWrapper key={idx + "support"}>
            <p>{`이미지를 클릭하여 ${el.name} 연결`}</p>
            <a className="img-link" target="_blank" href={el.link}>
              <picture>
                <source srcSet={el.webpSrc} type="image/webp" />
                <source srcSet={el.webpSrc} type={"image/" + el.file} />
                <img
                  alt={`${el.name} 사진, 클릭시 해당 링크 이동`}
                  src={el.imgSrc}
                />
              </picture>
            </a>
          </SupportWrapper>
        );
      })}
    </DefaultContainer>
  );
};

const DefaultContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  font-size: 1.4rem;

  // 모바일
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
const SupportWrapper = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 64px;
  margin-bottom: 64px;

  > .img-link {
    margin-top: 16px;
  }
`;

export default Support;
