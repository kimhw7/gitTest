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
    // link: "http://www.infofield.net/ImageInfo/if_regist.jpg",
    link: "/ImageInfo/if_bank.jpg",
  },
  {
    name: "입금 계좌 사본",
    webpSrc: "img/if-bank.webp",
    imgSrc: "img/if-bank.png",
    link: "http://www.infofield.net/ImageInfo/if_bank.jpg",
  },
];

export default documentList;
