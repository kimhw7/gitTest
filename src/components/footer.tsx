import { styled } from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="content-container">
        <ImgContainer>
          <a href="https://intra.infofield.co.kr/" target="_blank">
            <img
              className="footer-logo"
              src="img/footer-logo.png"
              alt="footer 로고 사진, 클릭 시 인트라넷 이동"
            />
          </a>
        </ImgContainer>
        <AddressContainer className="addressContainer">
          <p className="em desktop">(주) 인포필드</p>
          <p className="desktop">대표 이승희</p>
          <p className="mobile">(주) 인포필드 &nbsp;&nbsp; 대표 이승희</p>
          <p className="desktop">
            주소: 서울시 금천구 가산디지털1로 204, 10층 1004호 (가산동,
            가산역반도아이비밸리)
          </p>
          <p className="mobile">
            주소: 서울시 금천구 가산디지털1로 204, 10층 1004호
          </p>
          <p>
            사업자 등톡번호: 201-86-00247 &nbsp;&nbsp; 이메일: if@infofield.net
          </p>
          <p>Copyright 2023 InfoField Co. All rights reserved.</p>
        </AddressContainer>
        <TelContainer className="telContainer">
          <div className="tel">
            <p>Tel</p>
            <p className="em">02 - 752 - 7168</p>
          </div>
          <div className="fax">
            <p>Fax</p>
            <p className="em">0505 - 333 - 7168</p>
          </div>
        </TelContainer>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: 000000;
  width: 100vw;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #a1a3b2;
  height: 160px;
  .mobile {
    display: none;
  }
  /* 태블릿 */
  @media screen and (max-width: 1023px) {
    height: 220px;
    flex-direction: column;
    padding: 8px 0;

    > .content-container {
      flex-direction: column;
      width: 744px;
    }

    .addressContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .telContainer {
      display: flex;
      justify-content: space-evenly;
      min-width: 744px;
    }
  }
  /* 모바일 */
  @media screen and (max-width: 767px) {
    height: 220px;
    > .content-container {
      width: 360px;
    }
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
    }

    .telContainer {
      min-width: 360px;
    }
  }

  > .content-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 1024px;
    font-size: 1.2rem;
    line-height: 20px;
    color: #444444;
  }
`;

const ImgContainer = styled.div`
  .footer-logo {
    width: 150px;
  }
`;

const AddressContainer = styled.div`
  > .em {
    font-weight: bolder;
  }
`;

const TelContainer = styled.div`
  font-size: 1.4rem;
  .em {
    font-size: 1.7rem;
    font-weight: bolder;
    color: #000000;
  }
`;

export default Footer;
