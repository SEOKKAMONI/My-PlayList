import React from 'react';
import ArrowImg from 'Assets/Svg/Arrow.svg';
import { useSetRecoilState } from 'recoil';
import { isOpenModalAtom } from '../../../Atoms/Atom';
import * as S from './style';

export default function AddButton() {
  const setOpenModal = useSetRecoilState<boolean>(isOpenModalAtom);

  return (
    <S.AddButton onClick={() => setOpenModal(true)}>
      <S.ArrowImg src={ArrowImg} />
    </S.AddButton>
  );
}
