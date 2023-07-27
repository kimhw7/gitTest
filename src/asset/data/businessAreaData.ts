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
      "Exchange Server 장애처리, Exchange Server 마이그레이션, Exchange Server 유지보수 전문",
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

export default businessAreaList;
