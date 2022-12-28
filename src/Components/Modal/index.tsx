import React, { useRef } from 'react';
import { useRecoilState } from 'recoil';
import SubmitButton from '../Button/SubmitButton/index';
import TextArea from '../Input/TextArea/index';
import * as S from './style';
import { isOpenModalAtom } from '../../Atoms/Atom';
import TextInput from '../Input/TextInput/index';

export default function Modal() {
  const [isOpenModal, setOpenModal] = useRecoilState<boolean>(isOpenModalAtom);
  const outSection = useRef() as React.MutableRefObject<HTMLInputElement>;

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
          <TextInput placeholder="유튜브 URL을 입력하세요." />
          <TextInput placeholder="노래 제목을 입력해주세요." />
          <TextArea placeholder="간단하게 자신의 방법으로 노래를 설명해주세요." />
          <SubmitButton />
        </S.Form>
      </S.Modal>
    </S.ModalBackground>
  );
}
