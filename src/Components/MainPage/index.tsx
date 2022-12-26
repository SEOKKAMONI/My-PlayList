import React from 'react';
import * as S from './style';
import Header from './Header';

export default function MainPage() {
  return (
    <S.MainPage>
      <Header />
      <S.Content>컨텐트 부분 입니다</S.Content>
    </S.MainPage>
  );
}
