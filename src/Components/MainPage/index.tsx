import React, { useEffect } from 'react';
import { PlayListType } from 'type/list.type';
import { useRecoilValue } from 'recoil';
import { playListsAtom } from 'Atoms/isListDataAtom';
import * as S from './style';
import Header from './Header';
import PlayList from '../PlayList/index';
import Modal from '../Modal/index';

export default function MainPage() {
  const playLists = useRecoilValue<PlayListType[]>(playListsAtom);
  localStorage.setItem('list-data', JSON.stringify(playLists));

  return (
    <>
      <Modal />
      <S.MainPage>
        <Header />
        <S.Content>
          {playLists &&
            playLists.map((d: PlayListType) => (
              <PlayList
                key={d.id}
                id={d.id}
                title={d.title}
                explain={d.explain}
                url={d.url}
                name={d.name}
              />
            ))}
        </S.Content>
      </S.MainPage>
    </>
  );
}
