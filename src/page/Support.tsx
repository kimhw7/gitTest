import { styled } from "styled-components";

type SupportData = {
  name: string;
  webpSrc: string;
  imgSrc: string;
  file: string;
  link: string;
};

const Support = () => {
  const support: SupportData[] = [
    {
      name: "원격지원",
      webpSrc: "img/anySupport.webp",
      imgSrc: "img/anySupport.gif",
      file: "gif",
      link: "https://as82.kr/infofield/",
    },
    {
      name: "네이버 카페",
      webpSrc: "img/naverCafe.webp",
      imgSrc: "img/naverCafe.png",
      file: "png",
      link: "https://cafe.naver.com/msexchange?iframe_url=/ArticleList.nhn%3Fsearch.clubid=23119675%26search.menuid=12%26search.boardtype=L",
    },
  ];
  return (
    <DefaultContainer className="openAnimation">
      {support.map((el, idx) => {
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
