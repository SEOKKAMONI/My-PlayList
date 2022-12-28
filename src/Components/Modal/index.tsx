import React, { useRef } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import SubmitButton from '../Button/SubmitButton/index';
import TextArea from '../Input/TextArea/index';
import * as S from './style';

import * as O from '../../Atoms/isOpenAtom';
import * as D from '../../Atoms/ListDataAtom';

import TextInput from '../Input/TextInput/index';

export default function Modal() {
  const [isOpenModal, setOpenModal] = useRecoilState<boolean>(
    O.isOpenModalAtom,
  );
  const outSection = useRef() as React.MutableRefObject<HTMLInputElement>;

  const setUrl = useSetRecoilState(D.isUrlAtom);
  const setTitle = useSetRecoilState(D.isTitleAtom);
  const setExplain = useSetRecoilState(D.isExplainAtom);

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
        <S.Form>
          <TextInput
            setState={() => setUrl}
            placeholder="유튜브 URL을 입력하세요."
          />
          <TextInput
            setState={() => setTitle}
            placeholder="노래 제목을 입력해주세요."
          />
          <TextArea placeholder="간단하게 자신의 방법으로 노래를 설명해주세요." />
          <SubmitButton onClick={() => alert('응 아직 안돼 좀 기다려')} />
        </S.Form>
      </S.Modal>
    </S.ModalBackground>
  );
}
