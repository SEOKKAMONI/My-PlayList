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
  width: 90%;
  border: 1px solid #3b28cc;
`;
