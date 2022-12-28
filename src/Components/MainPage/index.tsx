import React from 'react';
import * as S from './style';
import Header from './Header';
import PlayList from '../PlayList/index';
import Modal from '../Modal/index';
import ListData from '../../Data/ListData.json';

export default function MainPage() {
  return (
    <>
      <Modal />
      <S.MainPage>
        <Header />
        <S.Content>
          {ListData.map((d, index) => (
            <PlayList
              title={d.title}
              explain={d.explain}
              url={d.url}
              nickname={d.nickname}
            />
          ))}
        </S.Content>
      </S.MainPage>
    </>
  );
}
