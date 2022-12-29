import React, { useRef, FormEventHandler, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import SubmitButton from '../Button/SubmitButton/index';
import TextArea from '../Input/TextArea/index';
import * as S from './style';
import * as O from '../../Atoms/isOpenAtom';
import TextInput from '../Input/TextInput/index';
import * as A from '../../Atoms/isListDataAtom';

export default function Modal() {
  const [isUrl, setUrl] = useState<string>('');
  const [isTitle, setTitle] = useState<string>('');
  const [isExplain, setExplain] = useState<string>('');

  const setListData = useSetRecoilState(A.isListData);

  const [isOpenModal, setOpenModal] = useRecoilState<boolean>(
    O.isOpenModalAtom,
  );
  const outSection = useRef() as React.MutableRefObject<HTMLInputElement>;

  const BtnClickEvent: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (isTitle === '' || isUrl === '' || isExplain === '') {
      alert('필수 항목 중 안적으신게 있습니다 !!');
      return;
    }
    setListData((listData) => [
      ...listData,
      {
        title: isTitle,
        url: isUrl,
        explain: isExplain,
        name: '김석진',
      },
    ]);

    setExplain('');
    setTitle('');
    setUrl('');
    setOpenModal(false);
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
            setState={setUrl}
            state={isUrl}
            placeholder="유튜브 URL을 입력하세요."
          />
          <TextInput
            setState={setTitle}
            state={isTitle}
            placeholder="노래 제목을 입력해주세요."
          />
          <TextArea
            setState={setExplain}
            state={isExplain}
            placeholder="간단하게 자신의 방법으로 노래를 설명해주세요."
          />
          <SubmitButton />
        </S.Form>
      </S.Modal>
    </S.ModalBackground>
  );
}
