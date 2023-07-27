export type Organization = {
  name: string;
  content: string[];
};

const organizationList: Organization[] = [
  {
    name: "영업부",
    content: ["상담, 견적", "02)752-7168", `E-mail: if@infofield.net`],
  },
  {
    name: "기술지원부",
    content: [
      "기술문의 원격지원",
      "070-8888-0064",
      `E-mail: support@infofield.net`,
    ],
  },
  {
    name: "관리부",
    content: ["회계/총무 업무", `E-mail: if@infofield.net`],
  },
];

export default organizationList;
