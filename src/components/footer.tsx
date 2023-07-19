import { styled } from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
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
        <AddressContainer>
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
        <TelContainer>
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
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: 000000;
  width: 100vw;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #e5e5e5;
  height: 160px;
  .mobile {
    display: none;
  }
  @media screen and (max-width: 1023px) {
    height: 220px;
    flex-direction: column;
    padding: 8px 0;
  }
  @media screen and (max-width: 767px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
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
    @media screen and (max-width: 1023px) {
      flex-direction: column;
      width: 744px;
    }

    @media screen and (max-width: 767px) {
      width: 360px;
    }
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
  @media screen and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 767px) {
  }
`;

const TelContainer = styled.div`
  font-size: 1.4rem;
  .em {
    font-size: 1.7rem;
    font-weight: bolder;
    color: #000000;
  }
  @media screen and (max-width: 1023px) {
    display: flex;
    justify-content: space-evenly;
    min-width: 744px;
  }
  @media screen and (max-width: 767px) {
    min-width: 360px;
  }
`;

export default Footer;
