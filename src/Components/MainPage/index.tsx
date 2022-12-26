import React from 'react';
import * as S from './style';
import Header from './Header';
import PlayList from '../PlayList/index';

export default function MainPage() {
  return (
    <S.MainPage>
      <Header />
      <S.Content>
        <PlayList />
        <PlayList />
        <PlayList />
        <PlayList />
      </S.Content>
    </S.MainPage>
  );
}
