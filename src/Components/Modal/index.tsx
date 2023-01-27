import React, { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { PlayListType } from 'type/list.type';
import { playListsAtom } from 'Atoms/isListDataAtom';
import TextArea from '../Input/TextArea/index';
import * as S from './style';
import * as O from '../../Atoms/isOpenAtom';
import TextInput from '../Input/TextInput/index';

export default function Modal() {
  // atom
  const [isOpenModal, setOpenModal] = useRecoilState<boolean>(
    O.isOpenModalAtom,
  );
  const [playLists, setPlayLists] =
    useRecoilState<PlayListType[]>(playListsAtom);

  const [playList, setPlayList] = useState<PlayListType>({
    id: 0,
    title: '',
    url: '',
    explain: '',
    name: '김석진',
  });

  // 모달 외 다른곳을 클릭했을때
  const outSection = useRef() as React.MutableRefObject<HTMLInputElement>;

  // 버튼 클릭
  const onClick = () => {
    const nextId: number =
      playLists.length > 0 ? playLists[playLists.length - 1].id + 1 : 0;
    console.log(playLists.length);
    setPlayList({ ...playList, id: nextId });

    setPlayLists([...playLists, playList]);
    setOpenModal(false);
  };

  // onChange
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setPlayList({ ...playList, [name]: value });
    console.log(playList);
  };

  return (
    <S.ModalBackground
      display={isOpenModal ? 'flex' : 'none'}
      ref={outSection}
      onClick={(e) => {
        if (outSection.current === e.target) {
          setOpenModal(false);
        }
      }}
    >
      <S.Modal>
        <S.Title>플레이 리스트 추가</S.Title>
        <S.Frame>
          <TextInput
            name="url"
            onChange={onChange}
            placeholder="유튜브 URL을 입력하세요."
          />
          <TextInput
            name="title"
            onChange={onChange}
            placeholder="노래 제목을 입력해주세요."
          />
          <TextArea
            name="explain"
            onChange={onChange}
            placeholder="간단하게 자신의 방법으로 노래를 설명해주세요."
          />
          <S.Button onClick={onClick}>추가하기</S.Button>
        </S.Frame>
      </S.Modal>
    </S.ModalBackground>
  );
}
