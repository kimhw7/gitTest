import { styled } from "styled-components";

import Card from "../components/UI/Card";

export type Organization = {
  name: string;
  content: string[];
};

const organizationList: Organization[] = [
  {
    name: "영업부",
    content: ["상담, 견적", "02)752-7168", `E-mail: \n if@infofield.net`],
  },
  {
    name: "기술지원부",
    content: [
      "기술문의 원격지원",
      "070-8888-0064",
      `E-mail: \n support@infofield.net`,
    ],
  },
  {
    name: "관리부",
    content: ["회계/총무 업무", `E-mail: \n if@infofield.net`],
  },
];

const Organization = () => {
  return (
    <DefaultWrapper>
      <div className="card-wrapper">
        {organizationList.map((el, idx) => {
          return <Card key={idx} props={el} />;
        })}
      </div>
    </DefaultWrapper>
  );
};

const DefaultWrapper = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;

  > .card-wrapper {
    width: 100%;
    margin-top: 32px;
    display: flex;
    justify-content: space-around;
  }

  /* .mobile {
    display: none;
  } */
  // 모바일
  /* @media screen and (max-width: 767px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
    } */
  /* } */
`;

export default Organization;
