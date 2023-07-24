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
          return <li key={idx}>{el}</li>;
        })}
      </ul>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
`;

export default Card;
