import React, { useRef } from 'react';
import { useRecoilState } from 'recoil';
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
        <S.Line />
        <TextInput />
        <TextInput />
        <TextArea />
      </S.Modal>
    </S.ModalBackground>
  );
}
