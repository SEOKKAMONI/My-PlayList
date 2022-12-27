import React from 'react';
import { useRecoilValue } from 'recoil';
import * as S from './style';
import { isOpenModalAtom } from '../../Atoms/Atom';

export default function Modal() {
  const isOpenModal = useRecoilValue(isOpenModalAtom);

  return (
    <S.ModalBackground display={isOpenModal ? 'flex' : 'none'}>
      <S.Modal>안녕안녕 나는 석진이야</S.Modal>
    </S.ModalBackground>
  );
}
