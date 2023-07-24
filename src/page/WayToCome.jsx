import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { styled } from "styled-components";

import Location from "../components/location";

const WayToCome = () => {
  return (
    <DefaultContainer>
      <Location />
      <div className="information-container">
        <div className="information-wrapper">
          <MdLocationOn />
          <p>서울시 금천구 가산디지털1로 204, 10층 1004호</p>
        </div>
        <div className="information-wrapper">
          <BsFillTelephoneFill />
          <p>02 - 752 - 7168</p>
        </div>
        <div className="information-wrapper">
          <MdEmail />
          <p>if@infofield.net</p>
        </div>
      </div>
    </DefaultContainer>
  );
};

const DefaultContainer = styled.main`
  font-size: 1.7rem;
  display: flex;
  flex-direction: column;

  .information-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 24px;
  }

  .information-wrapper {
    display: flex;
  }

  .information-wrapper > p {
    font-size: 1.4rem;
    margin-left: 8px;
  }

  /* 모바일 */
  @media screen and (max-width: 767px) {
    .information-container {
      flex-direction: column;
      align-items: start;
      justify-content: space-between;

      .information-wrapper {
        margin-top: 16px;
      }
    }
  }
`;

export default WayToCome;
