import React from 'react';
import { useRecoilState } from 'recoil';
import * as S from './style';
import Header from './Header';
import PlayList from '../PlayList/index';
import { isOpenModalAtom } from '../../Atoms/Atom';

export default function MainPage() {
  const [isOpenModal, setOpenModal] = useRecoilState(isOpenModalAtom);

  return (
    <S.MainPage>
      <Header />
      <S.Content>
        <PlayList />
      </S.Content>
    </S.MainPage>
  );
}
