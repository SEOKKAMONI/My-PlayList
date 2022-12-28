import React from 'react';
import ArrowImg from 'Assets/Svg/Arrow.svg';
import { useSetRecoilState } from 'recoil';
import { isOpenModalAtom } from '../../../Atoms/Atom';
import * as S from './style';

export default function AddButton() {
  const setOpenModal = useSetRecoilState<boolean>(isOpenModalAtom);

  return (
    <S.Button onClick={() => setOpenModal(true)}>
      <S.Img src={ArrowImg} />
    </S.Button>
  );
}
