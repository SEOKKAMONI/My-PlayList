import styled from 'styled-components';

export const PlayList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 150px;
  border-bottom: 2px solid #3b28cc;
  padding: 10px 0px;
`;

export const Shortcut = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  color: #000;
  font-weight: bold;
  opacity: 0;
  z-index: 2;
  transition: 0.3s ease-in-out;
`;

export const Img = styled.img`
  height: 100%;
  padding-right: 10px;
  opacity: 1;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  cursor: pointer;
`;

export const ImgBox = styled.div`
  position: relative;
  height: 85%;
  &:hover ${Shortcut} {
    opacity: 1;
  }
  &:hover ${Img} {
    opacity: 0.3;
  }
`;

export const Contents = styled.div`
  position: relative;
  height: 85%;
  width: 100%;
  text-align: center;
`;

export const Title = styled.p`
  text-align: left;
  color: #000;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const SubTitle = styled.p`
  color: #000;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  max-height: 90px;
`;

export const NickName = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: right;
  font-size: 14px;
  font-weight: 600;
`;
