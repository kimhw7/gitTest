import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

type BusinessAreaData = {
  webpSrc: string;
  imgSrc: string;
  title: string;
  content: string[];
};

const businessAreaList: BusinessAreaData[] = [
  {
    webpSrc: "img/windowsserver.webp",
    imgSrc: "img/windowsserver.png",
    title: "Microsoft Server 기술지원",
    content: [
      "Windows Server, Active Directory, Exchange Server, MSSQL Server, TMG/ARR, IIS, Cluster 등의 컨설팅, 설치, 마이그레이션 및 장애처리 업무 수행",
      "MicroSoft 서버제품군 및 Hyper-V 를 기반으로 하는 대규모 시스템 디자인",
      "익스체인지서버 장애처리, 익스체인지서버 마이그레이션, 익스체인지서버 유지보수 전문",
      "MicroSoft Hyper-V 기반 가상서버/개발서버 임대/호스팅 및 Windows 서버 가상화",
    ],
  },
  {
    webpSrc: "img/Micro365.webp",
    imgSrc: "img/Micro365.png",
    title: "M365 외주 헬프데스크",
    content: [
      " M365 사용 고객사 중 M365 전담 기술지원이 불가한 경우 외주 지원",
      " 1선 : Client 사용문제 직접지원. (OutLook, 메일전송 불가 등)",
      "2선 : M365 Magege 기술지원 및 문제 해결. AADC, Exchange Hybrid 등 업무 지원",
    ],
  },
  {
    webpSrc: "img/handshake.webp",
    imgSrc: "img/handshake.png",
    title: "중소기업 IT Total 아웃소싱",
    content: [
      "Server, PC, Network 등 중소기업이 필요로 하는 제반 업무 대행",
      "기본부터 고급업무를 포함하여 외주위탁을 함으로써 저렴한 비용으로 고효율  서비스 수행",
      "외국계 한국지사의 IT관리업무 위탁 수행. – 각종 서버, VPN 기본 관리",
      "기타 필요로 하는 부분만 위탁 가능",
    ],
  },
];

const BusinessAreas = () => {
  const navigate = useNavigate();

  return (
    <DefaultWrapper>
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
      width: 40%;

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
    padding: 8px 0;
    margin-top: 8px;
    margin-bottom: 32px;
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
