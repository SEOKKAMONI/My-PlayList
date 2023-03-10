import styled from 'styled-components';

export const PlayList = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 150px;
  border-bottom: 2px solid #3b28cc;
  padding: 8px 0px;
`;

export const Link = styled.a`
  height: 85%;
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
  transition: 0.3s ease-in-out;
`;

export const Img = styled.img`
  height: 100%;
  margin-right: 10px;
  opacity: 1;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  cursor: pointer;
`;

export const ImgBox = styled.div`
  position: relative;
  height: 85%;
  margin-right: 12px;
  &:hover ${Shortcut} {
    opacity: 1;
  }
  &:hover ${Img} {
    opacity: 0.3;
  }
`;

export const Contents = styled.div`
  height: 85%;
  width: 100%;
  text-align: center;
`;

export const ContentsFrame = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
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

export const NickName = styled.span`
  position: absolute;
  right: 0;
  font-size: 16px;
  font-weight: 600;
`;

export const Delete = styled.a`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  color: #f00;
`;
