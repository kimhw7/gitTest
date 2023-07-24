import { styled } from "styled-components";

import HistoryLine from "../util/HistoryLine";
import HistoryData from "../util/HistoryData";

const AboutUs = () => {
  return (
    <DefaultContainer>
      <div className="text-wrapper">
        <p>
          ㈜인포필드는 넘쳐나는 정보와 급변하는 인터넷환경에서 고객사가 원하는
          전반적인 IT환경에 대한 <br /> 컨설팅 및 가장 뛰어나고 정확한
          문제해결을 그 목표로 하고 있습니다.
        </p>
        <p>
          당사는 MicroSoft Server 제품군 및 M365 에 대한 기술지원에 특화되어
          있으며, <br /> 관련 엔지니어들을 지속적으로 교육하여 서비스 수준을
          향상시키고 있습니다.
        </p>
        <p>
          대기업 및 그룹사에 대한 프로젝트 수행 경험이 많으며, MS Server 제품군
          및 일반사용자에 대한 HelpDesk 외주운영도 지원하고 있습니다.
        </p>
        <p>
          당사와 거래를 시작한 고객사는 당사 창업 이후 최장 15년 이상 거래를 해
          오고 있습니다. <br /> 고객사의 모든 요구를 수행할 능력을 보여드리며
          또한 정직한 거래를 꾸준히 하고 있기에 현재까지 이르러 올 수
          있었습니다.
        </p>
        <p>
          우수한 실력과 정직한 마인드로 고객사를 대하고 있으므로, 당사의
          서비스를 필요로 하시는 사업장은 언제든 연락 주시기 바랍니다.
        </p>
        <p>감사합니다.</p>
        <p>(주)인포필드 대표 이 승희</p>
      </div>
      <div className="img-wrapper">
        <div className="history-text">
          <p className="text">회사 연혁</p>
        </div>
        {/* <img
          className="history"
          src="img/history1.png"
          alt="회사 연혁 이미지"
        ></img> */}
        <History className="history-wrapper">
          {HistoryData.map((el, idx) => {
            return (
              <HistoryLine key={idx} date={el.date} content={el.content} />
            );
          })}
        </History>
      </div>
    </DefaultContainer>
  );
};

const DefaultContainer = styled.main`
  /* maring 값 빼주기 */
  width: calc(100% - 16px);
  font-size: 1.4rem;
  line-height: 1.5;
  padding-top: 20px;
  margin-left: 16px;
  .text-wrapper > p {
    margin-bottom: 20px;
  }

  > .img-wrapper {
    margin: 32px 0;
    border-top: 1px solid #cfcfcf;
    .history-text {
      margin: 16px 0;
      display: flex;
      justify-content: center;

      .text {
        font-size: 2rem;
        font-weight: bolder;
      }
    }
  }

  /* 모바일 */
  @media screen and (max-width: 767px) {
    margin: 0;
    .history {
      width: 360px;
    }
  }
`;
const History = styled.section`
  border-left: 1px solid #006b6a;
  padding: 8px 0 4px 0;
`;

export default AboutUs;
