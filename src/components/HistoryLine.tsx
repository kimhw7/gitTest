import { styled } from "styled-components";
import { BiSolidRightArrow } from "react-icons/bi";

type Props = {
  date: string;
  content: string;
};

const HistoryLine = (props: Props) => {
  return (
    <HistoryLineWrapper>
      <div className="date-wrapper">
        <p className="arrow color">
          <BiSolidRightArrow />
        </p>
        <p className="date color">{props.date}</p>
      </div>
      <p className="content">{props.content}</p>
    </HistoryLineWrapper>
  );
};

const HistoryLineWrapper = styled.div`
  margin-bottom: 12px;
  position: relative;
  left: -6px;
  display: flex;
  .date-wrapper {
    display: flex;
    min-width: 75px;
    font-size: 1.4rem;
    > .date {
      font-weight: bold;
      margin-left: 4px;
    }
  }
  .color {
    color: #006b6a;
  }
  .content {
    margin-left: 8px;
  }
`;

export default HistoryLine;
