import { styled } from "styled-components";

import Card from "../components/UI/Card";
import organizationList from "../asset/data/organizationData";

const Organization = () => {
  return (
    <DefaultWrapper className="openAnimation">
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
    margin-top: 48px;
    display: flex;
    justify-content: space-around;

    // 모바일
    @media screen and (max-width: 767px) {
      flex-direction: column;
      align-items: center;
      margin: 0 0 16px 0;
    }
  }
`;

export default Organization;
