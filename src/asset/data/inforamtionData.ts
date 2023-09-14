type Documents = {
  name: string;
  webpSrc: string;
  imgSrc: string;
  link: string;
};

const documentList: Documents[] = [
  {
    name: "사업자 등록증",
    webpSrc: "img/if-regist.webp",
    imgSrc: "img/if-regist.png",
    link: "img/if-regist_full.jpg",
  },
  {
    name: "입금 계좌 사본",
    webpSrc: "img/if-bank.webp",
    imgSrc: "img/if-bank.png",
    link: "img/if-bank_full.jpg",
  },
];

export default documentList;
