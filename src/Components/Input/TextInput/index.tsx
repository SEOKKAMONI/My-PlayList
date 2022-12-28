import React from 'react';
import * as S from './style';

interface PropsType {
  placeholder: string;
}

export default function TextInput({ placeholder }: PropsType) {
  return (
    <S.Frame>
      <S.Input placeholder={placeholder} />
    </S.Frame>
  );
}
