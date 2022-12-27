import React, { useRef } from 'react';
import { useRecoilState } from 'recoil';
import * as S from './style';
import { isOpenModalAtom } from '../../Atoms/Atom';

export default function Modal() {
  const [isOpenModal, setOpenModal] = useRecoilState<boolean>(isOpenModalAtom);
  const outSection = useRef() as React.MutableRefObject<HTMLInputElement>;

  return (
    <S.ModalBackground
      display={isOpenModal ? 'flex' : 'none'}
      ref={outSection}
      onClick={(e) => {
        if (outSection.current === e.target) {
          setOpenModal(false);
        }
      }}
    >
      <S.Modal>안녕안녕 나는 석진이야</S.Modal>
    </S.ModalBackground>
  );
}
