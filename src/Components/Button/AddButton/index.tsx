import React from 'react';
import ArrowImg from 'Assets/Svg/Arrow.svg';
import { Link } from 'react-router-dom';
import * as S from './style';

export default function AddButton() {
  return (
    <Link to="/modal">
      <S.AddButton>
        <S.ArrowImg src={ArrowImg} />
      </S.AddButton>
    </Link>
  );
}
