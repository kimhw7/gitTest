type SupportData = {
  name: string;
  webpSrc: string;
  imgSrc: string;
  file: string;
  link: string;
};

const supportList: SupportData[] = [
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

export default supportList;
