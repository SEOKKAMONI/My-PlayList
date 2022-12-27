import React from 'react';
import * as S from './style';

export default function TextInput() {
  return (
    <S.Form>
      <S.Input placeholder="텍스트를 입력하세요." />
    </S.Form>
  );
}
