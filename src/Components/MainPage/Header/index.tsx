import React from 'react';
import * as S from './style';
import AddButton from '../../Button/AddButton/index';

export default function Header() {
  return (
    <S.Header>
      <S.InnerFrame>
        <S.Logo>SharePlayList</S.Logo>
        <AddButton />
      </S.InnerFrame>
    </S.Header>
  );
}
