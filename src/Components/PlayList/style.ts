import styled from 'styled-components';

export const PlayList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 150px;
  border-bottom: 2px solid #3b28cc;
  margin: 12px 0px;
`;

export const Img = styled.img`
  height: 85%;
  padding-right: 10px;
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
