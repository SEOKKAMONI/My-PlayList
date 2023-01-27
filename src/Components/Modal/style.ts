import styled from 'styled-components';

export const ModalBackground = styled.div<{ display: string }>`
  display: ${(props) => props.display};
  width: 100%;
  height: 100%;
  position: fixed;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.3);
  z-index: 1;
`;

export const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  width: 500px;
  height: 600px;
  border-radius: 24px;
  background-color: #fff;
  z-index: 1;
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 500;
`;

export const Line = styled.div`
  margin: 12px 0px;
  width: 350px;

  border: 1px solid #3b28cc;
`;

export const Frame = styled.div`
  position: absolute;
  top: 80px;
  display: flex;
  flex-direction: column;
  align-content: center;
  height: 75%;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #3b28cc;
  width: 80px;
  height: 30px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  padding: 12px;
  color: #fff;
`;
