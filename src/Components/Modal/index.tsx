import React, { useRef, FormEventHandler, useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import SubmitButton from '../Button/SubmitButton/index';
import TextArea from '../Input/TextArea/index';
import * as S from './style';
import * as O from '../../Atoms/isOpenAtom';
import TextInput from '../Input/TextInput/index';

export default function Modal() {
  const [playList, setPlayList] = useState({
    title: '',
    url: '',
    explain: '',
    name: '',
  });
  // 모달
  const [isOpenModal, setOpenModal] = useRecoilState<boolean>(
    O.isOpenModalAtom,
  );
  const outSection = useRef() as React.MutableRefObject<HTMLInputElement>;

  // 버튼 클릭
  const BtnClickEvent: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    setOpenModal(false);
  };

  // onChange
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPlayList({ ...playList, [name]: value });
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
        <S.Form onSubmit={BtnClickEvent}>
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
          <TextInput
            name="explain"
            onChange={onChange}
            placeholder="간단하게 자신의 방법으로 노래를 설명해주세요."
          />
          <SubmitButton />
        </S.Form>
      </S.Modal>
    </S.ModalBackground>
  );
}
