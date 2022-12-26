import React from 'react';
import ArrowImg from 'Assets/Svg/Arrow.svg';
import * as S from './style';

export default function AddButton() {
  return (
    <S.AddButton>
      <S.ArrowImg src={ArrowImg} />
    </S.AddButton>
  );
}
