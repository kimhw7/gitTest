import { styled } from "styled-components";

type Documents = {
  name: string;
  webpSrc: string;
  imgSrc: string;
  link: string;
};

const Information = () => {
  const documentList: Documents[] = [
    {
      name: "사업자 등록증",
      webpSrc: "img/if-regist.webp",
      imgSrc: "img/if-regist.png",
      link: "http://www.infofield.net/ImageInfo/if_regist.jpg",
    },
    {
      name: "입금 계좌 사본",
      webpSrc: "img/if-bank.webp",
      imgSrc: "img/if-bank.png",
      link: "http://www.infofield.net/ImageInfo/if_bank.jpg",
    },
  ];
  return (
    <DefaultWrapper>
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
              <a href={el.link} target="_blank">
                <picture>
                  <source srcSet={el.webpSrc} type="image/webp" />
                  <source srcSet={el.imgSrc} type="image/png" />
                  <img
                    src={el.imgSrc}
                    alt={`${el.name} 서류 미리보기 사진, 클릭 시 사진 링크 이동`}
                  />
                </picture>
              </a>
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
