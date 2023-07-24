import { styled } from "styled-components";

import type { Organization } from "../../page/Organization";

type Props = {
  props: Organization;
};

const Card = ({ props }: Props) => {
  return (
    <CardWrapper>
      <div className="header">
        <p>{props.name}</p>
      </div>
      <ul className="content-wrapper">
        {props.content.map((el, idx) => {
          return (
            <li key={idx + "list"} className="list">
              <div className="dot">•&nbsp;&nbsp;</div>
              <div>{el}</div>
            </li>
          );
        })}
      </ul>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  // 모바일
  @media screen and (max-width: 767px) {
    margin-top: 16px;
  }

  .header {
    background-color: #007776;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 190px;
    color: white;
  }
  .content-wrapper {
    background-color: #f6f6f6;
    height: calc(190px - 35px - 60px);
    width: calc(190px - 16px);
    padding: 30px 0 30px 16px;
    line-height: 1.5;

    .list {
      display: flex;
    }
  }
`;

export default Card;
