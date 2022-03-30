import styled from 'styled-components';

const MenuIcon = styled.img`
  display: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: inline;
    width: 18px;
    height: 15px;
    margin-right: 16px;
  }
`;

const ModalBox = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  @media screen and (min-width: 768px) {
    display: none;
    visibility: hidden;
  }
`;

const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000000;
  opacity: 0.5;
`;

const ModalContent = styled.div`
  position: absolute;
  width: 77%;
  height: 100%;
  background: white;
`;

const TopLogoBox = styled.div`
  border-bottom: 1px solid #e5e5e5;
`;

const TopLogoImg = styled.img`
  width: 92px;
  height: 12px;
  margin: 16px 20px 11px 20px;
  cursor: pointer;
`;

const ContentBox = styled.div`
  padding: 36px 32px;
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: 15px;
  height: 15px;
`;

const FirstMenuBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const MenuText = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-left: 8px;
`;

const LogOut = styled.div`
  margin-top: 24px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
`;

const ModalStyle = {
  MenuIcon,
  ModalBox,
  Overlay,
  ModalContent,
  TopLogoBox,
  TopLogoImg,
  ContentBox,
  LogoImg,
  FirstMenuBox,
  MenuText,
  LogOut,
};

export default ModalStyle;
