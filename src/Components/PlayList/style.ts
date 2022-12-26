import styled from 'styled-components';

export const PlayList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 150px;
  border: 2px solid #3b28cc;
  margin: 12px 0px;
  padding: 0px 15px;
`;

export const Img = styled.img`
  height: 85%;
`;

export const Contents = styled.div`
  height: 85%;
  width: 100%;
  text-align: center;
`;

export const Title = styled.p`
  padding: 0px 12px;
  text-align: left;
  color: #000;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const SubTitle = styled.p`
  color: #000;
  text-align: left;
  padding: 0px 12px;
  font-size: 14px;
  font-weight: 500;
  max-height: 90px;
`;
