import React from 'react';
import * as S from './style';
import Header from './Header';
import PlayList from '../PlayList/index';
import Modal from '../Modal/index';

export default function MainPage() {
  return (
    <>
      <Modal />
      <S.MainPage>
        <Header />
        <S.Content>
          <PlayList />
        </S.Content>
      </S.MainPage>
    </>
  );
}
