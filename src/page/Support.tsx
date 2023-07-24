import { styled } from "styled-components";

type SupportData = {
  name: string;
  imgSrc: string;
  link: string;
};

const Support = () => {
  const support: SupportData[] = [
    {
      name: "원격지원",
      imgSrc: "anySupport.gif",
      link: "https://as82.kr/infofield/",
    },
    {
      name: "네이버 카페",
      imgSrc: "naverCafe.png",
      link: "https://cafe.naver.com/msexchange?iframe_url=/ArticleList.nhn%3Fsearch.clubid=23119675%26search.menuid=12%26search.boardtype=L",
    },
  ];
  return (
    <DefaultContainer>
      {support.map((el, idx) => {
        return (
          <SupportWrapper key={idx}>
            <p>{`이미지를 클릭하여 ${el.name} 연결`}</p>
            <a className="img-link" target="_blank" href={el.link}>
              <img
                alt={`${el.name} 사진, 클릭시 해당 링크 이동`}
                src={`img/${el.imgSrc}`}
              />
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

  > .img-link {
    margin-top: 16px;
  }
`;

export default Support;
