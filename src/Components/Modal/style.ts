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
  justify-content: center;
  padding: 2em;
  width: 500px;
  height: 600px;
  border-radius: 24px;
  background-color: #fff;
  z-index: 1;
`;
